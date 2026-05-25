var p=document.documentElement.querySelector("body"),c=document.querySelector(".header-list"),i=document.querySelector(".btn-header-burger"),f=document.querySelector(".btn-header-burger-text"),h=()=>{p.classList.remove("no-scroll"),c.classList.remove("menu-open"),i.classList.remove("btn-header-burger-close"),f.textContent="\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043C\u0435\u043D\u044E"},S=()=>{p.classList.add("no-scroll"),c.classList.add("menu-open"),i.classList.add("btn-header-burger-close"),f.textContent="\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u043C\u0435\u043D\u044E"},E=()=>{c&&c.addEventListener("click",e=>{e.target.classList.contains("header-link")&&h()})},y=()=>{i&&(i.addEventListener("click",()=>{i.classList.contains("btn-header-burger-close")?h():S()}),E())};var M=document.documentElement.querySelector("body"),b=document.querySelector(".btn-theme-toggle");b&&b.addEventListener("click",()=>{M.classList.toggle("dark-theme")});var u=document.querySelector(".quote-section"),C=()=>{let e=u.querySelector(".quote-text"),t=u.querySelector(".quote-author");if(!e)return;let n=e.textContent.trim();e.textContent="";let s=n.split("");s.forEach((g,k)=>{let r=document.createElement("span");g===" "?r.innerHTML="&nbsp;":r.textContent=g,r.classList.add("quote-letter"),r.style.animationDelay=`${k*30}ms`,e.appendChild(r)}),setTimeout(()=>{t&&t.classList.add("is-visible")},s.length*30)},L=()=>{new IntersectionObserver((t,n)=>{t.forEach(s=>{s.isIntersecting&&(C(),n.unobserve(s.target))})},{threshold:.3}).observe(u)};var x=[`Task: Unpacking Arguments
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
console.log('Ready.');`],o=document.getElementById("code-box"),d=document.getElementById("screen"),m=0,a=0,T;function v(){let e=d.clientHeight-20,t=o.scrollHeight,n=Math.floor(t-e);o.style.transform=n>0?`translateY(-${n}px)`:"translateY(0px)"}function l(){let e=x[m];if(a<e.length){let t=e.substring(0,a);o.innerHTML=`${t}<span class="cursor"></span>`,requestAnimationFrame(v),a++;let n=Math.random()*40+20;T=setTimeout(l,n)}else o.innerHTML=`${e}<span class="cursor"></span>`,requestAnimationFrame(v)}function q(){clearTimeout(T),d.classList.add("reboot"),o.style.opacity="0",setTimeout(()=>{o.innerHTML="",o.style.transform="translateY(0px)",a=0,m=(m+1)%x.length,d.classList.remove("reboot"),o.style.opacity="1",l()},400)}var H=document.getElementById("floppy");y();L();window.onload=l;H.addEventListener("click",q);
