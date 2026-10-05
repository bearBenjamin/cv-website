import { initMenu } from './burger-menu.js';
import './theme.js';
import { initHeroParallax } from './hero.js';
import { initAnimatedQuote } from './quote.js';
import './three-d-scene-load.js';
import { typeCode, changeDisk } from './mac-terminal.js';
import { showMore, clearList } from './project-loading.js';
import './certificate-slider.js';
import { initAccordion } from './accordion.js';
// import './contact-form.js';

const floppy = document.getElementById('floppy');

const btnMore = document.querySelector('.btn-more-projects');
const btnLess = document.querySelector('.btn-less-projects');

initMenu();
initHeroParallax();
initAnimatedQuote();


// window.onload = typeCode;
document.addEventListener('DOMContentLoaded', typeCode);
floppy.addEventListener('click', changeDisk);
btnMore.addEventListener('click', showMore);
btnLess.addEventListener('click', clearList);

initAccordion();
