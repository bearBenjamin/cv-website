const certificateSection = document.querySelector('.certificate-section');
const activePhoto = certificateSection.querySelector('.active-photo');
const certificateList = certificateSection.querySelector('.certificate-list');
const certificatePictures = Array.from(certificateSection.querySelectorAll('.certificate-link'));

const btnPrev = certificateSection.querySelector('.slider-btn-prev');
const btnNext = certificateSection.querySelector('.slider-btn-next');

let currentIndex = 0;

const setActiveSlide = (index) => {
  currentIndex = index;

  activePhoto.src = certificatePictures[currentIndex].href;

  certificatePictures.forEach((item, i) => {
    const isCurrent = i === currentIndex;
    item.classList.toggle('current', isCurrent);

    if (isCurrent) {
      item.scrollIntoView({
        behavior: 'smooth', // Плавная анимация скролла
        block: 'nearest', // Предотвращает прыжки всей страницы вверх/вниз
        inline: 'nearest' // Сдвигает ленту, только если карточка скрылась за краем
      });
    }
  });

  btnPrev.disabled = currentIndex === 0;
  btnNext.disabled = currentIndex === certificatePictures.length - 1;
};

btnPrev.addEventListener('click', () => {
  if (currentIndex > 0) {
    setActiveSlide(currentIndex - 1);
  }
});

btnNext.addEventListener('click', () => {
  if (currentIndex < certificatePictures.length - 1) {
    setActiveSlide(currentIndex + 1);
  }
});

certificateList.addEventListener('click', (evt) => {
  const targetLink = evt.target.closest('.certificate-link');

  if (!targetLink) {
    return;
  }

  evt.preventDefault();

  const targetIndex = certificatePictures.indexOf(targetLink);

  if (targetIndex !== -1) {
    setActiveSlide(targetIndex);
  }
});

setActiveSlide(currentIndex);
