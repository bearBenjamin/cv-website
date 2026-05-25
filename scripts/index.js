var p=document.documentElement.querySelector("body"),a=document.querySelector(".header-list"),i=document.querySelector(".btn-header-burger"),f=document.querySelector(".btn-header-burger-text"),h=()=>{p.classList.remove("no-scroll"),a.classList.remove("menu-open"),i.classList.remove("btn-header-burger-close"),f.textContent="\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043C\u0435\u043D\u044E"},k=()=>{p.classList.add("no-scroll"),a.classList.add("menu-open"),i.classList.add("btn-header-burger-close"),f.textContent="\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u043C\u0435\u043D\u044E"},S=()=>{a&&a.addEventListener("click",e=>{e.target.classList.contains("header-link")&&h()})},y=()=>{i&&(i.addEventListener("click",()=>{i.classList.contains("btn-header-burger-close")?h():k()}),S())};var u=document.querySelector(".quote-section"),M=()=>{let e=u.querySelector(".quote-text"),t=u.querySelector(".quote-author");if(!e)return;let n=e.textContent.trim();e.textContent="";let s=n.split("");s.forEach((g,q)=>{let r=document.createElement("span");g===" "?r.innerHTML="&nbsp;":r.textContent=g,r.classList.add("quote-letter"),r.style.animationDelay=`${q*30}ms`,e.appendChild(r)}),setTimeout(()=>{t&&t.classList.add("is-visible")},s.length*30)},b=()=>{new IntersectionObserver((t,n)=>{t.forEach(s=>{s.isIntersecting&&(M(),n.unobserve(s.target))})},{threshold:.3}).observe(u)};var v=[`Task: Unpacking Arguments
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
console.log('Ready.');`],o=document.getElementById("code-box"),d=document.getElementById("screen"),m=0,c=0,x;function L(){let e=d.clientHeight-20,t=o.scrollHeight,n=Math.floor(t-e);o.style.transform=n>0?`translateY(-${n}px)`:"translateY(0px)"}function l(){let e=v[m];if(c<e.length){let t=e.substring(0,c);o.innerHTML=`${t}<span class="cursor"></span>`,requestAnimationFrame(L),c++;let n=Math.random()*40+20;x=setTimeout(l,n)}else o.innerHTML=`${e}<span class="cursor"></span>`,requestAnimationFrame(L)}function T(){clearTimeout(x),d.classList.add("reboot"),o.style.opacity="0",setTimeout(()=>{o.innerHTML="",o.style.transform="translateY(0px)",c=0,m=(m+1)%v.length,d.classList.remove("reboot"),o.style.opacity="1",l()},400)}var E=document.getElementById("floppy");y();b();window.onload=l;E.addEventListener("click",T);
