(()=>{"use strict";(e=>{const t=document.getElementById("timer-days"),n=document.getElementById("timer-hours"),r=document.getElementById("timer-minutes"),o=document.getElementById("timer-seconds");let c;const a=()=>{let e=(()=>{let e=(new Date("21 april 2022").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,days:Math.floor(e/60/60/24),hours:Math.floor(e/60/60%24),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}})();t.textContent=e.days<10?"0"+e.days:e.days,n.textContent=e.hours<10?"0"+e.hours:e.hours,r.textContent=e.minutes<10?"0"+e.minutes:e.minutes,o.textContent=e.seconds<10?"0"+e.seconds:e.seconds,e.timeRemaining<=0&&(clearInterval(c),t.textContent="00",n.textContent="00",r.textContent="00",o.textContent="00")};a(),c=setInterval(a,1e3)})(),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),n=(t.querySelector(".close-btn"),t.querySelectorAll("ul>li>a"),()=>{t.classList.toggle("active-menu")});e.addEventListener("click",n),t.addEventListener("click",(e=>{"A"===e.target.tagName&&n()}))})(),(()=>{const e=document.querySelectorAll(".popup-btn"),t=document.querySelector(".popup"),n=t.querySelector(".popup-content");let r,o=0,c=!1;const a=()=>{window.innerWidth>768?c?(o++,t.style.display="block",r=requestAnimationFrame(a),o<=100?n.style.opacity=4*o+"%":(cancelAnimationFrame(r),o=100),n.style.transform="translateX(100px)"):(o-=4,r=requestAnimationFrame(a),o>=0?n.style.opacity=o/2+"%":(cancelAnimationFrame(r),t.style.display="none",o=0)):t.style.display="none"===t.style.display?"block":"none"};e.forEach((e=>{e.addEventListener("click",(()=>{c=!c,a()}))})),t.addEventListener("click",(e=>{e.target.closest(".popup-content")&&!e.target.classList.contains("popup-close")||(c=!c,a())}))})(),[...document.querySelectorAll("ul>li>a"),document.querySelector("main>a")].forEach((e=>{e.addEventListener("click",(t=>{t.preventDefault();const n=e.getAttribute("href").substring(1),r=document.getElementById(n);r&&r.scrollIntoView({behavior:"smooth",block:"start",inline:"center"})}))})),(()=>{const e=[document.querySelector(".calc-square"),document.querySelector(".calc-count"),document.querySelector(".calc-day")],t=document.querySelector(".mess");let n=[],r=[],o=[];for(let e=1;e<=3;e++)n.push(document.getElementById(`form${e}-name`)),r.push(document.getElementById(`form${e}-email`)),o.push(document.getElementById(`form${e}-phone`));const c=(e,t)=>{if(e.target.value){let n=e.target.value;n=n.replace(t,""),n=n.replace(/\s{2,}/g," "),n=n.replace(/-{2,}/g,"-"),n=n.trim(),n=n.replace(/^-|-$/g,""),n=n.trim(),"text"===e.target.type&&(n=n[0].toUpperCase()+n.substr(1).toLowerCase()),e.target.value=n}};t.addEventListener("blur",(e=>{c(e,/[^а-яА-Я-\s]+/g)})),n.forEach((e=>{e.addEventListener("blur",(e=>{c(e,/[^а-яА-Я\-\s]+/g)}))})),r.forEach((e=>{e.addEventListener("blur",(e=>{c(e,/[^a-zA-Z0-9\@\-\_\.\!\~\*\']+/g)}))})),o.forEach((e=>{e.addEventListener("blur",(e=>{c(e,/[^0-9\-\(\)]/g)}))})),e.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D+/,"")}))}))})(),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),n=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{if(e.target.closest(".service-header-tab")){const r=e.target.closest(".service-header-tab");t.forEach(((e,t)=>{e===r?(e.classList.add("active"),n[t].classList.remove("d-none")):(e.classList.remove("active"),n[t].classList.add("d-none"))}))}}))})()})();