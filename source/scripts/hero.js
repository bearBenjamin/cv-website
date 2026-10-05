const PARAMS = {
  speed: 0.5,
};

const heroTarget = document.querySelector('.hero');
const heroWrapper = heroTarget.querySelector('.hero-wrapper');
const heroFadeLayer = heroTarget.querySelector('.hero-fade-layer');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// функция отрисовки кадра
const updateHeroParallax = () => {
  const scrollTop = window.scrollY;

  const currentHeroHeight = heroTarget.offsetHeight;

  // Оптимизация: считаю математику только пока hero виден на экране
  if (scrollTop > currentHeroHeight) {
    return;
  }

  const progress = scrollTop / currentHeroHeight;
  heroFadeLayer.style.opacity = progress.toFixed(3);

  const yOffset = Math.round(scrollTop * PARAMS.speed);
  heroWrapper.style.transform = `translate3d(0, ${yOffset}px, 0)`;
};

const initHeroParallax = () => {
  if (!heroTarget || !heroWrapper || !heroFadeLayer || prefersReducedMotion) {
    return;
  }

  window.addEventListener('scroll', updateHeroParallax, { passive: true });

  // Первичный запуск, чтобы установить верные координаты при загрузке страницы
  updateHeroParallax();
};

export { initHeroParallax };
