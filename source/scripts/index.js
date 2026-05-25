import { initMenu } from './burger-menu.js';
import { initAnimatedQuote } from './animated-quote.js';
import { typeCode, changeDisk } from './code-animation.js';

const floppy = document.getElementById('floppy');

initMenu();
initAnimatedQuote();

window.onload = typeCode;
floppy.addEventListener('click', changeDisk);
