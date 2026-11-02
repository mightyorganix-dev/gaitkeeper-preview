(()=>{const d=document,h=d.documentElement,rm=h.classList.contains('rm'),$$=s=>[...d.querySelectorAll(s)];
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12,rootMargin:'0px 0px -6% 0px'});$$('.reveal,.rv').forEach(e=>io.observe(e));
const cpb=d.querySelector('[data-copy]');if(cpb)cpb.addEventListener('click',()=>{const u='https://mightyorganix.com/';const ok=()=>{cpb.textContent='Link copied';cpb.classList.add('ok');setTimeout(()=>{cpb.textContent='Copy link';cpb.classList.remove('ok')},2000)};if(navigator.clipboard)navigator.clipboard.writeText(u).then(ok,ok);else ok()});const hd=d.getElementById('hdr');const L=d.querySelector('.loader');if(L)setTimeout(()=>L.remove(),1100);
const el=$$('.elist li'),cn=d.querySelector('.c-now'),cb=d.querySelector('.c-bar i');let cur='01';if(el.length&&cn){const o2=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){el.forEach(x=>x.classList.remove('on'));e.target.classList.add('on');const n=e.target.dataset.n;if(n!==cur){cur=n;cn.classList.add('flip');setTimeout(()=>{cn.textContent=n;cn.classList.remove('flip')},250);cb.style.transform='scaleX('+(+n/6)+')'}}}),{rootMargin:'-45% 0px -45% 0px'});el.forEach(x=>o2.observe(x))}const sp=d.querySelector('.spot');if(sp){const mv=(cx,cy)=>{const q=sp.getBoundingClientRect();sp.style.setProperty('--mx',((cx-q.left)/q.width*100).toFixed(1)+'%');sp.style.setProperty('--my',((cy-q.top)/q.height*100).toFixed(1)+'%')};sp.addEventListener('pointermove',e=>mv(e.clientX,e.clientY),{passive:true});sp.addEventListener('pointerdown',e=>mv(e.clientX,e.clientY),{passive:true})}if(rm){if(hd){addEventListener('scroll',()=>hd.classList.toggle('scrolled',scrollY>8),{passive:true})}return}
const pg=d.createElement('div');pg.className='prog';d.body.appendChild(pg);
const px=$$('.px');let tk=false;
const run=()=>{tk=false;const y=scrollY,vh=innerHeight;if(hd)hd.classList.toggle('scrolled',y>8);const m=d.documentElement.scrollHeight-vh;pg.style.transform='scaleX('+(m>0?y/m:0)+')';
px.forEach(el=>{const r=el.parentElement.getBoundingClientRect();if(r.bottom<0||r.top>vh)return;const p=(r.top+r.height/2-vh/2)/vh;el.style.transform='translate3d(0,'+(p*-6).toFixed(2)+'%,0)'});};
addEventListener('scroll',()=>{if(!tk){tk=true;requestAnimationFrame(run)}},{passive:true});run();
if(matchMedia('(hover:hover) and (pointer:fine)').matches){
 const c=d.createElement('div'),r=d.createElement('div');c.className='cur';r.className='cur-r';d.body.append(c,r);
 let x=0,y=0,rx=0,ry=0,on=false;
 addEventListener('mousemove',e=>{x=e.clientX;y=e.clientY;c.style.transform='translate3d('+x+'px,'+y+'px,0)';if(!on){on=true;h.classList.add('cur-on');rx=x;ry=y;loop()}},{passive:true});
 d.addEventListener('mouseleave',()=>{h.classList.remove('cur-on');on=false});
 const loop=()=>{if(!on)return;rx+=(x-rx)*.18;ry+=(y-ry)*.18;r.style.transform='translate3d('+rx+'px,'+ry+'px,0)';requestAnimationFrame(loop)};
 d.addEventListener('mouseover',e=>{r.classList.toggle('hov',!!e.target.closest('a,button'))});
 $$('.btn').forEach(b=>{b.addEventListener('mousemove',e=>{const q=b.getBoundingClientRect(),mx=(e.clientX-q.left-q.width/2)/q.width,my=(e.clientY-q.top-q.height/2)/q.height;b.style.transform='translate3d('+(mx*8).toFixed(1)+'px,'+(my*6).toFixed(1)+'px,0)'});b.addEventListener('mouseleave',()=>{b.style.transform=''})});
 const hp=d.querySelector('.hero-photo img');if(hp){const f=hp.closest('.hero-art');f.addEventListener('mousemove',e=>{const q=f.getBoundingClientRect(),mx=(e.clientX-q.left)/q.width-.5,my=(e.clientY-q.top)/q.height-.5;hp.style.transform='scale(1.03) translate3d('+(mx*-10).toFixed(1)+'px,'+(my*-8).toFixed(1)+'px,0)'});f.addEventListener('mouseleave',()=>{hp.style.transform=''});hp.style.transition='transform .8s cubic-bezier(.2,.7,.2,1)'}
}
})();
