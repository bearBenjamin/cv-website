var l=[`Task: Unpacking Arguments
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

	while(data.length){
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
console.log('Ready.');`],e=document.getElementById("code-box"),r=document.getElementById("screen"),a=0,s=0,c;function i(){let n=r.clientHeight-20,o=e.scrollHeight,t=Math.floor(o-n);e.style.transform=t>0?`translateY(-${t}px)`:"translateY(0px)"}function u(){let n=l[a];if(s<n.length){let o=n.substring(0,s);e.innerHTML=`${o}<span class="cursor"></span>`,requestAnimationFrame(i),s++;let t=Math.random()*40+20;c=setTimeout(u,t)}else e.innerHTML=`${n}<span class="cursor"></span>`,requestAnimationFrame(i)}function g(){clearTimeout(c),r.classList.add("reboot"),e.style.opacity="0",setTimeout(()=>{e.innerHTML="",e.style.transform="translateY(0px)",s=0,a=(a+1)%l.length,r.classList.remove("reboot"),e.style.opacity="1",u()},400)}export{g as changeDisk,u as typeCode};
