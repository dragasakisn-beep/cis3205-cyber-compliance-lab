import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';

const html=readFileSync(new URL('../index.html',import.meta.url),'utf8');
const raw=html.match(/<script type="application\/json" id="studio-data">([\s\S]*?)<\/script>/)[1];
const data=JSON.parse(raw);
const script=[...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].at(-1)[1];
const catalog=JSON.parse(readFileSync(new URL('../reference-library.js',import.meta.url),'utf8').replace(/^window\.CCOC_LIBRARY=/,'').trim().replace(/;$/,''));
const expected={government:'ab4156702a15ecac0bb1c4dd55882c84ebe60adc',industry:'aa5252b6ea3bd326c2f87f41c68786c800ad4be3',academic:'d502fcfe8700e26b81019360ddb81d0362990866'};
function storage(){const map=new Map();return {getItem:k=>map.get(k)??null,setItem:(k,v)=>map.set(k,String(v)),removeItem:k=>map.delete(k)}}
function setup(shared,hash=''){
  const nodes=new Map();let clipboard='';
  const get=id=>{if(!nodes.has(id))nodes.set(id,{value:'',textContent:'',innerHTML:'',hidden:false,classList:{toggle(){}},events:{},addEventListener(k,fn){this.events[k]=fn},querySelector(){return {value:'The principle informed the comparison of lawful, proportionate alternatives.'}}});return nodes.get(id)};
  get('studio-data').textContent=raw;
  const boot=new Function('document','window','localStorage','sessionStorage','history','location','navigator',script.replace('try{(function boot(){','try{return (function boot(){'));
  const api=boot({getElementById:get,addEventListener(){}},{CCOC_LIBRARY:catalog,scrollTo(){}},shared,storage(),{replaceState(){}},{hash,pathname:'/',search:''},{clipboard:{writeText:async v=>{clipboard=v}}});
  assert.ok(api,get('boot-status').textContent);return {api,get,clipboard:()=>clipboard};
}
test('approved image files are byte-identical to the release and referenced on cards and routes',()=>{
  for(const [k,sha] of Object.entries(expected)){
    const path='assets/photography/reference-library/'+k+'.webp';
    const b=readFileSync(new URL('../'+path,import.meta.url));
    assert.equal(createHash('sha1').update('blob '+b.length+'\0').update(b).digest('hex'),sha);
    assert.equal(html.split(path).length-1,2);
  }
});
test('reference catalog contains required resources, classifications and explicit nonbinding Tallinn notice',()=>{
  assert.ok(catalog.length>=48);
  for(const word of ['Tallinn Manual 2.0','Cyberethics: Morality and Law in Cyberspace','Cybersecurity Law, 4th ed.','Utilitarianism','Deontological ethics','Virtue ethics','Rights-based ethics','Social contract theory','Distributive justice','Computer and information ethics','Privacy'])assert.ok(catalog.some(r=>r[2].includes(word)),word);
  assert.match(catalog.find(r=>r[2]==='Tallinn Manual 2.0')[5],/Nonbinding/i);
  assert.ok(catalog.every(r=>/^https:\/\//.test(r[4])&&r[6]));
});
test('three libraries, search, reference save and copy, cross-tab report, completion persistence and eight labs',async()=>{
  const shared=storage(),a=setup(shared);
  a.api.selectProfile('QA Student');a.api.openLab(1);a.api.begin('QA Student');
  const b=setup(shared,'#resources-academic/1');
  assert.equal(b.get('rl-lab').value,'1');
  assert.match(b.get('screen').innerHTML,/reference-library\/academic\.webp/);
  b.get('rl-query').value='Utilitarianism';b.get('rl-query').events.input();
  assert.match(b.get('rl-results').innerHTML,/Utilitarianism/);
  const idx=b.get('rl-results').innerHTML.match(/data-rl-save="(\d+)"/)[1];
  await b.get('rl-results').events.click({target:{closest:()=>({dataset:{rlSave:idx}})}});
  assert.match(shared.getItem('ccoc.research.v2'),/Utilitarianism/);
  await b.get('rl-results').events.click({target:{closest:()=>({dataset:{rlCopy:idx}})}});
  assert.match(b.clipboard(),/Utilitarianism/);
  for(let i=0;i<data.scenarios[0].tasks.length;i++){assert.ok(a.api.record(0,'Test rationale: documented authority, evidence and expected consequences.'));a.api.dilemma()}
  assert.match(a.get('screen').innerHTML,/Student-selected research and rationale/);
  assert.match(a.get('screen').innerHTML,/Utilitarianism/);
  assert.equal(a.api.courseStats().completed,1);
  const c=setup(shared);assert.equal(c.api.courseStats().completed,1);c.api.openLab(8);assert.match(c.get('screen').innerHTML,/Unlock this laboratory/);
  const book=JSON.parse(shared.getItem('ccoc.student.progress.v1'));book.profiles[0].released=[1,2,3,4,5,6,7,8];shared.setItem('ccoc.student.progress.v1',JSON.stringify(book));
  const d=setup(shared);
  for(let id=2;id<=8;id++){d.api.openLab(id);d.api.begin('QA Student');for(let i=0;i<data.scenarios[id-1].tasks.length;i++){assert.ok(d.api.record(0,'Test rationale: assess legal authority, evidence, proportionality and contractual duties.'));d.api.dilemma()}assert.match(d.get('screen').innerHTML,/Laboratory Participation Report/)}
  assert.equal(d.api.courseStats().completed,8);assert.equal(d.api.courseStats().decisions,data.scenarios.reduce((a,l)=>a+l.tasks.length,0));
  for(const k of Object.keys(expected)){d.api.library(k,1);assert.ok(d.get('screen').innerHTML.includes('reference-library/'+k+'.webp'));assert.match(d.get('rl-results').innerHTML,/Open source/)}
});
