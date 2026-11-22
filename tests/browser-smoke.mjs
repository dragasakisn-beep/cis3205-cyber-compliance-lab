import assert from 'node:assert/strict';
import {mkdir} from 'node:fs/promises';
import {chromium} from 'playwright';
const base=process.env.CCOC_BASE_URL||'http://127.0.0.1:4173/';
const out=process.env.CCOC_TEST_OUTPUT||'test-output';
await mkdir(out,{recursive:true});
const browser=await chromium.launch({headless:true});
try{
  const context=await browser.newContext({viewport:{width:1440,height:1000}});
  const page=await context.newPage();
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.goto(base);await page.locator('.resources-home').waitFor();
  const cards=page.locator('.resources-home .rl-home .card');assert.equal(await cards.count(),3);
  for(const k of ['government','industry','academic']){
    const img=page.locator('.rl-home img[src$="/'+k+'.webp"]');
    await img.waitFor();await page.waitForFunction(el=>el.complete&&el.naturalWidth===2048,await img.elementHandle());
    assert.equal(await img.evaluate(el=>el.naturalHeight),768);
    await page.locator('.rl-home [data-filter="'+k+'"]').click();
    const hero=page.locator('.rl-hero');assert.ok((await hero.getAttribute('src')).endsWith('/'+k+'.webp'));
    await page.waitForFunction(el=>el.complete&&el.naturalWidth===2048,await hero.elementHandle());
    assert.ok(await page.locator('.rl-result').count()>0);
    await page.screenshot({path:out+'/'+k+'-desktop.png',fullPage:false});
    await page.locator('[data-action="home"]').first().click();
  }
  await page.locator('.resources-home').screenshot({path:out+'/library-home-desktop.png'});
  await page.setViewportSize({width:390,height:844});
  await page.locator('.resources-home').screenshot({path:out+'/library-home-mobile.png'});
  assert.equal(await page.locator('.resources-home').evaluate(e=>e.scrollWidth<=e.clientWidth),true);
  await page.setViewportSize({width:1440,height:1000});
  await page.locator('[data-action="lab"][data-id="8"]').first().click();
  await page.getByText('Unlock this laboratory',{exact:true}).waitFor();
  await page.locator('[data-action="home"]').first().click();
  await page.locator('[data-action="lab"][data-id="1"]').first().click();
  const begin=page.locator('form[data-form="begin"]');await begin.locator('input[name="student"]').fill('QA Student - automated');
  await begin.locator('button[type="submit"]').click();
  const research=await context.newPage();await research.goto(base+'#resources-academic/1');
  await research.locator('#rl-query').fill('Utilitarianism');
  const result=research.locator('.rl-result').filter({hasText:'Utilitarianism'}).first();
  await result.locator('textarea').fill('Compared expected harms and lawful alternatives before making my decision.');
  await result.locator('[data-rl-save]').click();
  await research.getByText('Research collection updated.',{exact:true}).waitFor();
  await research.reload();await research.locator('#rl-query').fill('Utilitarianism');
  assert.match(await research.locator('.rl-result textarea').first().inputValue(),/expected harms/);
  await research.close();
  let completed=false;
  for(let i=0;i<20;i++){
    if(await page.locator('.ccoc-report').count()){completed=true;break;}
    const decision=page.locator('form[data-form="decision"]');await decision.waitFor();
    await decision.locator('input[type="radio"]').first().check();
    await decision.locator('textarea[name="reason"]').fill('Test rationale: review authorization, legal authority, scope and proportionate evidence handling.');
    await decision.locator('button[type="submit"]').click();
    await page.locator('[data-action="continue"]').click();
  }
  assert.ok(completed||await page.locator('.ccoc-report').count());
  await page.getByText('Student-selected research and rationale',{exact:true}).waitFor();
  assert.match(await page.locator('.ccoc-student-research').innerText(),/Utilitarianism/);
  const pdf=await page.pdf({path:out+'/participation-report.pdf',format:'Letter',printBackground:true});
  assert.equal(pdf.subarray(0,4).toString(),'%PDF');assert.ok(pdf.length>1000);
  assert.deepEqual(errors,[]);
  console.log('Browser smoke passed: three approved banners and library routes, responsive home, locked Lab 8, cross-tab research, Lab 1 decisions and PDF.');
}finally{await browser.close()}
