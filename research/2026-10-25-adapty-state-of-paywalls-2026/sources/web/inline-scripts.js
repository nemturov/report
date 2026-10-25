
(function () {
  var NAME = "sop26:access", VALUE = "stateOfPaywalls2026_report:open", PARAM = "key", KEY_SHA256 = "b453fa0f1e5d035efb4d2f0d53e65bf27c5ea383f59e4f3033c1468e812d35ad";
  var OWN = "/state-of-paywalls/?access=denied", BY_BROWSER = {"en":"/state-of-paywalls/?access=denied","zh":"/zh/state-of-paywalls/?access=denied"};
  var root = document.documentElement;
  var grant = function () {
    // written back on every visit, so either store alone keeps working if the other is cleared
    try { localStorage.setItem(NAME, VALUE); } catch (e) {}
    document.cookie = NAME + '=' + VALUE + '; path=/; max-age=31536000; SameSite=Lax' + (location.protocol === 'https:' ? '; Secure' : '');
  };
  var deny = function () {
    root.style.visibility = 'hidden';
    var lang = (navigator.languages && navigator.languages[0]) || navigator.language || '';
    var code = lang.slice(0, 2).toLowerCase().replace('uk', 'ua');
    location.replace(BY_BROWSER[code] || OWN);
  };
  var ok = false;
  try { ok = localStorage.getItem(NAME) === VALUE; } catch (e) {}
  if (!ok) ok = ('; ' + document.cookie + ';').indexOf('; ' + NAME + '=' + VALUE + ';') !== -1;
  var url = new URL(location.href), key = url.searchParams.get(PARAM);
  if (key !== null) {
    url.searchParams.delete(PARAM);
    history.replaceState(history.state, '', url.pathname + url.search + url.hash);
  }
  if (ok) return grant();
  if (key === null || !(window.crypto && crypto.subtle)) return deny();
  root.style.visibility = 'hidden';
  crypto.subtle.digest('SHA-256', new TextEncoder().encode(key)).then(function (buf) {
    var hex = '';
    new Uint8Array(buf).forEach(function (b) { hex += (b < 16 ? '0' : '') + b.toString(16); });
    if (hex !== KEY_SHA256) return deny();
    grant();
    root.style.visibility = '';
  }, deny);
})();



{"@context":"https://schema.org","@type":"WebPage","@id":"https://adapty.io/state-of-paywalls/report/#webpage","dateCreated":"2026-10-16T10:00:00+00:00","dateModified":"2026-10-16T10:00:00+00:00"}



{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://adapty.io/#organization","name":"Adapty Tech Inc.","url":"https://adapty.io/","logo":{"@type":"ImageObject","@id":"https://adapty.io/#logo","url":"https://adapty.io/assets/uploads/2023/12/adapty-logo-color.svg"},"sameAs":["https://x.com/adapty","https://www.linkedin.com/company/adaptyio","https://github.com/adaptyteam","https://www.youtube.com/@SubhubEn"]},{"@type":"WebSite","@id":"https://adapty.io/#website","url":"https://adapty.io/","name":"Adapty","publisher":{"@id":"https://adapty.io/#organization"}},{"@type":"WebPage","@id":"https://adapty.io/state-of-paywalls/report/#webpage","url":"https://adapty.io/state-of-paywalls/report/","name":"State of Paywalls 2026 | Adapty Report","description":"See how your paywall stacks up against 30,000 apps. Conversion, pricing, trials, and A/B test results for 5 regions and 8 categories. Free 2026 report.","inLanguage":"en","isPartOf":{"@id":"https://adapty.io/#website"},"primaryImageOfPage":{"@type":"ImageObject","url":"https://adapty.io/static/sop26/report/en/assets/og-state-of-report.802f4db0.webp","width":1472,"height":828},"datePublished":"2026-10-16T10:00:00+00:00","dateModified":"2026-10-16T10:00:00+00:00"}]}


(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PXJV3N7');


(function(d,b,a,s,e){ var t = b.createElement(a),
fs = b.getElementsByTagName(a)[0]; t.async=1; t.id=e; t.src=s;
fs.parentNode.insertBefore(t, fs); })
(window,document,'script','https://tag.demandbase.com/5331d03938ad8532.min.js','demandbase_js_lib');



(function(c,l,a,r,i,t,y){
c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "bxv5xqbb2p");




:host(.sbp-off) *{animation-play-state:paused!important}:host{display:block;--bg:#f4f4f2;--ink:#1d1d1b;--muted:#6b6b66;--violet:#7b5cf5;--blue:#3d6bff;--mono:"JetBrains Mono",ui-monospace,SFMono-Regular,Menlo,monospace;
--body:"Inter",system-ui,-apple-system,"Segoe UI",sans-serif;--disp:"Inter Tight","Inter",system-ui,sans-serif;color-scheme:light;
box-sizing:border-box;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}
html{scroll-padding-top:env(safe-area-inset-top,0px)}
*,*::before,*::after{box-sizing:inherit}
.wrap{max-width:1240px;margin:0 auto;padding:0 24px}
.hd0{padding-top:56px;padding-bottom:12px}.hd0 h1{font:600 32px/1.1 var(--disp);letter-spacing:-.03em;margin:0}.hd0 p{color:var(--muted);margin:8px 0 0}
.blk{padding:24px 0}
.ai.cat{background-image:url(/static/sop26/report/en/assets/img-14.ef3cfb71.webp)}.ai.p6{background-image:url(/static/sop26/report/en/assets/img-15.594708c4.webp)}.ai.p7{background-image:url(/static/sop26/report/en/assets/img-16.99644a17.webp)}.ai.p8{background-image:url(/static/sop26/report/en/assets/img-17.a18693e0.webp)}.ai.p11{background-image:url(/static/sop26/report/en/assets/img-18.c311fc89.webp)}.ai.p13{background-image:url(/static/sop26/report/en/assets/img-19.d61cdc24.webp)}.ai.selfie{background-image:url(/static/sop26/report/en/assets/img-20.a44b4ef2.webp)}.ai.ob1{background-image:url(/static/sop26/report/en/assets/img-21.ca766a42.webp)}.ai.ob2{background-image:url(/static/sop26/report/en/assets/img-22.42222bf5.webp)}.art{background-image:url(/static/sop26/report/en/assets/img-23.c648e9d1.webp)}
.ai{display:block;background-size:cover;background-position:center}

/* card */
.promo{position:relative;height:600px;display:grid;grid-template-columns:468px 1fr;padding:8px;border-radius:18px;background:#fafaf8;
  box-shadow:0 0 0 1px #e9e9e5,0 1px 2px rgba(20,20,10,.04),0 24px 48px -32px rgba(40,30,90,.28)}
.promo.rev{grid-template-columns:1fr 468px}.promo.rev .tp{order:2}
.art{position:relative;border-radius:12px;overflow:hidden;background-color:#efeefb;min-width:0;isolation:isolate;background-size:0 0}
.art::before{content:"";position:absolute;inset:0;z-index:-1;background-image:inherit;background-repeat:no-repeat;background-size:var(--bgs,cover);background-position:var(--bgp,center);transform:var(--bgt,none)}
#p2 .art{--bgt:scaleX(-1);--bgp:50% 30%}
#p3 .art{--bgs:135%;--bgp:30% 70%}
#p4 .art{--bgt:scaleY(-1);--bgs:125%;--bgp:70% 40%}
#p5 .art{--bgt:scale(-1,1);--bgs:140%;--bgp:20% 60%}
#p6 .art{--bgt:scale(-1,-1);--bgs:120%;--bgp:60% 50%}
.vis{position:absolute;inset:0}
.stage{position:absolute;left:50%;top:50%;transform-origin:center}
.stage > *{position:absolute}

/* text panel */
.tp{display:flex;flex-direction:column;padding:32px 40px 32px 32px;min-width:0}
.promo.rev .tp{padding:32px 32px 32px 40px}
.story{display:flex;align-items:center;gap:12px;font:500 13px/1 var(--body);color:#8a8a84}.story b{font-weight:600;color:#45453f}
.bars{display:flex;gap:4px}.bars i{width:16px;height:4px;border-radius:2px;background:#e4e4df}.bars i.on{background:var(--violet)}
.tx{margin:8px 0 0}
.tx h2{font:600 44px/1.06 var(--disp);letter-spacing:-.045em;margin:0 0 -.12em;padding-bottom:.12em;text-wrap:pretty;
  color:#2a2a25;background:linear-gradient(100deg,#25251f 0%,#55554d 28%,#8a8a80 52%,#55554d 74%,#25251f 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}
.tx p{margin:22px 0 0;font-size:18px;line-height:1.5;color:#5f5f59;max-width:390px}
.btn{align-self:flex-start;margin-top:auto;display:inline-flex;align-items:center;gap:8px;height:46px;padding:0 16px 0 18px;border-radius:10px;background:var(--violet);color:#fff;font:500 16px/1 var(--body);text-decoration:none;
  box-shadow:inset 0 0 0 1px rgba(255,255,255,.18),0 1px 2px rgba(60,30,160,.3),0 8px 18px -10px rgba(123,92,245,.9);transition:transform .15s}
.btn:hover{transform:translateY(-1px)}.btn:focus-visible{outline:3px solid #c9b8ff;outline-offset:3px}
.btn svg{width:18px;height:18px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}

/* glossy icon */
.gi{display:inline-grid;place-items:center;width:.9em;height:.9em;border-radius:.24em;vertical-align:middle;top:-.07em;margin:0 .02em;-webkit-text-fill-color:initial;position:relative;
  background:linear-gradient(180deg,var(--a) 0%,var(--b) 100%);
  box-shadow:inset 0 0 0 .025em rgba(255,255,255,.55),inset 0 .05em .06em rgba(255,255,255,.65),inset 0 -.04em .06em rgba(0,0,0,.08),0 0 0 .02em var(--e),0 .3em .45em -.15em var(--g)}
.gi svg{width:.42em;height:.42em;fill:none;stroke:#fff;stroke-width:1.9;stroke-linecap:round;stroke-linejoin:round;filter:drop-shadow(0 .02em .02em rgba(0,0,0,.18))}
.gi.pink{--a:#f9b3d7;--b:#e2479c;--e:#f08ac2;--g:rgba(226,71,156,.55)}
.gi.blue{--a:#b6c6ff;--b:#4f72f6;--e:#8ca2fb;--g:rgba(79,114,246,.6)}
.gi.green{--a:#a9eab2;--b:#2fae4b;--e:#7ad38a;--g:rgba(47,174,75,.5)}
.gi.orange{--a:#ffc0a0;--b:#f0602e;--e:#f99a72;--g:rgba(240,96,46,.5)}
.gi.violet{--a:#d2c3ff;--b:#7b5cf5;--e:#a993fa;--g:rgba(123,92,245,.6)}
.gi.dark{--a:#6b6b74;--b:#1d1d22;--e:#55555c;--g:rgba(20,20,30,.4)}
.gi.sm{font-size:26px}

/* phone */
.ph{width:var(--w);aspect-ratio:9/19.5;border-radius:calc(var(--w)*.165);padding:calc(var(--w)*.026);
  background:linear-gradient(145deg,#4a4a50,#0e0e10 22%,#1b1b1e 70%,#55555b);
  box-shadow:inset 0 0 0 1.5px #77777d,0 40px 60px -34px rgba(40,20,140,.55),0 10px 24px -14px rgba(20,10,60,.35)}
.sc{position:relative;width:100%;height:100%;border-radius:calc(var(--w)*.14);background:#f8f8f6;overflow:hidden;color:#1d1d1b;
  font-size:calc(var(--w) / 18);padding:3em 1.05em 1em;display:flex;flex-direction:column;gap:.75em;font-family:var(--body);line-height:1.25}
.isl{position:absolute;left:50%;top:.65em;width:5.4em;height:1.55em;margin-left:-2.7em;border-radius:1em;background:#0b0b0d}
.tt{font:600 1.75em/1.06 var(--disp);letter-spacing:-.045em;margin:.2em 0 0;color:#2a2a25}
.tt.q{font-size:1.5em}.tt.c{text-align:center}
.blu{color:var(--blue);background:linear-gradient(90deg,#2f5cf0,#5b84ff);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;white-space:nowrap}
.sp{width:.8em;height:.8em;fill:#3d6bff;stroke:none;vertical-align:-.05em;margin-right:.08em}
.tabs{position:relative;display:grid;grid-template-columns:1fr 1fr;background:#ececea;border-radius:.75em;padding:.22em;font-size:.82em}
.tabs span{text-align:center;padding:.55em;border-radius:.6em;color:#6b6b66}.tabs span.on{background:#fff;color:#1d1d1b;box-shadow:0 1px 2px rgba(0,0,0,.08)}
.tabs.tg-pink{outline:.08em solid #e2479c;outline-offset:.25em;background:#ececea}
.tabs.tg-pink::before{content:"";position:absolute;inset:-.55em -1.1em;background:repeating-linear-gradient(-45deg,rgba(226,71,156,.12) 0 .25em,transparent .25em .5em);z-index:-1}
.pro{position:relative;background:#fff;border-radius:1em;padding:.95em;box-shadow:inset 0 0 0 .07em #e6e6e2,0 .3em .8em -.5em rgba(0,0,0,.15)}
.cr{display:block;width:1.1em;height:1.1em}.cr svg{width:100%;height:100%;fill:#4f72f6;stroke:none}
.prr{display:flex;justify-content:space-between;align-items:baseline;margin:.55em 0 .7em;padding-bottom:.7em;border-bottom:.07em dashed #deded9}
.prr b{font-weight:600;font-size:1.05em}.prr b+b{font-size:.82em}
.fts{display:grid;grid-template-columns:1fr 1fr;gap:.5em .4em;font-size:.6em;color:#45453f}
.fts span{display:flex;align-items:center;gap:.4em}.fts svg{width:1.3em;height:1.3em;flex:none;fill:none;stroke:#8a8a84;stroke-width:1.6;border-radius:50%;box-shadow:inset 0 0 0 .08em #b5b5ae}
.sbdg{position:absolute;right:.8em;top:-.7em;font:600 .6em/1 var(--body);font-style:normal;background:#2fae4b;color:#fff;padding:.45em .7em;border-radius:99em}
.sub{margin-top:auto;text-align:center;color:#fff;font-weight:600;font-size:.85em;padding:.95em;border-radius:.75em;background:linear-gradient(180deg,#5b84ff,#3d6bff);box-shadow:0 .4em 1em -.5em rgba(61,107,255,.9)}
.hero .sc{gap:.85em}
.dim{opacity:.92;filter:saturate(.7)}

/* floating */
.gl{background:rgba(255,255,255,.82);-webkit-backdrop-filter:blur(14px);backdrop-filter:blur(14px);border-radius:14px;padding:14px;
  box-shadow:inset 0 0 0 1px rgba(255,255,255,.9),0 1px 2px rgba(30,20,80,.06),0 24px 40px -24px rgba(40,20,140,.5);z-index:3}
.sel{outline:1.5px solid var(--oc);outline-offset:4px}.sel.pink{--oc:#e2479c}.sel.blue{--oc:#4f72f6}
.ctag{position:absolute;left:-6px;top:-24px;display:inline-flex;align-items:center;gap:4px;font:500 11px/1 var(--body);font-style:normal;color:#fff;padding:4px 7px;border-radius:5px;white-space:nowrap;z-index:2}
.ctag svg{width:11px;height:11px;fill:none;stroke:#fff;stroke-width:2}
.ctag.pink{background:#e2479c}.ctag.blue{background:#4f72f6}
.tabs .ctag{left:-1.1em;top:-1.9em;font-size:.55em}
.cd{display:flex;align-items:center;gap:6px}.cd span{display:flex;flex-direction:column;align-items:center;background:#fff;border-radius:10px;padding:8px 10px;box-shadow:0 2px 6px -2px rgba(0,0,0,.15);font-size:11px;color:#8a8a84;min-width:54px}
.cd b{font:600 24px/1 var(--disp);color:#2a2a25;letter-spacing:-.03em;margin-bottom:3px}.cd i{font-style:normal;font-weight:700;color:#55554d}
.tgl{display:flex;align-items:center;justify-content:space-between;font:500 17px/1 var(--body);color:#2a2a25;padding:6px 4px}
.sw{width:44px;height:26px;border-radius:99px;background:#2fae4b;position:relative}.sw::after{content:"";position:absolute;right:3px;top:3px;width:20px;height:20px;border-radius:50%;background:#fff;box-shadow:0 1px 3px rgba(0,0,0,.25)}
.pill{display:flex;align-items:center;gap:10px;padding:9px 18px 9px 9px;border-radius:99px;background:rgba(255,255,255,.75);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);
  box-shadow:inset 0 0 0 1px #fff,0 18px 30px -18px rgba(40,20,140,.5);font:600 15px/1 var(--body);color:#2a2a25;z-index:4}
.avs{display:flex}.avs i{width:30px;height:30px;border-radius:50%;box-shadow:0 0 0 2px #fff;margin-left:-9px}.avs i:first-child{margin-left:0}
.imgs{width:150px;height:150px;--oc:#4f72f6;z-index:4}.imgs .ai{position:absolute;inset:0;border-radius:16px;box-shadow:0 0 0 3px #fff,0 16px 26px -14px rgba(0,0,0,.5)}
.imgs .b1{transform:rotate(-6deg)}.imgs .b2{transform:rotate(9deg) translate(30px,14px)}
.save{display:inline-block;background:#e5484d;color:#fff;font:500 19px/1 var(--body);padding:10px 16px;border-radius:99px;box-shadow:0 10px 20px -10px rgba(229,72,77,.8)}
.nob{outline-offset:3px;border-radius:99px!important}
.qt{margin:0;font:500 14px/1.35 var(--body);color:#2a2a25}.qa{display:flex;align-items:center;gap:8px;margin-top:10px;font-size:12px;color:#8a8a84}.qa .ai{width:26px;height:26px;border-radius:50%}
/* localize */
.dd{display:flex;flex-direction:column;gap:2px;font:500 14px/1 var(--body);color:#2a2a25}
.ddh{display:flex;align-items:center;gap:8px;padding:8px 10px;border-radius:9px;background:#fff;box-shadow:inset 0 0 0 1px #e6e6e2;margin-bottom:6px}
.ddh .g{width:16px;height:16px;fill:none;stroke:#6b6b66;stroke-width:1.8}.ddh .cv{width:16px;height:16px;margin-left:auto;fill:none;stroke:#6b6b66;stroke-width:2}
.lo{display:flex;align-items:center;gap:10px;padding:9px 10px;border-radius:8px}.lo.on{background:#f0ecff;color:#5a3fd6}
.cc{font:600 10px/1 var(--body);font-style:normal;width:26px;padding:4px 0;text-align:center;border-radius:5px;background:#ececea;color:#55554d}.lo.on .cc{background:#7b5cf5;color:#fff}
.ck{width:16px;height:16px;margin-left:auto;fill:none;stroke:#7b5cf5;stroke-width:2.4}
.prc{display:flex;align-items:center;gap:8px;padding:10px 14px 10px 10px;border-radius:12px;background:rgba(255,255,255,.85);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);font:600 17px/1 var(--body);color:#2a2a25;white-space:nowrap;
  box-shadow:inset 0 0 0 1px #fff,0 18px 30px -18px rgba(40,20,140,.55);z-index:4}
.live{display:flex;align-items:center;gap:9px;white-space:nowrap;background:#fff;color:#2a2a25;font:600 15px/1 var(--body);padding:12px 16px;border-radius:99px;box-shadow:0 18px 30px -16px rgba(40,20,140,.55);z-index:5}
.live i{width:9px;height:9px;border-radius:50%;background:#2fae4b;box-shadow:0 0 0 4px rgba(47,174,75,.2)}
.live span{font-weight:500;color:#8a8a84;padding-left:9px;border-left:1px solid #e6e6e2}
/* test */
.vt{display:inline-flex;align-items:center;gap:8px;font:700 14px/1 var(--disp);font-style:normal;color:#fff;background:#1d1d1b;padding:7px 11px 7px 9px;border-radius:8px;z-index:4}
.vt{background:#1f2f7a;box-shadow:0 0 0 4px rgba(255,255,255,.32),inset 0 0 0 1px rgba(255,255,255,.28),0 10px 18px -8px rgba(20,20,60,.55);-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px)}.vt span{font:500 12px/1 var(--body);color:rgba(255,255,255,.78)}.vt.b{background:#0f8a66}
.chart{padding:14px 16px 12px}
.chh{display:flex;align-items:center;gap:10px;font:600 15px/1 var(--body);color:#2a2a25;margin-bottom:10px}
.ch{width:100%;height:110px;display:block;overflow:visible}.grid path{stroke:#d9d9d3;stroke-dasharray:3 4;fill:none}
.la{fill:none;stroke:#1f2f7a;stroke-width:2.6}.lb{fill:none;stroke:#0f8a66;stroke-width:3}.pt{fill:#0f8a66;stroke:#fff;stroke-width:2.5}
.lg{display:flex;gap:14px;font:500 12px/1 var(--body);color:#6b6b66;margin-top:8px}.lg i{display:inline-block;width:14px;height:3px;border-radius:2px;margin-right:5px;vertical-align:middle}.lg .a{background:#1f2f7a}.lg .b{background:#0f8a66}
.up{position:absolute;font:600 14px/1 var(--mono);font-style:normal;color:#1b8a3c;background:#e5f6e9;box-shadow:inset 0 0 0 1px #b9e6c4;padding:5px 8px;border-radius:6px}
.rv{display:flex;align-items:center;gap:8px;margin-top:8px;font:700 12px/1 var(--disp);color:#45453f}.rv i{height:10px;width:var(--v);border-radius:99px;background:#1f2f7a}.rv.b i{background:#0f8a66}
/* create */
.gen{display:flex;flex-direction:column;gap:12px}.gh{display:flex;align-items:center;gap:8px;font:600 15px/1 var(--body);color:#2a2a25;justify-content:center}
.g2{width:22px;height:22px;padding:4px;border-radius:7px;background:#fff;box-shadow:0 0 0 1px #e6e6e2;fill:#2a2a25;stroke:none}
.gin{display:flex;gap:6px;align-items:center}.gin span{flex:1;font:400 13px/1.3 var(--body);color:#45453f;background:#fff;border-radius:8px;padding:9px 10px;box-shadow:inset 0 0 0 1px #e1e1dc}
.gin b{display:flex;align-items:center;gap:5px;font:500 13px/1 var(--body);color:#5a3fd6;background:#f0ecff;padding:10px;border-radius:8px;white-space:nowrap}.gin b svg{width:13px;height:13px;fill:#5a3fd6}
.imp{display:flex;align-items:center;gap:12px;font:500 16px/1 var(--body);color:#2a2a25}.fig{width:40px;height:40px;border-radius:10px;background-size:cover;flex:none}
.dark{background:rgba(24,24,27,.94)!important;box-shadow:0 0 0 1px rgba(255,255,255,.08),0 24px 40px -24px rgba(20,10,60,.7)!important;padding:0!important;overflow:hidden}
.term{padding-bottom:12px}.trh{display:flex;justify-content:space-between;font:400 11px/1 var(--body);color:#8a8a94;padding:10px 14px;border-bottom:1px solid #2c2c33;margin-bottom:8px}
.term code{display:block;font:400 13px/1.75 var(--mono);color:#e4e4ea;padding:0 14px}.term em{font-style:normal;color:#8a8a94}
.term .cmd{margin:2px 10px;padding:2px 8px;background:#6d4ef2;border-radius:4px;width:max-content;color:#fff}.term .cmd em{color:#c9b8ff}
.term .ok{color:#4fd37a}.term .mu{color:#a0a0aa}
.lines{left:0;top:0;width:100%;height:100%;overflow:visible;pointer-events:none;z-index:2}
.dash{fill:none;stroke:rgba(255,255,255,.95);stroke-width:1.3;stroke-dasharray:4 5;stroke-linecap:round}
.appi{width:52px;height:52px;border-radius:14px;background-size:cover;z-index:5;box-shadow:0 0 0 4px rgba(255,255,255,.6),0 14px 26px -12px rgba(60,30,160,.8)}
/* journey */
.tok{font:500 .82em/1 var(--mono);font-style:normal;color:#e5533b;background:#ffebe4;box-shadow:inset 0 0 0 .06em #ffd2c4;padding:.18em .4em;border-radius:.35em;vertical-align:.1em;white-space:nowrap}
.ops{display:flex;flex-direction:column;gap:.5em;margin-top:.3em}
.op{display:flex;align-items:center;gap:.65em;padding:.6em;border-radius:.75em;background:#fff;box-shadow:inset 0 0 0 .07em #e6e6e2;font-size:.72em;color:#2a2a25}
.op svg{width:1.9em;height:1.9em;padding:.4em;border-radius:.45em;background:var(--c);fill:none;stroke:var(--i);stroke-width:1.8;flex:none}
.op.on{box-shadow:inset 0 0 0 .13em #3d6bff}
.gotit{flex:1;display:flex;flex-direction:column;align-items:center;text-align:center;justify-content:center;gap:.8em}
.gotit p{font-size:.7em;color:#6b6b66;margin:0;line-height:1.5}
.ring{position:relative;width:4.6em;height:4.6em}.ring svg{width:100%;height:100%;transform:rotate(-90deg)}.r0{fill:none;stroke:#e6e6e2;stroke-width:3.4}.r1{fill:none;stroke:#2fae4b;stroke-width:3.4;stroke-linecap:round;stroke-dasharray:81.8 97.4}
.ring b{position:absolute;inset:0;display:grid;place-items:center;font:600 .95em/1 var(--body)}
.an{font-size:.72em;font-weight:600}
.ontap{display:flex;align-items:center;gap:10px;padding:6px 16px 6px 6px;border-radius:14px;background:rgba(255,255,255,.75);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);font:500 15px/1 var(--mono);color:#2a2a25;z-index:5;
  box-shadow:inset 0 0 0 1px #fff,0 16px 28px -16px rgba(40,20,140,.55)}.ontap .gi{font-size:40px}
/* personalize */
.offer{display:flex;align-items:center;gap:.6em;font-size:.7em;font-weight:600;color:#1d1d1b;background:#fff;border-radius:.7em;padding:.6em .75em;box-shadow:inset 0 0 0 .1em #c9b8ff}
.offer img{height:1.3em;mix-blend-mode:multiply}
.tok.fl{font-size:13px;z-index:5;transform:rotate(-4deg);box-shadow:inset 0 0 0 1px #ffd2c4,0 10px 20px -10px rgba(229,83,59,.6)}
.condg{padding:14px 18px 16px}
.chd{display:flex;align-items:center;gap:12px;font:500 17px/1 var(--mono);color:#6d4ef2;padding-bottom:12px;margin-bottom:6px;border-bottom:1px dashed #d9d9d3}.chd .gi{font-size:38px}
.row{display:flex;align-items:center;gap:8px;font:400 14px/1 var(--mono);color:#8a8a84;padding:7px 0;white-space:nowrap}
.row.s{padding-left:14px;border-bottom:1px dashed #e4e4df;padding-bottom:12px;margin-bottom:4px}.row.s:last-child{border:0;margin:0;padding-bottom:4px}
.row .tok{font-size:13px;vertical-align:0}
.val{font:400 13px/1 var(--mono);font-style:normal;color:#3d6bff;background:#ecf0ff;box-shadow:inset 0 0 0 1px #d3ddff;padding:5px 7px;border-radius:5px;display:inline-flex;align-items:center}
.val img{height:14px;mix-blend-mode:multiply}
.kw{color:#6d4ef2}.dst{color:#2a2a25;font-style:italic;font-family:var(--body);font-size:15px}
.who{display:flex;align-items:center;gap:10px;padding:8px 16px 8px 8px;border-radius:14px;background:#fff;z-index:4;box-shadow:0 16px 28px -16px rgba(40,20,140,.55)}
.who .ai{width:36px;height:36px;border-radius:50%}.who span{display:flex;flex-direction:column;gap:4px}.who small{font:400 11px/1 var(--mono);color:#e5533b}.who b{font:600 16px/1 var(--body)}

@media (max-width:900px){
  .promo,.promo.rev{height:auto;display:flex;flex-direction:column;border-radius:16px}
  .promo.rev .tp,.tp{order:0;padding:24px 18px 22px}
  .tx{margin:0 0 28px}
  .tx h2{font-size:34px}.tx p{font-size:16px}
  .art{aspect-ratio:708/584;max-height:56svh}
  .tx{max-width:80%}.tx p{max-width:none}
}
@media (max-width:600px){.tx{max-width:none}.art{max-height:none}}

@media (max-width:420px){.tx h2{font-size:30px}}

/* motion: parallax */
[data-anim="parallax"] [data-d]{transition:translate .5s cubic-bezier(.2,.7,.2,1)}
/* localize: language layers */
.loc .sc{display:block;padding:0}
.lv{position:absolute;inset:0;padding:3em 1.05em 1em;display:flex;flex-direction:column;gap:.75em;opacity:0;transition:opacity .45s ease}
.lv.on{opacity:1}
.langs{transform:translateX(-50%);display:flex;gap:4px;padding:5px;border-radius:14px;background:rgba(255,255,255,.78);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);z-index:6;
  box-shadow:inset 0 0 0 1px #fff,0 22px 36px -20px rgba(40,20,140,.6);white-space:nowrap}
.lb{font:500 16px/1 var(--body);color:#55554d;background:none;border:0;padding:12px 15px;border-radius:10px;cursor:pointer;transition:background .3s,color .3s,box-shadow .3s}
.lb.on{background:#fff;color:#1d1d1b;box-shadow:0 1px 3px rgba(20,20,40,.14),inset 0 0 0 1px #e6e6e2}
@media (prefers-reduced-motion:reduce){.lv,.lb,[data-anim] [data-d]{transition:none}}
.hero-img{height:6.4em;border-radius:.9em;flex:none;box-shadow:inset 0 0 0 .06em rgba(0,0,0,.06)}
.loc .tt{font-size:1.6em}
.live.col{align-items:flex-start;padding:12px 16px 12px 14px;border-radius:16px}.live.col i{margin-top:4px}.live .lt{display:flex;flex-direction:column;gap:5px;border:0;padding:0}.live .lt b{font-weight:600;color:#2a2a25}.live .lt span{border:0;padding:0;font-size:13px}
.live.ov{position:absolute;left:14px;top:14px;z-index:5;padding:9px 12px 9px 11px;border-radius:12px;gap:8px;font-size:13px}.live.ov i{width:8px;height:8px;margin-top:3px}.live.ov .lt{gap:3px}.live.ov .lt span{font-size:11.5px}
@media (max-width:900px){.live.ov{left:8px;top:8px;padding:6px 9px 6px 8px;font-size:10.5px;gap:6px}.live.ov .lt span{display:none}.live.ov i{margin-top:2px}}
.rvc{padding:12px 14px}.rvc .chh{font-size:13px;margin-bottom:8px}
.vb{display:flex;gap:16px;align-items:flex-end;height:88px;padding:0 10px}.vb span{flex:1;height:100%;display:flex;flex-direction:column;justify-content:flex-end;align-items:center;gap:6px;font:700 12px/1 var(--disp);color:#45453f}
.vb i{width:100%;height:var(--h);border-radius:6px 6px 3px 3px;background:#1f2f7a}.vb .b i{background:#0f8a66}
.chart{padding:12px 14px 10px}.chart .ch{height:84px}
.chart.big{padding:16px 18px 12px}.chart.big .chh{font-size:17px}.chart.big .ch{height:110px}.chart.big .lg{font-size:13px}
.rvc{padding:14px 16px}.rvc .chh{font-size:15px;margin-bottom:10px}.rvc .vb{height:120px;gap:20px}.rvc .vb span{font-size:13px}

/* prompt box (from Builder AI frame) */
.pbox{width:350px;z-index:3}
.pglow{position:absolute;left:-30px;right:-30px;top:-10px;bottom:-40px;border-radius:40px;z-index:-1;opacity:.55;filter:blur(30px);
  background:linear-gradient(200deg,#1ca109 8%,#eea317 30%,#eb510f 52%,#b33dde 74%,#7456fc 90%)}
.pin{background:#fff;border-radius:20px;box-shadow:inset 0 0 0 1px #f2f2ef,0 1px 2px rgba(54,54,48,.05),0 22px 40px -26px rgba(40,20,140,.55);padding:16px 16px 12px 18px}
.pin p{margin:0 0 18px;font:400 15px/1.45 var(--body);color:#2f2f2a}
.ptb{display:flex;align-items:center;gap:12px}
.ptb > svg{width:21px;height:21px;fill:none;stroke:#6b6b66;stroke-width:1.6;stroke-linecap:round;stroke-linejoin:round}
.ptb .sep{width:1px;height:16px;background:#e1e1dc}
.send{margin-left:auto;width:34px;height:34px;border-radius:9px;background:#7456fc;display:grid;place-items:center;
  box-shadow:0 1px 2px rgba(54,54,48,.05),inset 0 -2px 2px rgba(54,54,48,.2),inset 0 2px 0 rgba(255,255,255,.1),inset 0 0 0 1px rgba(60,30,180,.35)}
.send svg{width:18px;height:18px;fill:none;stroke:#fff;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}

.cn{fill:none;stroke:#1d1d1b;stroke-width:1.1;stroke-dasharray:5 6;stroke-linecap:round}
.cn,.bl{animation:sbpDash 1.1s linear infinite}
@keyframes sbpDash{to{stroke-dashoffset:-22}}
@media (prefers-reduced-motion:reduce){.cn,.bl{animation:none}}
.appi.big{width:76px;height:76px;border-radius:20px;box-shadow:0 0 0 5px rgba(255,255,255,.55),0 18px 34px -14px rgba(60,30,160,.85)}
.src{z-index:3}.figc{padding:14px}
.imp{gap:14px}.imp .fig{width:56px;height:56px;border-radius:14px}.imp span{display:flex;flex-direction:column;gap:6px}.imp b{font:600 17px/1 var(--body)}.imp small{font:400 13px/1 var(--body);color:#8a8a84}
.pbox{width:300px}
.tallimg .hero-img{height:10.5em}
#p4 .art::after{content:"";position:absolute;inset:0;z-index:-1;pointer-events:none;background:radial-gradient(42% 46% at 24% 14%,rgba(255,255,255,.97) 0%,rgba(255,255,255,.85) 45%,rgba(255,255,255,0) 100%)}

/* top layout (journey) */
.promo.top{grid-template-columns:1fr;grid-template-rows:auto 1fr}
.promo.top .tp{display:grid;grid-template-columns:1.2fr 1fr;grid-template-rows:auto auto;gap:18px 56px;padding:28px 32px 26px}
.promo.top .tx{display:contents}
.promo.top .tx h2{grid-column:1;grid-row:1/3;align-self:start}
.promo.top .tx p{grid-column:2;grid-row:1;margin:4px 0 0;max-width:none}
.promo.top .btn{grid-column:2;grid-row:2;margin-top:0;align-self:end;justify-self:start}
#p5 .art{--bgt:scale(-1,1);--bgs:130%;--bgp:30% 55%}

.grp{position:absolute;inset:0;transition:translate .5s cubic-bezier(.2,.7,.2,1)}.grp > *{position:absolute}
.bl{fill:none;stroke:#1d1d1b;stroke-width:1.1;stroke-dasharray:5 6;stroke-linecap:round}.bd{fill:#1d1d1b}
.obimg{flex:none;height:11em;border-radius:1em;background-size:cover;background-position:center 30%}.obimg.tall{height:13em}
.obp{margin:-.2em 0 0;text-align:center;font-size:.72em;color:#6b6b66}
.segs{display:flex;gap:.3em}.segs i{flex:1;height:.25em;border-radius:1em;background:#e4e4df}.segs i.on{background:#1d1d1b}
.qg{display:grid;grid-template-columns:1fr 1fr;gap:.45em;margin-top:.2em}
.qc{display:flex;flex-direction:column;gap:1.1em;padding:.7em;border-radius:.8em;background:#fff;box-shadow:inset 0 0 0 .07em #e6e6e2;font-size:.66em;font-weight:500;color:#2a2a25;min-height:5.6em}
.qc svg{width:1.9em;height:1.9em;padding:.4em;border-radius:.45em;background:var(--c);fill:none;stroke:var(--i);stroke-width:1.8}
.qc.on{box-shadow:inset 0 0 0 .14em #7b5cf5;background:#faf8ff}
.dots{display:flex;gap:.3em;justify-content:center}.dots i{width:.35em;height:.35em;border-radius:1em;background:#d9d9d3}.dots i.on{width:1.2em;background:#1d1d1b}
.last .sc{gap:.7em}

@media (max-width:900px){.promo.top .tp{display:flex;padding:24px 18px 22px}.promo.top .tx{display:block}.promo.top .tx p{margin-top:22px}.promo.top .btn{margin-top:0;align-self:flex-start}.promo.top .art{aspect-ratio:auto;max-height:none}}

/* journey phones: larger type inside small phones */
.obph .sc{font-size:calc(var(--w) / 14.5);padding:2.7em .9em .9em;gap:.6em}
.obph .tt.q{font-size:1.18em}
.qg.big{gap:.4em}.qg.big .qc{font-size:.8em;min-height:5.2em;gap:.7em;padding:.6em}
.qc.on.a{box-shadow:inset 0 0 0 .16em #7b5cf5;background:#faf8ff}.qc.on.b{box-shadow:inset 0 0 0 .16em #3d6bff;background:#f6f8ff}
.prr.np{margin:0 0 .5em;padding-bottom:.5em}.fts.one{grid-template-columns:1fr;gap:.35em}
.obph .pro{padding:.7em}.obph .gotit{gap:.7em}.obph .ring{width:4.2em;height:4.2em}

.pimg{flex:none;height:8em;border-radius:.8em}
.offer.mt{box-shadow:inset 0 0 0 .1em #a9c4ff}
.offer img{height:1.25em;mix-blend-mode:multiply}
.srcchip{transform:translateX(-50%);padding:11px 16px;border-radius:99px;background:rgba(255,255,255,.88);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);z-index:4;
  box-shadow:inset 0 0 0 1px #fff,0 16px 28px -16px rgba(40,20,140,.55)}
.srcchip img{height:22px;display:block;mix-blend-mode:multiply}
.val img{height:13px}
.condg{padding:12px 14px 12px}.condg .chd{font-size:15px}.condg .chd .gi{font-size:32px}.condg .row{font-size:12px;gap:6px}.condg .row .tok{font-size:11.5px}.condg .val{font-size:11.5px;padding:4px 6px}.condg .dst{font-size:13.5px}

/* journey: Inter, open tracking, richer loading */
.obph .sc{font-family:var(--body)}
.obph .tt,.obph .tt.q{font-family:var(--body);font-weight:600;letter-spacing:-.012em;line-height:1.18}
.obph .sc *{letter-spacing:normal}.obph .tt *{letter-spacing:-.012em}
.ring.big{width:5.6em;height:5.6em}.ring.big b{font-size:1.15em}
.r1.g{stroke:url(#rg)}
.thumbs{display:flex;gap:.4em;margin-top:.2em}
.thumbs i{position:relative;width:2.6em;height:2.6em;border-radius:.6em;opacity:.45;filter:saturate(.4) blur(.04em);box-shadow:inset 0 0 0 .08em rgba(0,0,0,.06)}
.thumbs i.done{opacity:1;filter:none}
.thumbs svg{position:absolute;right:-.3em;bottom:-.3em;width:1.1em;height:1.1em;padding:.15em;border-radius:50%;background:#2fae4b;fill:none;stroke:#fff;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;box-shadow:0 0 0 .12em #fff}
.obph .gotit{gap:.6em}

.cc2 .chd{padding-bottom:10px;margin-bottom:4px}
.crow{padding:8px 0 10px;border-bottom:1px dashed #e4e4df;display:flex;flex-direction:column;gap:6px}.crow:last-child{border:0;padding-bottom:2px}
.crow > div{display:flex;align-items:center;gap:6px;font:400 12px/1 var(--mono);color:#8a8a84;white-space:nowrap}
.crow .l2,.crow .l3{padding-left:16px}
.crow .tok{font-size:11.5px;vertical-align:0}.crow .val{font-size:11.5px;padding:4px 6px}.crow .dst{font-size:13.5px}
.who.r{flex-direction:row}
.cnd2{background:rgba(255,255,255,.95)!important;padding:12px 12px 12px!important}.cnd2 .crow > div{font-size:11px}.cnd2 .crow .tok,.cnd2 .crow .val{font-size:10.5px}.cnd2 .crow .l2,.cnd2 .crow .l3{padding-left:12px}.cnd2 .chd{font-size:14px}.cnd2 .chd .gi{font-size:28px}
.ofi{width:1.1em;height:1.1em;fill:#7b5cf5;stroke:none;flex:none}

/* personalization highlights: name (coral), onboarding answer (mint), campaign (violet) */
.p6s .slot,.slot{border-radius:.28em;padding:0 .16em;-webkit-box-decoration-break:clone;box-decoration-break:clone}
.slot.s1{background:#ffe3dc;color:#d8432b;box-shadow:inset 0 0 0 .07em #ff9a85}
.slot.s2{background:#dcf6ec;color:#1f7e64;box-shadow:inset 0 0 0 .07em #6fd6b4}
.offer.slot.s3{position:relative;background:#f3eefe;color:#5a28c9;box-shadow:inset 0 0 0 .1em #b9a2f5;padding:.6em .75em}
.offer .ofi{fill:#7b5cf5}
.stag{display:none}
.who{box-shadow:inset 0 0 0 1.5px #ff9a85,0 16px 28px -16px rgba(40,20,140,.55)!important}
.crow.k2,.crow.k3{position:relative;padding-left:10px}
.crow.k2::before,.crow.k3::before{content:"";position:absolute;left:0;top:8px;bottom:10px;width:3px;border-radius:2px}
.crow.k2::before{background:#4fcfa6}.crow.k3::before{background:#a280ea}
.crow.k2 .val{color:#1f7e64;background:#dcf6ec;box-shadow:inset 0 0 0 1px #a7e7d1}
.crow.k3 .val{background:#f3eefe;box-shadow:inset 0 0 0 1px #d6c8fb}
.offr{margin:-.1em 0 0;font:400 .78em/1.3 var(--body);color:#5a28c9}
.lb:hover:not(.on){color:#1d1d1b;background:rgba(255,255,255,.55)}

/* promo 1: card sits lower and the Subscribe button is visible inside the cropped phone */
#p1 .ph.hero .pro{margin-top:1.4em}
#p1 .ph.hero .sub{margin-top:4.85em}
.tbig .term code{white-space:normal}.tbig .term .pr{color:#fff;font-weight:500;margin:6px 10px 4px;padding:6px 8px;border:1px solid #3a3a44;border-radius:6px;background:rgba(255,255,255,.04)}.tbig .term .pr em{color:#c9b8ff}.mini{padding:10px 12px}.mini .imp{gap:10px}.mini .imp .fig{width:36px;height:36px;border-radius:9px}.mini .imp b{font:600 15px/1 var(--body)}.mini .imp small{font:400 12px/1 var(--body);white-space:nowrap}.spk{width:36px;height:36px;border-radius:9px;flex:none;display:grid;place-items:center;background:linear-gradient(135deg,#efe9ff,#dcd0ff)}.spk svg{width:20px;height:20px;fill:var(--violet)}.cn.hot{stroke:var(--violet);stroke-width:2.4;stroke-dasharray:7 6}.cn:not(.hot){opacity:.5}.cnd2 .chd{font-family:var(--body);font-weight:600}.cnd2 .crow > div{font-family:var(--body);font-size:12.5px;color:#6b6b66}.cnd2 .crow i{font-style:normal}.cnd2 .crow .val{font-family:var(--body);font-size:12px}.cnd2 .crow .l3{padding-left:0}.cnd2 .crow .dst{font-style:normal;font-weight:600;font-size:14px}



(function(){ if(!('IntersectionObserver' in window)) return; const io=new IntersectionObserver(es=>es.forEach(e=>e.target.classList.toggle('sbp-off',!e.isIntersecting))); document.querySelectorAll('.sbp-host').forEach(h=>io.observe(h)); })();

(function(){ const nav=document.getElementById('secNav'); let last=null;
  new MutationObserver(()=>{ const a=nav.querySelector('a.cur'); if(a===last) return; last=a;
    if(!a){ nav.scrollLeft=0; return; } if(nav.scrollWidth<=nav.clientWidth) return;
    const n=nav.getBoundingClientRect(), r=a.getBoundingClientRect();
    nav.scrollTo({left:nav.scrollLeft+r.left-n.left-(n.width-r.width)/2, behavior:'smooth'});
  }).observe(nav,{subtree:true, childList:true, attributes:true, attributeFilter:['class']}); })();