import { additionalCertificates } from './data.js';
const GAP = 20;

const certificateSection = document.querySelector('.certificate-section');
const activePhoto = certificateSection.querySelector('.active-photo');
const listContainer = certificateSection.querySelector('.certificate-list-container');
const certificateList = certificateSection.querySelector('.certificate-list');

const btnPrev = certificateSection.querySelector('.slider-btn-prev');
const btnNext = certificateSection.querySelector('.slider-btn-next');

let currentIndex = 0;

const createNewCertificateItem = ({ name, alt }) => {
  const item = document.createElement('li');
  item.classList.add('certificate-item');

  const img = document.createElement('img');
  img.classList.add('certificate-img');
  img.src = `./images/certificate/${name}@1x.webp`;
  img.srcset = `./images/certificate/${name}@2x.webp`;
  img.width = 240;
  img.height = 320;
  img.alt = alt;
  img.loading = 'lazy';

  item.appendChild(img);

  return item;
};

const renderAdditionalCertificates = () => {
  const items = additionalCertificates.map(createNewCertificateItem);
  certificateList.append(...items);
};

renderAdditionalCertificates();

const certificatePhotos = Array.from(certificateSection.querySelectorAll('.certificate-img'));

const updateGridPosition = () => {
  const firstItem = certificateList.querySelector('.certificate-item');

  if (!firstItem || !listContainer) {
    return;
  }

  const itemHeight = firstItem.offsetHeight; // высота первой карточки
  const rowGap = parseFloat(getComputedStyle(certificateList).rowGap) || GAP; // отступ между рядами
  const rowStep = itemHeight + rowGap; // высота одного ряда с отступом между рядами

  listContainer.style.maxHeight = `${itemHeight * 2 + rowGap}px`; // высота видимой части контейнера с карточками - 2 ряда с отступом между ними

  const currentRow = Math.floor(currentIndex / 2); // текущий ряд в котором выбрана карточка
  const totalRows = Math.ceil(certificatePhotos.lenght / 2); // всего рядов

  // сдвигаю список вверх начиная со второго ряда
  let targetRowOffset = Math.max(0, currentRow - 1);
  const maxRowOffset = Math.max(0, totalRows - 2);

  if (targetRowOffset > maxRowOffset) {
    targetRowOffset = maxRowOffset;
  }

  certificateList.style.transform = `translateY(-${targetRowOffset * rowStep}px)`;
};

const setActiveSlide = (index, shouldMoveList = false) => {
  currentIndex = index;

  const targetImg = certificatePhotos[currentIndex];

  activePhoto.src = targetImg.src;
  activePhoto.srcset = targetImg.srcset;
  activePhoto.alt = targetImg.alt;

  certificatePhotos.forEach((item, i) => {
    const isCurrent = i === currentIndex;
    item.classList.toggle('current', isCurrent);
  });

  if (shouldMoveList) {
    updateGridPosition();
  }

  btnPrev.disabled = currentIndex === 0;
  btnNext.disabled = currentIndex === certificatePhotos.length - 1;
};

btnPrev.addEventListener('click', () => {
  if (currentIndex > 0) {
    setActiveSlide(currentIndex - 1, true);
  }
});

btnNext.addEventListener('click', () => {
  if (currentIndex < certificatePhotos.length - 1) {
    setActiveSlide(currentIndex + 1, true);
  }
});

certificateList.addEventListener('click', (evt) => {
  const targetImg = evt.target.closest('.certificate-img');

  if (!targetImg) {
    return;
  }

  evt.preventDefault();

  const targetIndex = certificatePhotos.indexOf(targetImg);

  if (targetIndex !== -1) {
    setActiveSlide(targetIndex);
  }
});

if (certificatePhotos.length > 0) {
  setActiveSlide(currentIndex, true);
}


window.addEventListener('resize', () => {
  // setActiveSlide(currentIndex, true);
  updateGridPosition();
});
