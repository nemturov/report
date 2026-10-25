(function(){
const tpl=document.getElementById('sbp-tpl');const css=document.getElementById('sbp-css').textContent;
const sheet=new CSSStyleSheet();sheet.replaceSync(css);
document.querySelectorAll('.sbp-host').forEach(h=>{
  const R=h.attachShadow({mode:'open'});R.adoptedStyleSheets=[sheet];
  const b=tpl.content.querySelector('.sbp-b[data-n="'+h.dataset.n+'"]');R.append(...b.cloneNode(true).childNodes);
  (function(SR){(function(){
function links(stage){
  const sr=stage.getBoundingClientRect(),k=sr.width/stage.offsetWidth||1;
  stage.querySelectorAll('svg.js path[data-a]').forEach(p=>{
    const R=e=>{const r=e.getBoundingClientRect();return{l:(r.left-sr.left)/k,r:(r.right-sr.left)/k,t:(r.top-sr.top)/k,b:(r.bottom-sr.top)/k}};
    const a=R(SR.getElementById(p.dataset.a)),b=R(SR.getElementById(p.dataset.b)),t=p.dataset.t;
    const x1=a.r+4,y1=(a.t+a.b)/2,cx=(b.l+b.r)/2,cy=(b.t+b.b)/2,rr=14;
    let d;
    if(t==='top'){const y2=b.t-6;d=`M${x1} ${y1} H${cx-rr} Q${cx} ${y1} ${cx} ${y1+rr} V${y2}`;}
    else if(t==='bottom'){const y2=b.b+6;d=`M${x1} ${y1} H${cx-rr} Q${cx} ${y1} ${cx} ${y1-rr} V${y2}`;}
    else if(t==='side'){d=`M${x1} ${cy} H${b.l-6}`;}
    else if(t==='under'){const x0=(a.l+a.r)/2,y0=a.b+4,yy=a.b+30;d=`M${x0} ${y0} V${yy-rr} Q${x0} ${yy} ${x0+rr} ${yy} H${cx-rr} Q${cx} ${yy} ${cx} ${yy-rr} V${b.b+6}`;}
    else{const x2=b.l-6,y2=cy+(+p.dataset.o||0),dx=(x2-x1)*.55;d=`M${x1} ${y1} C${x1+dx} ${y1} ${x2-dx} ${y2} ${x2} ${y2}`;}
    p.setAttribute('d',d);});
}
SR.__links=links;
const MQ=matchMedia('(max-width:900px)');
function fit(){SR.querySelectorAll('.vis').forEach(v=>{const s=v.querySelector('.stage'),w=+s.dataset.w,h=+s.dataset.h,mn=+s.dataset.min||0,art=v.parentElement;
 if(mn&&MQ.matches){const k=Math.max(v.clientWidth/w,mn);art.style.height=(h*k)+'px';Object.assign(s.style,{left:'auto',right:'0',top:'0',transformOrigin:'top right',transform:`scale(${k})`});}
 else{if(mn){art.style.height='';Object.assign(s.style,{left:'50%',right:'',top:'50%',transformOrigin:'center'});}
  const k=Math.min(v.clientWidth/w,v.clientHeight/h);s.style.transform=`translate(-50%,-50%) scale(${k})`;}
 links(s);});}
MQ.addEventListener('change',fit);
addEventListener('resize',fit);document.fonts&&document.fonts.ready.then(fit);fit();
})();

(function(){
const rm=matchMedia('(prefers-reduced-motion:reduce)').matches, fine=matchMedia('(pointer:fine)').matches;
// 1: parallax on hover
SR.querySelectorAll('[data-anim="parallax"] .art').forEach(art=>{
  if(rm||!fine) return;
  const els=[...art.querySelectorAll('[data-d]')];
  art.addEventListener('mousemove',e=>{const r=art.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
    els.forEach(el=>{const d=+el.dataset.d;el.style.translate=`${(-x*d).toFixed(1)}px ${(-y*d).toFixed(1)}px`;});art.style.setProperty('--px',(x*18).toFixed(1)+'px');art.style.setProperty('--py',(y*12).toFixed(1)+'px');track();});
  const st=art.querySelector('.stage');let until=0,raf=0;
  const step=()=>{SR.__links(st);if(performance.now()<until)raf=requestAnimationFrame(step);else raf=0;};
  const track=()=>{if(!st.querySelector('svg.js'))return;until=performance.now()+700;if(!raf)raf=requestAnimationFrame(step);};
  art.addEventListener('mouseleave',()=>{els.forEach(el=>el.style.translate='0px 0px');art.style.setProperty('--px','0px');art.style.setProperty('--py','0px');track();});
});
// 2: language carousel, faster with mouse movement
SR.querySelectorAll('[data-anim="langs"]').forEach(card=>{
  const art=card.querySelector('.art'), lvs=[...card.querySelectorAll('.lv')], bts=[...card.querySelectorAll('.lb')];
  let i=0,acc=0,last=null,timer=null,visible=false,pinned=false;
  const set=n=>{i=(n+lvs.length)%lvs.length;lvs.forEach((l,k)=>l.classList.toggle('on',k===i));bts.forEach((b,k)=>b.classList.toggle('on',k===i));};
  const loop=()=>{clearTimeout(timer);if(rm||!visible||pinned)return;timer=setTimeout(()=>{set(i+1);loop();},2200);};
  new IntersectionObserver(es=>{visible=es[0].isIntersecting;loop();},{threshold:.3}).observe(card);
  bts.forEach((b,k)=>{
    const pin=()=>{pinned=true;clearTimeout(timer);set(k);};
    const unpin=()=>{pinned=false;acc=0;last=null;loop();};
    b.addEventListener('mouseenter',pin);b.addEventListener('mouseleave',unpin);
    b.addEventListener('click',pin);b.addEventListener('focus',pin);b.addEventListener('blur',unpin);
  });
  if(rm||!fine) return;
  art.addEventListener('mousemove',e=>{if(pinned){last=null;return;}if(last){acc+=Math.hypot(e.clientX-last[0],e.clientY-last[1]);if(acc>140){acc=0;set(i+1);loop();}}last=[e.clientX,e.clientY];});
  art.addEventListener('mouseleave',()=>{last=null;acc=0;});
});
})();
})(R);
});
})();
