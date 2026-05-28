import { initMenu } from './burger-menu.js';
import './theme.js';
import { initAnimatedQuote } from './quote.js';
import { typeCode, changeDisk } from './mac-terminal.js';
import { showMore } from './project-loading.js';

const floppy = document.getElementById('floppy');
const btnMore = document.querySelector('.btn-more-projects');

initMenu();
initAnimatedQuote();

window.onload = typeCode;
floppy.addEventListener('click', changeDisk);

btnMore.addEventListener('click', showMore);
