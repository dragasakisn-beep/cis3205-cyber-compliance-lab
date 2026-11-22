import http from 'node:http';
import { readFile } from 'node:fs/promises';
import { createHash, timingSafeEqual, randomBytes } from 'node:crypto';
const port=Number(process.env.PORT||3000);
const sessions=new Map(), attempts=new Map();
const digest=s=>createHash('sha256').update(s).digest();
const labs=['Operation Mandate','Operation Digital Justice','Operation Governance','Operation Assurance','Operation Breach Clock','Operation Strategic Shield','Operation Regulatory Horizon','Operation Compliance Verdict'];
const publicLab={title:labs[0],brief:'A technology enterprise faces a security incident and must justify cybersecurity investment to its board.',chapters:[1,2,3,4],domains:[1,6],tasks:[{prompt:'Identify the business activities, jurisdictions and data types that determine legal obligations.',options:['Conduct a documented applicability review','Assume all laws apply','Ignore requirements until an audit']},{prompt:'The board requests a business case. How will you address legal duties and economic exposure?',options:['Document mandatory duties and quantify risk','Use ROI alone','Defer all expenditure']},{prompt:'Management requests risk acceptance. What governance process should apply?',options:['Identify mandatory obligations, accountable owners and residual risks','Allow IT to waive legal duties','Record no decision']}]};
function send(res,status,data,type='application/json'){res.writeHead(status,{'Content-Type':type,'Cache-Control':'no-store','X-Content-Type-Options':'nosniff','Referrer-Policy':'no-referrer','Content-Security-Policy':"default-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self'; frame-ancestors 'none'; base-uri 'none'; form-action 'self'"});res.end(type==='application/json'?JSON.stringify(data):data)}
function session(req,res){let id=(req.headers.cookie||'').match(/(?:^|;\s*)ccoc=([a-f0-9]{64})/)?.[1];let s=sessions.get(id);if(!s||s.expires<Date.now()){id=randomBytes(32).toString('hex');s={labs:new Set(),expires:Date.now()+8*3600000};sessions.set(id,s);res.setHeader('Set-Cookie','ccoc='+id+'; HttpOnly; SameSite=Strict; Path=/; Max-Age=28800'+(process.env.NODE_ENV==='production'?'; Secure':''))}return s}
setInterval(()=>{for(const [id,s] of sessions)if(s.expires<Date.now())sessions.delete(id);for(const [id,a] of attempts)if(a.until<Date.now())attempts.delete(id)},60000).unref();
http.createServer(async(req,res)=>{try{
const path=new URL(req.url,'http://localhost').pathname;
if(req.method==='GET'&&path==='/api/health')return send(res,200,{status:'ok',version:'0.1.0'});
if(req.method==='GET'&&path==='/api/labs'){const s=session(req,res);return send(res,200,labs.map((title,i)=>({id:i+1,title,week:Math.ceil((i+1)/2),unlocked:i===0||s.labs.has(i+1)})))}
const m=path.match(/^\/api\/labs\/([1-8])(?:\/(unlock))?$/);
if(m){let n=Number(m[1]),s=session(req,res);
if(req.method==='POST'&&m[2]){const key=req.socket.remoteAddress||'unknown';let a=attempts.get(key)||{count:0,until:Date.now()+600000};if(a.until<Date.now())a={count:0,until:Date.now()+600000};if(++a.count>12)return send(res,429,{error:'Try again later'});attempts.set(key,a);let body='';for await(const chunk of req){body+=chunk;if(body.length>2048)return send(res,413,{error:'Request too large'})}let code;try{code=JSON.parse(body).code}catch{return send(res,400,{error:'Invalid request'})}const expected=process.env['LAB_'+n+'_CODE_HASH'];if(n===1||!expected||!/^[a-f0-9]{64}$/i.test(expected)||typeof code!=='string'||!timingSafeEqual(digest(code),Buffer.from(expected,'hex')))return send(res,403,{error:'Invalid or unavailable instructor code'});s.labs.add(n);return send(res,200,{unlocked:true})}
if(req.method==='GET'&&!m[2]){if(n===1)return send(res,200,publicLab);if(!s.labs.has(n))return send(res,403,{error:'Instructor code required'});try{return send(res,200,JSON.parse(await readFile((process.env.PRIVATE_LAB_DIR||'/run/ccoc-labs')+'/lab-'+n+'.json','utf8')))}catch{return send(res,503,{error:'Restricted lab content has not been provisioned'})}}
}
const files={'/':['public/index.html','text/html; charset=utf-8'],'/app.js':['public/app.js','text/javascript; charset=utf-8'],'/style.css':['public/style.css','text/css; charset=utf-8']};if(req.method==='GET'&&files[path]){const [file,type]=files[path];return send(res,200,await readFile(new URL(file,import.meta.url)),type)}
return send(res,404,{error:'Not found'});
}catch{return send(res,500,{error:'Server error'})}}).listen(port,'0.0.0.0');
