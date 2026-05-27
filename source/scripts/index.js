import { initMenu } from './burger-menu.js';
import './theme.js';
import { initAnimatedQuote } from './quote.js';
import { typeCode, changeDisk } from './mac-terminal.js';
import './project-loading.js';

const floppy = document.getElementById('floppy');

initMenu();
initAnimatedQuote();

window.onload = typeCode;
floppy.addEventListener('click', changeDisk);
