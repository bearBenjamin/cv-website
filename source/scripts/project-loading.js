import { additionalProjects } from './data.js';

const portfolio = document.querySelector('.portfolio-section');
const btnMore = portfolio.querySelector('.btn-more-projects');
const btnLess = portfolio.querySelector('.btn-less-projects');
const accordion = portfolio.querySelector('.accordion');
const projects = portfolio.querySelectorAll('.accordion-item');

const parseHtmlProjects = [...projects].map((project) => {

  const nameElem = project.querySelector('.project-name');
  const tagsElem = project.querySelector('.project-tags');
  const descriptionElem = project.querySelector('.project-description');

  const projectObject = {
    name: nameElem ? nameElem.textContent.trim() : '',
    tags: tagsElem ? tagsElem.textContent.trim() : '',
    description: descriptionElem ? descriptionElem.textContent.trim() : '',
  };

  const gitHubLink = project.querySelector('a[href*="github.com"]');
  const liveLink = project.querySelector('a[href*="github.io"]');
  const figmaLink = project.querySelector('a[href*="figma.com"]');

  if (gitHubLink) {
    projectObject.github = gitHubLink.getAttribute('href');
  }

  if (liveLink) {
    projectObject.live = liveLink.getAttribute('href');
  }

  if (figmaLink) {
    projectObject.figma = figmaLink.getAttribute('href');
  }

  return projectObject;
});


const allProjects = [...parseHtmlProjects, ...additionalProjects];
const length = allProjects.length;

let indexStart = 5;
let indexEnd = 10;

const initProjectsLoader = () => {

  if (!btnMore || !btnLess || !accordion) {
    return;
  }

  const currentEnd = Math.min(indexEnd, length);

  for (let i = indexStart; i < currentEnd; i += 1) {
    const details = document.createElement('details');
    details.classList.add('accordion-item');

    const summary = document.createElement('summary');
    summary.classList.add('accordion-header');

    const spanName = document.createElement('span');
    spanName.classList.add('project-name');
    spanName.dataset.i18n = `name__project__${String(i + 1).padStart(2, '0')}`;
    spanName.textContent = `${String(i + 1).padStart(2, '0')}. ${allProjects[i].name}`;

    summary.append(spanName);

    const spanTag = document.createElement('span');
    spanTag.classList.add('project-tags');
    spanTag.textContent = allProjects[i].tags;

    summary.append(spanTag);

    const spanIcon = document.createElement('span');
    spanIcon.classList.add('accordion-icon');

    summary.append(spanIcon);
    details.append(summary);

    const divContent = document.createElement('div');
    divContent.classList.add('accordion-content');

    const description = document.createElement('p');
    description.classList.add('project-description');
    description.dataset.i18n = `project__description__${String(i + 1).padStart(2, '0')}`;
    description.textContent = allProjects[i].description;

    divContent.append(description);

    const divLink = document.createElement('div');
    divLink.classList.add('project-links');

    if (allProjects[i].github) {
      const gitLink = document.createElement('a');
      gitLink.classList.add('btn-link');
      gitLink.href = allProjects[i].github;
      gitLink.target = '_blank';
      gitLink.rel = 'noopener noreferrer';
      gitLink.textContent = 'GitHub';

      divLink.append(gitLink);
    }

    if(allProjects[i].live) {
      const liveLink = document.createElement('a');
      liveLink.classList.add('btn-link');
      liveLink.href = allProjects[i].live;
      liveLink.target = '_blank';
      liveLink.rel = 'noopener noreferrer';
      liveLink.textContent = 'Live Demo';

      divLink.append(liveLink);
    }

    if(allProjects[i].figma) {
      const figmaLink = document.createElement('a');
      figmaLink.classList.add('btn-link');
      figmaLink.href = allProjects[i].figma;
      figmaLink.target = '_blank';
      figmaLink.rel = 'noopener noreferrer';
      figmaLink.textContent = 'Figma';

      divLink.append(figmaLink);
    }

    divContent.append(divLink);
    details.append(divContent);
    accordion.append(details);
  }
};

const showMore = () => {
  initProjectsLoader();
  indexStart += 5;
  indexEnd += 5;

  if(indexStart >= length) {
    btnMore.disabled = true;
  }

  btnLess.classList.remove('visually-hidden');
  btnLess.classList.add('is-visible');
};

const onScrollEnd = (projectList) => {
  for (let i = 5; i < projectList.length; i += 1) {
    if (projectList[i]) {
      projectList[i].remove();
    }
  }

  indexStart = 5;
  indexEnd = 10;

  btnMore.disabled = false;

  btnLess.classList.remove('is-visible');
  btnLess.classList.add('visually-hidden');
};


const clearList = () => {
  const allCurrentItems = accordion.querySelectorAll('.accordion-item');

  if (allCurrentItems.length <= 5) {
    return;
  }

  const lastStaticItem = allCurrentItems[4];

  if (lastStaticItem) {
    lastStaticItem.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }

  window.addEventListener('scrollend', () => {
    onScrollEnd(allCurrentItems);
  }, { once: true });
};

export { showMore, clearList };
