import { initMenu } from './burger-menu.js';
import './theme.js';
import { initAnimatedQuote } from './quote.js';
import { typeCode, changeDisk } from './mac-terminal.js';
import { showMore, clearList } from './project-loading.js';
import './certificate-slider.js';

const floppy = document.getElementById('floppy');

const btnMore = document.querySelector('.btn-more-projects');
const btnLess = document.querySelector('.btn-less-projects');

initMenu();
initAnimatedQuote();

window.onload = typeCode;
floppy.addEventListener('click', changeDisk);

btnMore.addEventListener('click', showMore);
btnLess.addEventListener('click', clearList);
