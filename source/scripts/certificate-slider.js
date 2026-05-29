const certificateSection = document.querySelector('.certificate-section');
const activePhoto = certificateSection.querySelector('.active-photo');
const certificateList = certificateSection.querySelector('.certificate-list');
const certificatePhotos = Array.from(certificateSection.querySelectorAll('.certificate-img'));

const btnPrev = certificateSection.querySelector('.slider-btn-prev');
const btnNext = certificateSection.querySelector('.slider-btn-next');

let currentIndex = 0;

const setActiveSlide = (index, shouldMoveList = false) => {
  currentIndex = index;

  activePhoto.src = certificatePhotos[currentIndex].src;
  activePhoto.srcset = certificatePhotos[currentIndex].srcset;

  certificatePhotos.forEach((item, i) => {
    const isCurrent = i === currentIndex;
    item.classList.toggle('current', isCurrent);
  });

  if (shouldMoveList) {
    const container = certificateSection.querySelector('.certificate-list-container');
    const firstItem = certificateList.querySelector('.certificate-item');

    if (container && firstItem) {
      const itemWidth = firstItem.clientWidth;
      const gap = parseFloat(getComputedStyle(certificateList).gap) || 20;

      let translateX = currentIndex * (itemWidth + gap);

      const maxScroll = certificateList.scrollWidth - container.clientWidth;

      if (translateX > maxScroll) {
        translateX = maxScroll;
      }

      certificateList.style.transform = `translateX(-${translateX}px)`;
    }
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

setActiveSlide(currentIndex);

window.addEventListener('resize', () => {
  setActiveSlide(currentIndex, true);
});
