const diskFiles = [
  `Task: Unpacking Arguments
programming language: JavaScript

function
spread(func, args) {
  return func(...args);
}`,

  `Task: Is a number prime?
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
}`,

  `Task: Data Reverse
programming language: JavaScript

function
dataReverse(data) {
  const result = [];

	while(data.length){
		result.push(...data.splice(-8))
	}

	return result;
}`,

  `Task: String ends with?
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
}`,

  `// System 1.0 Terminal
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
console.log('Ready.');`,
];

const codeBox = document.getElementById('code-box');
const screen = document.getElementById('screen');

let currentDisk = 0;
let charIndex = 0;
let typingTimeout;

function updateScrollPosition() {
  const visibleHeight = screen.clientHeight - 20;
  const totalTextHeight = codeBox.scrollHeight;
  const diff = Math.floor(totalTextHeight - visibleHeight);

  codeBox.style.transform = diff > 0
    ? `translateY(-${diff}px)`
    : 'translateY(0px)';
}

function typeCode() {
  const text = diskFiles[currentDisk];

  if (charIndex < text.length) {
    const currentChunk = text.substring(0, charIndex);
    codeBox.innerHTML = `${currentChunk}<span class="cursor"></span>`;

    requestAnimationFrame(updateScrollPosition);

    charIndex++;
    const randomSpeed = Math.random() * (60 - 20) + 20;
    typingTimeout = setTimeout(typeCode, randomSpeed);
  } else {
    codeBox.innerHTML = `${text}<span class="cursor"></span>`;
    requestAnimationFrame(updateScrollPosition);
  }
}

function changeDisk() {
  clearTimeout(typingTimeout);
  screen.classList.add('reboot');
  codeBox.style.opacity = '0';

  setTimeout(() => {
    codeBox.innerHTML = '';
    codeBox.style.transform = 'translateY(0px)';

    charIndex = 0;
    currentDisk = (currentDisk + 1) % diskFiles.length;

    screen.classList.remove('reboot');
    codeBox.style.opacity = '1';
    typeCode();
  }, 400);
}

export { typeCode, changeDisk };
