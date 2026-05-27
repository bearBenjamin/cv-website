var C=document.documentElement.querySelector("body"),h=document.querySelector(".header-list"),p=document.querySelector(".btn-header-burger"),D=document.querySelector(".btn-header-burger-text"),q=()=>{C.classList.remove("no-scroll"),h.classList.remove("menu-open"),p.classList.remove("btn-header-burger-close"),D.textContent="\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043C\u0435\u043D\u044E"},_=()=>{C.classList.add("no-scroll"),h.classList.add("menu-open"),p.classList.add("btn-header-burger-close"),D.textContent="\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u043C\u0435\u043D\u044E"},$=()=>{h&&h.addEventListener("click",t=>{t.target.classList.contains("header-link")&&q()})},M=()=>{p&&(p.addEventListener("click",()=>{p.classList.contains("btn-header-burger-close")?q():_()}),$())};var K=document.documentElement.querySelector("body"),H=document.querySelector(".btn-theme-toggle");H&&H.addEventListener("click",()=>{K.classList.toggle("dark-theme")});var v=document.querySelector(".quote-section"),V=()=>{let t=v.querySelector(".quote-text"),e=v.querySelector(".quote-author");if(!t)return;let n=t.textContent.trim();t.textContent="";let s=n.split("");s.forEach((i,c)=>{let r=document.createElement("span");i===" "?r.innerHTML="&nbsp;":r.textContent=i,r.classList.add("quote-letter"),r.style.animationDelay=`${c*30}ms`,t.appendChild(r)}),setTimeout(()=>{e&&e.classList.add("is-visible")},s.length*30)},j=()=>{new IntersectionObserver((e,n)=>{e.forEach(s=>{s.isIntersecting&&(V(),n.unobserve(s.target))})},{threshold:.3}).observe(v)};var A=[`Task: Unpacking Arguments
programming language: JavaScript

function
spread(func, args) {
  return func(...args);
}`,`Task: Is a number prime?
programming language: JavaScript

function
isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}`,`Task: Data Reverse
programming language: JavaScript

function
dataReverse(data) {
  const result = [];

  while(data.length) {
    result.push(...data.splice(-8))
  }

  return result;
}`,`Task: String ends with?
programming language: JavaScript

function
solution(str, ending) {
  let count = 1;
  for (let i = ending.length - 1; i >= 0; i -= 1) {
    if (ending[i] === str[str.length - count]) {
      count += 1;
    } else {
        return false;
      }
    }
  return true;
}`,`// System 1.0 Terminal
const sys = 'Macintosh';
let memory = '128K';

function loadDisk() {
  return \`Loading \${sys}...\`;
}

console.log(loadDisk());
console.log('Memory OK');
console.log('Line 1');
console.log('Line 2');
console.log('Line 3');
console.log('Line 4');
console.log('Line 5');
console.log('Ready.');`],l=document.getElementById("code-box"),k=document.getElementById("screen"),x=0,b=0,B;function w(){let t=k.clientHeight-20,e=l.scrollHeight,n=Math.floor(e-t);l.style.transform=n>0?`translateY(-${n}px)`:"translateY(0px)"}function f(){let t=A[x];if(b<t.length){let e=t.substring(0,b);l.innerHTML=`${e}<span class="cursor"></span>`,requestAnimationFrame(w),b++;let n=Math.random()*40+20;B=setTimeout(f,n)}else l.innerHTML=`${t}<span class="cursor"></span>`,requestAnimationFrame(w)}function P(){clearTimeout(B),k.classList.add("reboot"),l.style.opacity="0",setTimeout(()=>{l.innerHTML="",l.style.transform="translateY(0px)",b=0,x=(x+1)%A.length,k.classList.remove("reboot"),l.style.opacity="1",f()},400)}var I=[{name:"\u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442 \u043C\u0430\u0433\u0430\u0437\u0438\u043D: Cat Energy",tags:"HTML / SASS(SCSS) / \u0411\u042D\u041C / JavaScript",description:"\u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u043C\u0430\u0433\u0430\u0437\u0438\u043D \u0444\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043F\u0438\u0442\u0430\u043D\u0438\u044F \u043A\u043E\u0442\u043E\u0432. \u0412\u044B\u043F\u043E\u043B\u043D\u0435\u043D \u0432 \u0440\u0430\u043C\u043A\u0430\u0445 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F \u043D\u0430 \u043A\u0443\u0440\u0441\u0435 \u201CHTML \u0438 CSS \u0430\u0434\u0430\u043F\u0442\u0438\u0432\u043D\u0430\u044F \u0432\u0435\u0440\u0441\u0442\u043A\u0430 \u0441\u0430\u0439\u0442\u043E\u0432 \u0438 \u043E\u043F\u0442\u0438\u043C\u0438\u0437\u0430\u0446\u0438\u044F\u201D HTML-Academy.",github:"https://github.com/bearBenjamin/2274609-cat-energy-2",live:"https://bearbenjamin.github.io/2274609-cat-energy-2/",figma:"https://www.figma.com/design/kwmtyIigKr8bhkgfoAdHGU/HTML-2---%D0%9A%D1%8D%D1%82-%D1%8D%D0%BD%D0%B5%D1%80%D0%B4%D0%B6%D0%B8--31---Copy-?node-id=0-1&p=f&t=Vxm7nDpJKsswQUmh-0"},{name:"Portfolio",tags:"HTML / CSS / JavaScript",description:"\u041E\u0434\u043D\u043E\u0441\u0442\u0440\u0430\u043D\u0438\u0447\u043D\u044B\u0439 \u043B\u044D\u043D\u0434\u0438\u043D\u0433 \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0430-\u0444\u0440\u0438\u043B\u0430\u043D\u0441\u0435\u0440\u0430. \u0412\u044B\u043F\u043E\u043B\u043D\u0435\u043D \u0432 \u0440\u0430\u043C\u043A\u0430\u0445 \u0441\u0430\u043C\u043E\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F \u043D\u0430 Stage 1 RS-school \u0432 \u0437\u0430\u043A\u0440\u044B\u0442\u043E\u043C \u0440\u0435\u043F\u043E\u0437\u0438\u0442\u043E\u0440\u0438\u0438 \u0448\u043A\u043E\u043B\u044B.  \u0412 \u043F\u0440\u043E\u0435\u043A\u0442\u0435 \u0440\u0435\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u043B \u043E\u0442\u0437\u044B\u0432\u0447\u0438\u0432\u0443\u044E (responsive) \u0432\u0435\u0440\u0441\u0442\u043A\u0443 \u0438 \u0438\u043D\u0442\u0435\u0440\u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0439 \u0441\u043B\u0430\u0439\u0434\u0435\u0440 \u0441 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u043F\u0440\u043E\u043A\u0440\u0443\u0442\u043A\u043E\u0439 \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0439.\u201D HTML-Academy.",github:"#",live:"https://rolling-scopes-school.github.io/bearbenjamin-JSFE2025Q3/portfolio/",figma:"https://www.figma.com/design/MKwZw6cPoWdpOCXOkrSsum/Portfolio--Copy-?t=Vxm7nDpJKsswQUmh-0"},{name:"Pair-em-Up",tags:"HTML / CSS / JavaScript",description:"\u0421\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0433\u043E\u043B\u043E\u0432\u043E\u043B\u043E\u043C\u043A\u0430 (\u0431\u0440\u0430\u0443\u0437\u0435\u0440\u043D\u0430\u044F \u0438\u0433\u0440\u0430) \u043D\u0430 \u0441\u043E\u043F\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0447\u0438\u0441\u0435\u043B. \u0412\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0430 \u0432 \u0440\u0430\u043C\u043A\u0430\u0445 \u0441\u0430\u043C\u043E\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F \u043D\u0430 Stage 1 RS-school. \u041F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0440\u0435\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u043D\u043E \u043D\u0430 \u0447\u0438\u0441\u0442\u043E\u043C JavaScript \u0441 \u0434\u0438\u043D\u0430\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u043C \u043C\u0430\u043D\u0438\u043F\u0443\u043B\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435\u043C DOM (SPA \u043D\u0430 \u201C\u0432\u0430\u043D\u0438\u043B\u0438\u201D). \u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0439 \u0438\u0433\u0440\u044B, \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043A \u0438 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0438 \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0432 localStorage.",github:"https://github.com/bearBenjamin/pair-em-up",live:"https://bearbenjamin.github.io/pair-em-up/"},{name:"Sedona",tags:"HTML / CSS ",description:"\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u043F\u043E\u0440\u0442\u0430\u043B \u0433.\u0421\u0435\u0434\u043E\u043D\u0430 \u0434\u043B\u044F \u0442\u0443\u0440\u0438\u0441\u0442\u043E\u0432. \u0412\u044B\u043F\u043E\u043B\u043D\u0435\u043D \u0432 \u0440\u0430\u043C\u043A\u0430\u0445 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F \u043D\u0430 \u043A\u0443\u0440\u0441\u0435 \u201CHTML \u0438 CSS \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u0430\u044F \u0432\u0435\u0440\u0441\u0442\u043A\u0430 \u0441\u0430\u0439\u0442\u043E\u0432\u201D HTML-Academy.",github:"https://github.com/bearBenjamin/2274609-sedona-2",live:"https://bearbenjamin.github.io/2274609-sedona-2/",figma:"https://www.figma.com/design/ojPEH63emdZbVk85VmMw8t/HTML-1---%D0%A1%D0%B5%D0%B4%D0%BE%D0%BD%D0%B0--39---Copy-?t=Vxm7nDpJKsswQUmh-0"},{name:"CV",tags:"HTML / CSS ",description:"\u041F\u0435\u0440\u0432\u044B\u0439 \u0432\u0430\u0440\u0438\u0430\u043D\u0442 \u0441\u0430\u0439\u0442\u0430-\u0432\u0438\u0437\u0438\u0442\u043A\u0438, \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D \u0432 \u0440\u0430\u043C\u043A\u0430\u0445 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F \u043D\u0430 Stage 0 RS-school",github:"https://github.com/bearBenjamin/rsschool-cv",live:"https://bearbenjamin.github.io/rsschool-cv/"}];var y=document.querySelector(".portfolio-section"),S=y.querySelector(".btn-more-projects"),m=y.querySelector(".btn-less-projects"),E=y.querySelector(".accordion"),O=y.querySelectorAll(".accordion-item"),Q=[...O].map(t=>{let e=t.querySelector(".project-name"),n=t.querySelector(".project-tags"),s=t.querySelector(".project-description"),i={name:e?e.textContent.trim():"",tags:n?n.textContent.trim():"",description:s?s.textContent.trim():""},c=t.querySelector('a[href*="github.com"]'),r=t.querySelector('a[href*="github.io"]'),d=t.querySelector('a[href*="figma.com"]');return c&&(i.github=c.getAttribute("href")),r&&(i.live=r.getAttribute("href")),d&&(i.figma=d.getAttribute("href")),i}),a=[...Q,...I],J=a.length,L=5,T=10,R=()=>{if(!S||!m||!E)return;let t=Math.min(T,J);for(let e=L;e<t;e+=1){let n=document.createElement("details");n.classList.add("accordion-item");let s=document.createElement("summary");s.classList.add("accordion-header");let i=document.createElement("span");i.classList.add("project-name"),i.dataset.i18n=`name__project__${String(e+1).padStart(2,"0")}`,i.textContent=`${String(e+1).padStart(2,"0")}. ${a[e].name}`,s.append(i);let c=document.createElement("span");c.classList.add("project-tags"),c.textContent=a[e].tags,s.append(c);let r=document.createElement("span");r.classList.add("accordion-icon"),s.append(r),n.append(s);let d=document.createElement("div");d.classList.add("accordion-content");let g=document.createElement("p");g.classList.add("project-description"),g.dataset.i18n=`project__description__${String(e+1).padStart(2,"0")}`,g.textContent=a[e].description,d.append(g);let u=document.createElement("div");if(u.classList.add("project-links"),a[e].github){let o=document.createElement("a");o.classList.add("btn-link"),o.href=a[e].github,o.target="_blank",o.rel="noopener noreferrer",o.textContent="GitHub",u.append(o)}if(a[e].live){let o=document.createElement("a");o.classList.add("btn-link"),o.href=a[e].live,o.target="_blank",o.rel="noopener noreferrer",o.textContent="Live Demo",u.append(o)}if(a[e].figma){let o=document.createElement("a");o.classList.add("btn-link"),o.href=a[e].figma,o.target="_blank",o.rel="noopener noreferrer",o.textContent="Figma",u.append(o)}d.append(u),n.append(d),E.append(n)}};S.addEventListener("click",()=>{R(),L+=5,T+=5,L>=J&&(S.disabled=!0),m.classList.remove("visually-hidden"),m.classList.add("is-visible")});m.addEventListener("click",()=>{let t=E.querySelectorAll(".accordion-item");if(t.length<=5)return;let e=t[5];e&&e.scrollIntoView({behavior:"smooth",block:"center"});for(let n=5;n<t.length;n+=1)t[n]&&t[n].remove();L=5,T=10,S.disabled=!1,m.classList.remove("is-visible"),m.classList.add("visually-hidden")});var U=document.getElementById("floppy");M();j();window.onload=f;U.addEventListener("click",P);
