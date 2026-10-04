const PARAMS = {
  speed: 0.5,
  resizeDelay: 100,
};

const heroWrapper = document.querySelector('.hero-wrapper');
const heroFadeLayer = document.querySelector('.hero-fade-layer');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Храню высоту, которая будет обновляться при ресайзе
let heroHeight = window.innerHeight;
let resizeTimer = null;

// функция отрисовки кадра
const updateHeroParallax = () => {
  const scrollTop = window.scrollY;

  // Оптимизация: считаю математику только пока hero виден на экране
  if (scrollTop > heroHeight) {
    return;
  }

  const progress = scrollTop / heroHeight;
  heroFadeLayer.style.opacity = progress.toFixed(3);

  const yOffset = Math.round(scrollTop * PARAMS.speed);
  heroWrapper.style.transform = `translate3d(0, ${yOffset}px, 0)`;
};

// Обработчик изменения размеров окна (Debounce)
const handleResize = () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    heroHeight = window.offsetHeight;
    updateHeroParallax();
  }, PARAMS.resizeDelay);
};

const initHeroParallax = () => {
  if (!heroWrapper || !heroFadeLayer || prefersReducedMotion) {
    return;
  }

  window.addEventListener('resize', handleResize);
  window.addEventListener('scroll', updateHeroParallax, { passive: true });

  // Первичный запуск, чтобы установить верные координаты при загрузке страницы
  updateHeroParallax();
};

export { initHeroParallax };
