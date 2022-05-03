(()=>{"use strict";const e=({timing:e,draw:t,duration:n})=>{let o=performance.now();requestAnimationFrame((function a(r){let s=(r-o)/n;s>1&&(s=1);let c=e(s);t(c),s<1&&requestAnimationFrame(a)}))},t=({formId:e,someElem:t=[]})=>{const n=document.getElementById(e),o=document.createElement("div"),a="Ошибка...";try{if(!n)throw new Error("Верните форму, пожалуйста");n.addEventListener("submit",(e=>{e.preventDefault(),(()=>{const e=n.querySelectorAll("input"),r=new FormData(n),s={};var c;o.textContent="Загрузка...",n.append(o),r.forEach(((e,t)=>{s[t]=e})),t.forEach((e=>{const t=document.getElementById(e.id);"block"===e.type?s[e.id]=t.textContent:"input"===e.type&&(s[e.id]=t.value)})),(e=>{let t=!0;return e&&e.forEach((e=>{"user_name"===e.name?/[^а-яА-Я-\s]/g.test(e.value)&&(t=!1):"user_phone"===e.name?/[^0-9\-\(\)\+]/g.test(e.value)&&(t=!1):"user_message"===e.name&&/[^а-яА-Я-\s0-9\(\)\.\,\:\"\!\?]/g.test(e.value)&&(t=!1)})),t})(e)?(c=s,fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(c),headers:{"Content-Type":"application/json"}}).then((e=>e.json()))).then((t=>{o.textContent="Спасибо! Наш менеджер с вами свяжется",e.forEach((e=>{e.value=""}))})).catch((e=>{o.textContent=a})):(o.textContent=a,alert("Данные не валидны"))})()}))}catch(e){console.log(e.message)}};(e=>{const t=document.getElementById("timer-days"),n=document.getElementById("timer-hours"),o=document.getElementById("timer-minutes"),a=document.getElementById("timer-seconds");let r;const s=()=>{let e=(()=>{let e=(new Date("5 may 2022").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,days:Math.floor(e/60/60/24),hours:Math.floor(e/60/60%24),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}})();t.textContent=e.days<10?"0"+e.days:e.days,n.textContent=e.hours<10?"0"+e.hours:e.hours,o.textContent=e.minutes<10?"0"+e.minutes:e.minutes,a.textContent=e.seconds<10?"0"+e.seconds:e.seconds,e.timeRemaining<=0&&(clearInterval(r),t.textContent="00",n.textContent="00",o.textContent="00",a.textContent="00")};s(),r=setInterval(s,1e3)})(),(()=>{const e=document.querySelector("menu");let t;const n=()=>{e.classList.toggle("active-menu")},o=e=>{const t=e.getAttribute("href").substring(1),n=document.getElementById(t);n&&n.scrollIntoView({behavior:"smooth",block:"start",inline:"center"})};document.body.addEventListener("click",(a=>{a.target.closest(".menu")?n():a.target.matches("menu a")?(a.preventDefault(),n(),t=a.target,o(t)):a.target.closest("main>a")?(a.preventDefault(),t=a.target.closest("main>a"),o(t)):a.target.closest("menu")||e.classList.contains("active-menu")&&n()}))})(),(()=>{const t=document.querySelectorAll(".popup-btn"),n=document.querySelector(".popup"),o=n.querySelector(".popup-content");t.forEach((t=>{t.addEventListener("click",(()=>{window.innerWidth>768?(n.style.display="block",o.style.transform="translateX(100px)",e({duration:500,timing:e=>e,draw(e){o.style.opacity=e}})):n.style.display="block"}))})),n.addEventListener("click",(t=>{t.target.closest(".popup-content")&&!t.target.classList.contains("popup-close")||(window.innerWidth>768?e({duration:300,timing:e=>e,draw(e){o.style.opacity=1-e}}):n.style.display="none",setTimeout((()=>{n.style.display="none"}),300))}))})(),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),n=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{if(e.target.closest(".service-header-tab")){const o=e.target.closest(".service-header-tab");t.forEach(((e,t)=>{e===o?(e.classList.add("active"),n[t].classList.remove("d-none")):(e.classList.remove("active"),n[t].classList.add("d-none"))}))}}))})(),((e,t,n="slide-active",o,a="dot-active",r)=>{const s=document.querySelector(`.${e}`);if(!s)return;const c=document.querySelectorAll(`.${t}`);if(0===c.length)return;let l,i,d=0;const u=(e,t,n)=>{e[t].classList.remove(n)},m=(e,t,n)=>{e[t].classList.add(n)},g=()=>{u(c,d,n),u(l,d,a),d++,d>=c.length&&(d=0),m(c,d,n),m(l,d,a)},p=(e=1500)=>{i=setInterval(g,e)};s.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(`.${o}, .${r}`)&&(u(c,d,n),u(l,d,a),e.target.matches("#arrow-right")?d++:e.target.matches("#arrow-left")?d--:e.target.classList.contains(o)&&l.forEach(((t,n)=>{e.target===t&&(d=n)})),d>=c.length&&(d=0),d<0&&(d=c.length-1),m(c,d,n),m(l,d,a))})),s.addEventListener("mouseenter",(e=>{e.target.matches(`.${o}, .${r}`)&&clearInterval(i)}),!0),s.addEventListener("mouseleave",(e=>{e.target.matches(`.${o}, .${r}`)&&p()}),!0),(()=>{const e=document.createElement("ul");e.classList.add("portfolio-dots");for(let t=0;t<c.length;t++){const n=document.createElement("li");n.classList.add(o),0===t&&n.classList.add(a),e.append(n)}s.append(e)})(),l=document.querySelectorAll(`.${o}`),p(2e3)})("portfolio-content","portfolio-item","portfolio-item-active","dot","dot-active","portfolio-btn"),((t=100)=>{const n=document.querySelector(".calc-block"),o=document.querySelector(".calc-type"),a=document.querySelector(".calc-square"),r=document.querySelector(".calc-count"),s=document.querySelector(".calc-day"),c=document.getElementById("total");n.addEventListener("input",(n=>{if(n.target===o||n.target===a||n.target===r||n.target===s){const n=(()=>{const e=+o.options[o.selectedIndex].value,n=a.value;let c=0,l=1,i=1;return r.value>1&&(l+=+r.value/10),s.value&&s.value<5?i=2:s.value&&s.value<10&&(i=1.5),c=o.value&&a.value?t*e*n*l*i:0,c})();e({duration:500,timing:e=>e,draw(e){c.textContent=Math.round(e*n)}})}}))})(100),t({formId:"form1",someElem:[{type:"block",id:"total"}]}),t({formId:"form2"}),t({formId:"form3"})})();