/* =====================================================================
   INSTAGRAM APP  -  edit ONLY the INSTA block below.
   Pictures: upload them next to index.html and write the file name,
   e.g. img:"a.jpg". Leave "" to show an emoji / coloured circle instead.
   Every line ends with a comma EXCEPT the last one in each list.
   ===================================================================== */
const INSTA = {
  me: "sunghan._.bin",       // the phone owner's username (must match a name in "accounts")
  icon: "instaa.jpg",    
     icons: {like:"likebutton.jpg", liked:"likedbutton.jpg", comment:"comment.jpg", share:"dm.jpg"},// home-screen icon: an emoji, or a file name like "instagram-icon.jpg"

  /* ---- ACCOUNTS: one per username used anywhere below ---- */
  accounts: {
    "sunghan._.bin": {name:"성한빈 (SUNGHANBIN)", avatar:"hanbinpfp.jpg", color:"#c2573b", followers:"705K", following:"2",
                      bio:"ZEROBASEONE"},
    "hao_":            {name:"Zhang Hao", avatar:"haopfp.jpg", color:"#4a6fa5", followers:"985K", following:"2",
                      bio:"冰冰的最大的粉丝"},
   "zb1official":       {name:"ZEROBASEONE", avatar:"zb1pfp.jpg", color:"#555555", followers:"4.5M", following:"4",
                      bio:"SUNG HANBIN & ZHANG HAO DUO DEBUT 2028.01.01"},
    "and2ble":  {name:"AND2BLE", avatar:"a2bpfp.jpg", color:"#8a5fb0", followers:"946K", following:"1",
                      bio:"AND2BLE Official Instagram Sequence 02: Attraction"},
    "koreadispatch":  {name:"", avatar:"dispatch.jpg", color:"#8a5fb0", followers:"12.4M", following:"9",
                      bio:"D'FESTA THE ORIGIN TICKET OPEN!"}
  },

  /* ---- STORIES: the circles along the top of the home page ---- */
  stories: [
    {user:"hao_",      img:"hanbinice.jpg", emoji:"", caption:"Travelled an hour just to get my favorite flavor"},
    {user:"zb1official", img:"who.jpg",      emoji:"", caption:"Who is it??"},
    {user:"and2ble", img:"haidilao.jpg", emoji:"", caption:"Here again after only 24 hours!"}
  ],

  /* ---- POSTS: newest first. "user" must be in accounts. ---- */
  posts: [
    {user:"koreadispatch", time:"5 hours ago", location:"Seoul, South Korea", img:"haobin.jpg", emoji:"",
     caption:"Sung Hanbin and Zhang Hao confirm 4 year long relationship", likes: 132545, comments:537[
       {user:"sunghan._.bin", text:"😲", time:"1h", likes:1643, replies:[
          {user:"hao_", text:"Why did you take so long!!", time:"1h"}
       ]},
       {user:"cuhaote", text:"I KNEW IT!!", time:"1h", likes:340, replies:3[]},
       {user:"matthew_s", text:"Get a room 😂", time:"45m", likes:1573, replies: 56[]}
    ]},
    {user:"hao_", time:"1 day ago", location:"Incheon Airport", img:"italyhao.jpg", emoji:"",
     caption:"Stage day. Fit check.", likes:52300, comments:[
       {user:"sunghan._.bin", text:"You should wear it more often!", time:"20h", likes:4100, replies:[]},
       {user:"cuhaote", text:"Everything he wears is perfect", time:"19h", likes:980, replies:[]}
    ]},
    {user:"sunghan._.bin", time:"3 days ago", location:"Kyoto", img:"suit.jpg", emoji:"",
     caption:"Oyasumi!", likes:423567, comments:[
       {user:"hao_", text: "Come back to meee", time:"20h", likes:4100, replies:[]},
        

  /* ---- DMs: from:"them" is the other person, from:"me" is the owner.
          {t:"..."} is a grey time label. Add img:"file.jpg" to send a photo. ---- */
  dms: [
    {with:"hao_", unread:1, msgs:[
      {t:"Yesterday 22:10"},
      {from:"them", text:"Are you still up?"},
      {from:"me", text:"Always for you"},
      {from:"them", img:"d.jpg", text:"Look what I found"},
      {t:"Today 21:40"},
      {from:"them", text:"Don't forget about tonight"}
    ]},
    {with:"matthew_k", unread:0, msgs:[
      {t:"Mon 14:02"},
      {from:"them", text:"Manager is asking where you are"},
      {from:"me", text:"Tell her I'm in a meeting"}
    ]}
  ]
};
/* ===================== END OF EDIT SECTION ===================== */

/* ---------- styles (you don't need to change anything below) ---------- */
document.head.appendChild(Object.assign(document.createElement("style"),{textContent:`
.ix-top{padding:48px 14px 8px;display:flex;align-items:center;gap:12px;border-bottom:1px solid var(--line);min-height:92px;font-size:17px;flex:none}
.ix-top b{flex:1}.ix-top button{background:none;border:0;color:var(--ink);font-size:24px;cursor:pointer;padding:0 4px}
.ix-top:empty{min-height:46px;padding:0;border-bottom:0}
.ix-logo{font:italic 700 27px Georgia,serif;flex:1}
.ix-th{display:flex;align-items:center;gap:10px;flex:1}.ix-th b{flex:none}
.ix-body{flex:1;min-height:0;overflow-y:auto}
.ix-tabs{display:flex;justify-content:space-around;padding:8px 0 24px;border-top:1px solid var(--line);background:var(--paper);flex:none}
.ix-tabs button{background:none;border:0;font-size:24px;opacity:.4;cursor:pointer;color:var(--ink)}.ix-tabs .on{opacity:1}
.ix-av{border-radius:50%;object-fit:cover;display:grid;place-items:center;color:#fff;font-weight:600;flex:none;border:2px solid var(--paper)}
.ix-stories{display:flex;gap:12px;padding:12px;overflow-x:auto;border-bottom:1px solid var(--line)}
.ix-st{background:none;border:0;display:flex;flex-direction:column;align-items:center;gap:4px;color:var(--ink);cursor:pointer;font-size:11px}
.ix-st small{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:64px}
.ix-ring{display:grid;padding:3px;border-radius:50%;background:linear-gradient(45deg,#f9ce34,#ee2a7b,#6228d7)}
.ix-post{padding-bottom:14px}
.ix-ph{display:flex;align-items:center;padding:8px 12px}
.ix-u{display:flex;align-items:center;gap:10px;background:none;border:0;color:var(--ink);text-align:left;font:inherit;cursor:pointer;flex:1}
.ix-u small{display:block;font-size:11px;opacity:.7}
.ix-img{width:100%;aspect-ratio:1;object-fit:cover;display:block;background:#2a3a38}
.ix-ph2{display:grid;place-items:center;font-size:80px}
.ix-act{display:flex;gap:4px;padding:6px 8px}.ix-act button{background:none;border:0;font-size:24px;cursor:pointer}
.ix-txt{padding:2px 12px;font-size:14px;line-height:1.4;white-space:pre-wrap}
.ix-vc{background:none;border:0;color:var(--ink);opacity:.55;padding:2px 12px;font-size:14px;cursor:pointer}
.ix-time{padding:2px 12px;font-size:11px;opacity:.5;text-transform:uppercase}
.ix-c{display:flex;gap:10px;padding:10px 14px;font-size:14px;line-height:1.4}
.ix-c small{display:block;opacity:.55;font-size:12px;margin-top:2px}
.ix-rp{background:none;border:0;color:var(--ink);opacity:.55;font-size:12px;padding:4px 0;cursor:pointer}
.ix-rpl{padding-left:44px}
.ix-prh{display:flex;align-items:center;gap:22px;padding:16px}
.ix-st3{display:flex;flex:1;justify-content:space-around;text-align:center;font-size:13px}.ix-st3 b{display:block;font-size:17px}
.ix-bio{padding:0 16px;font-size:14px;white-space:pre-wrap;line-height:1.4}
.ix-btns{display:flex;gap:8px;padding:12px 16px}
.ix-btns span{flex:1;text-align:center;background:var(--theirs);border-radius:8px;padding:7px;font-size:14px;font-weight:600}
.ix-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:2px;margin-top:6px}
.ix-grid button{aspect-ratio:1;border:0;padding:0;background:#2a3a38;display:grid;place-items:center;font-size:34px;cursor:pointer;overflow:hidden}
.ix-grid img{width:100%;height:100%;object-fit:cover}
.ix-un{width:9px;height:9px;border-radius:50%;background:#3797f0;flex:none}
.ix-ms{padding:12px;display:flex;flex-direction:column;gap:4px}
.ix-m{max-width:75%;padding:9px 13px;border-radius:20px;font-size:15px;line-height:1.35}
.ix-m.me{align-self:flex-end;background:#3797f0;color:#fff}.ix-m.them{align-self:flex-start;background:var(--theirs)}
.ix-m.pic{padding:3px}.ix-m.pic img{width:100%;max-width:220px;border-radius:17px;display:block}.ix-m.pic div{padding:6px 9px 3px}
.ix-t{align-self:center;font-size:11px;opacity:.55;margin:6px 0}
.ix-add{margin:8px 12px 24px;padding:10px 14px;border:1px solid var(--line);border-radius:22px;font-size:14px;opacity:.6;flex:none}
`}));

/* ---------- helpers ---------- */
const ixHue = n => "hsl(" + ([...n].reduce((a,c)=>a+c.charCodeAt(0),0)%360) + ",45%,45%)";
const ixLikes = p => ((p.likes||0)+(p.liked?1:0)).toLocaleString("en-GB");
const ixName = u => (INSTA.accounts[u]||{}).name || u;
const ixIcons = Object.assign({like:"likebutton.jpg", liked:"likedbutton.jpg", comment:"💬", share:"✈️"}, INSTA.icons||{});
const ixIc = v => /\.(png|jpe?g|webp|svg)$/i.test(v) ? `<img src="${esc(v)}" alt="" width="34" height="34" style="width:34px;height:34px;object-fit:contain;display:block">` : v;function ixAv(u,s){
  const a=INSTA.accounts[u]||{}, z=s||36;
  return a.avatar
    ? `<img class="ix-av" style="width:${z}px;height:${z}px" src="${esc(a.avatar)}" alt="">`
    : `<span class="ix-av" style="width:${z}px;height:${z}px;background:${a.color||ixHue(u)};font-size:${Math.round(z*0.4)}px">${esc((u[0]||"?").toUpperCase())}</span>`;
}
function ixShell(o){
  $("appwin").innerHTML = `<div class="ix-top">${o.back?`<button id="ixback">‹</button>`:""}${o.title}${o.right||""}</div><div class="ix-body">${o.body}</div>${o.foot||""}${o.tab?`<div class="ix-tabs">${[["home","home.jpg"],["dm","dm.jpg"],["me","hanbinpfp.jpg"]].map(([k,i])=>`<button data-t="${k}" class="${o.tab===k?"on":""}">${/\.(png|jpe?g|webp|svg)$/i.test(i)?`<img src="${esc(i)}" alt="" width="28" height="28" style="width:28px;height:28px;border-radius:${k==="me"?"50%":"0"};object-fit:${k==="me"?"cover":"contain"};display:block">`:i}</button>`).join("")}</div>`:""}`;  $("status").classList.add("dark"); $("bar").classList.add("dk");
  if(o.back) $("ixback").onclick = o.back;
  $("appwin").querySelectorAll(".ix-tabs button").forEach(b=>b.onclick=()=>({home:ixHome,dm:ixInbox,me:()=>ixProfile(INSTA.me)})[b.dataset.t]());
}
function ixPost(p,i){
  const n=(p.comments||[]).length;
  return `<div class="ix-post"><div class="ix-ph"><button class="ix-u" data-u="${esc(p.user)}">${ixAv(p.user,32)}<span><b>${esc(p.user)}</b>${p.location?`<small>${esc(p.location)}</small>`:""}</span></button><span>⋯</span></div>${p.img?`<img class="ix-img" src="${esc(p.img)}" alt="">`:`<div class="ix-img ix-ph2">${p.emoji||"📷"}</div>`}<div class="ix-act"><button data-l="${i}">${ixIc(p.liked?ixIcons.liked:ixIcons.like)}</button><button data-c="${i}">${ixIc(ixIcons.comment)}</button><button>${ixIc(ixIcons.share)}</button></div><div class="ix-txt"><b id="lk${i}">${ixLikes(p)} likes</b></div><div class="ix-txt"><b>${esc(p.user)}</b> ${esc(p.caption||"")}</div>${n?`<button class="ix-vc" data-c="${i}">View all ${n} comments</button>`:""}<div class="ix-time">${esc(p.time||"")}</div></div>`;
}
function ixWire(ret){
  const r=$("appwin");
  r.querySelectorAll("[data-l]").forEach(b=>b.onclick=()=>{
    const i=+b.dataset.l, p=INSTA.posts[i]; p.liked=!p.liked;
b.innerHTML=ixIc(p.liked?ixIcons.liked:ixIcons.like); const e=$("lk"+i); if(e) e.textContent=ixLikes(p)+" likes";
  });
  r.querySelectorAll("[data-c]").forEach(b=>b.onclick=()=>ixComments(+b.dataset.c,ret));
  r.querySelectorAll("[data-u]").forEach(b=>b.onclick=()=>ixProfile(b.dataset.u,ret));
  r.querySelectorAll("[data-p]").forEach(b=>b.onclick=()=>ixPostPage(+b.dataset.p,ret));
}

/* ---------- pages ---------- */
function ixHome(){
  const stories=`<div class="ix-stories">${INSTA.stories.map((s,i)=>`<button class="ix-st" data-s="${i}"><span class="ix-ring">${ixAv(s.user,56)}</span><small>${esc(s.user)}</small></button>`).join("")}</div>`;
  ixShell({title:"", right:"", tab:"home",
    body: stories + INSTA.posts.map(ixPost).join("")});
  ixWire(ixHome);
  $("appwin").querySelectorAll("[data-s]").forEach(b=>b.onclick=()=>{
    const s=INSTA.stories[+b.dataset.s], big=$("lbig");
    big.style.backgroundImage = s.img?`url('${encodeURI(s.img)}')`:"none"; big.textContent = s.img?"":(s.emoji||"📷");
    $("lcap").textContent = s.user + (s.caption?" · "+s.caption:""); $("light").classList.add("show");
  });
}
function ixPostPage(i,ret){
  ixShell({back:ret, title:`<b>Post</b>`, tab:"home", body:ixPost(INSTA.posts[i],i)});
  ixWire(()=>ixPostPage(i,ret));
}
function ixComments(i,ret){
  const p=INSTA.posts[i];
  const rows=(p.comments||[]).map((c,k)=>{
    const rp=c.replies||[];
    return `<div class="ix-c">${ixAv(c.user,34)}<div><b>${esc(c.user)}</b> ${esc(c.text)}<small>${esc(c.time||"")}${c.likes?` · ${c.likes} likes`:""}</small>${rp.length?`<button class="ix-rp" data-r="${k}">— View ${rp.length} ${rp.length>1?"replies":"reply"}</button>`:""}</div></div>`
      + (rp.length?`<div class="ix-rpl" id="rp${k}" style="display:none">${rp.map(r=>`<div class="ix-c">${ixAv(r.user,26)}<div><b>${esc(r.user)}</b> ${esc(r.text)}<small>${esc(r.time||"")}</small></div></div>`).join("")}</div>`:"");
  }).join("");
  ixShell({back:ret, title:`<b>Comments</b>`,
    body:`<div class="ix-c">${ixAv(p.user,34)}<div><b>${esc(p.user)}</b> ${esc(p.caption||"")}<small>${esc(p.time||"")}</small></div></div>${rows}`,
    foot:`<div class="ix-add">Add a comment as ${esc(INSTA.me)}...</div>`});
  $("appwin").querySelectorAll("[data-r]").forEach(b=>b.onclick=()=>{
    const e=$("rp"+b.dataset.r); e.style.display = e.style.display==="none" ? "block" : "none";
  });
}
function ixProfile(u,ret){
  const a=INSTA.accounts[u]||{}, mine=INSTA.posts.map((p,i)=>[p,i]).filter(([p])=>p.user===u), me=(u===INSTA.me);
  ixShell({back:me?null:ret, title:`<b>${esc(u)}</b>`, tab:me?"me":"home",
    body:`<div class="ix-prh">${ixAv(u,84)}<div class="ix-st3"><div><b>${a.posts!==undefined?esc(a.posts):mine.length}</b>posts</div><div><b>${esc(a.followers||"0")}</b>followers</div><div><b>${esc(a.following||"0")}</b>following</div></div></div><div class="ix-bio"><b>${esc(a.name||u)}</b>\n${esc(a.bio||"")}</div><div class="ix-btns"><span>${me?"Edit profile":"Following"}</span><span>${me?"Share profile":"Message"}</span></div><div class="ix-grid">${mine.map(([p,i])=>`<button data-p="${i}">${p.img?`<img src="${esc(p.img)}" alt="">`:(p.emoji||"📷")}</button>`).join("")}</div>`});
  ixWire(()=>ixProfile(u,ret));
}
function ixInbox(){
  ixShell({title:`<b>${esc(INSTA.me)}</b>`, tab:"dm",
    body: INSTA.dms.map((d,i)=>{
      const last=[...d.msgs].reverse().find(m=>m.text||m.img)||{};
      const pv=(last.from==="me"?"You: ":"")+(last.text||(last.img?"Sent a photo":""));
      return `<button class="row" data-d="${i}">${ixAv(d.with,52)}<span class="t"><b style="font-weight:${d.unread?700:500}">${esc(ixName(d.with))}</b><small>${esc(pv)}</small></span>${d.unread?`<span class="ix-un"></span>`:""}</button>`;
    }).join("")});
  $("appwin").querySelectorAll("[data-d]").forEach(b=>b.onclick=()=>ixThread(+b.dataset.d));
}
function ixThread(i){
  const d=INSTA.dms[i]; d.unread=0;
  ixShell({back:ixInbox, title:`<span class="ix-th">${ixAv(d.with,30)}<b>${esc(d.with)}</b></span>`,
    body:`<div class="ix-ms">${d.msgs.map(m=>m.t?`<div class="ix-t">${esc(m.t)}</div>`:m.img?`<div class="ix-m ${m.from==="me"?"me":"them"} pic"><img src="${esc(m.img)}" alt="">${m.text?`<div>${esc(m.text)}</div>`:""}</div>`:`<div class="ix-m ${m.from==="me"?"me":"them"}">${esc(m.text)}</div>`).join("")}</div>`,
    foot:`<div class="ix-add">Message...</div>`});
}

/* ---------- plug the app into the phone ---------- */
(function(){
  if(!STORY.apps.includes("instagram")) STORY.apps.push("instagram");
  APPS.instagram = {label:"Instagram", icon:INSTA.icon||"📸", bg:"#d6249f", badge:()=>INSTA.dms.reduce((a,d)=>a+(d.unread||0),0)};
  const orig = openApp;
  openApp = function(k){ if(k==="instagram"){ $("appwin").classList.add("open"); ixHome(); } else orig(k); };
  drawHome();
})();
