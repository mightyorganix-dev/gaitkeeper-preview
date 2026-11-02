(()=>{const d=document,rm=d.documentElement.classList.contains('rm'),$=(s,r=d)=>r.querySelector(s),$$=(s,r=d)=>[...r.querySelectorAll(s)];
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12,rootMargin:'0px 0px -6% 0px'});$$('.reveal').forEach(e=>io.observe(e));
const hd=$("#hdr");if(hd){const f=()=>hd.classList.toggle("scrolled",scrollY>8);addEventListener("scroll",f,{passive:true});f()}
})();
