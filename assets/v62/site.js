(()=>{const d=document,rm=d.documentElement.classList.contains('rm'),$=(s,r=d)=>r.querySelector(s),$$=(s,r=d)=>[...r.querySelectorAll(s)];
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12,rootMargin:'0px 0px -6% 0px'});$$('.reveal').forEach(e=>io.observe(e));
const D={
farm:{url:'Sample design',img:'assets/v62/img/produce.webp',tag:'Open today · 8am–6pm',ah:'Picked this morning.',cta:'Call the stand'},
salon:{url:'Sample design',img:'assets/v62/img/salon.webp',tag:'Booking open · Tue–Sat',ah:'Your chair is ready.',cta:'Book a time'},
barn:{url:'Sample design',img:'assets/v62/img/stable.webp',tag:'Boarding · Lessons',ah:'Good care for good horses.',cta:'Schedule a visit'},
shop:{url:'Sample design',img:'assets/v62/img/shop.webp',tag:'Open now · Main Street',ah:'Right down the road.',cta:'Get directions'}};
const ca=$('#cmpAfter'),cu=$('#cmpUrl'),ph=$('#yoursPhoto'),cm=$('#cmp');
const show=k=>{const v=D[k];if(!v||!ca)return;cu.textContent=v.url;ca.innerHTML=`<div class="n-photo" style="background-image:url(${v.img})"></div>`;if(ph){ph.style.opacity=0;setTimeout(()=>{ph.style.backgroundImage=`url(${v.img})`;ph.style.opacity=''},300)}};
$$('.tabs button').forEach(b=>b.addEventListener('click',()=>{$$('.tabs button').forEach(o=>o.setAttribute('aria-selected',o===b));show(b.dataset.k)}));show('farm');
const ab=$('#audio'),am=$('#amb');if(ab&&am){const st=on=>{ab.setAttribute('aria-pressed',on);ab.textContent='Woodland sounds: '+(on?'on':'off')};st(false);ab.addEventListener('click',()=>{const on=am.paused;if(on){am.volume=.15;am.play().catch(()=>{})}else am.pause();st(on);localStorage.setItem('mo-audio',on?'on':'off')})}
const hd=$("#hdr");if(hd){const f=()=>hd.classList.toggle("scrolled",scrollY>8);addEventListener("scroll",f,{passive:true});f()}
})();
