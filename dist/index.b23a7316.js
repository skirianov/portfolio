const e=document.getElementsByClassName("tab"),t=document.getElementsByClassName("tab-content"),n=document.getElementById("contact-btn"),l=document.getElementById("mode");let a="light";const c=()=>{document.getElementById("tweet-content").innerHTML='<div class="loader">Loading...</div>',setTimeout((()=>{twttr.widgets.createTimeline({sourceType:"profile",screenName:"SergiiKirianov"},document.getElementById("tweet-content"),{related:"SergiiKirianov",theme:"dark"===a?"dark":null}).then((function(e){document.getElementsByClassName("loader")[0].style.display="none"}))}),200)};let o=function(e){for(let t=0;t<e.length;t++)e[t].className="light"===a?"tab interact":"tab interact dark"},i=function(e){for(let t=0;t<e.length;t++)e[t].className="tab-content"};const d=()=>{let e=document.getElementsByTagName("body")[0],t=document.getElementById("container"),l=document.getElementById("contact"),a=document.getElementById("picture"),o=document.getElementById("tabs-container"),i=[].slice.call(document.getElementsByClassName("tab")),d=[].slice.call(document.getElementsByClassName("content-box")),s=[].slice.call(document.getElementsByClassName("sub")),m=[e,t,l,n,a,o,i,d,s];m=m.flat(),m.forEach((e=>{e.classList.toggle("dark")})),c()};for(let n=0;n<e.length;n++)e[n].addEventListener("click",(()=>{o(e),i(t),e[n].className="light"===a?"tab selected":"tab selected dark",t[n].className="tab-content show",setTimeout((()=>{let t=document.activeElement.clientHeight,n=e[0].getClientRects()[0].x;if(t<1300)window.scrollTo(0,0);else{window.innerWidth;window.scrollTo(0,n-30)}}),100)}));n.addEventListener("click",(()=>s()));let s=function(){window.location="mailto:skirianov@gmail.com"};if(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches){document.getElementById("follow");l.innerText="🌚",a="dark",d()}l.addEventListener("click",(()=>{"🌚"===l.innerText?(l.innerText="🌝",a="light"):(l.innerText="🌚",a="dark"),d()})),document.addEventListener("load",c());
//# sourceMappingURL=index.b23a7316.js.map
