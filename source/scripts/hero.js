const heroWrapper = document.querySelector('.hero-wrapper');
const heroFadeLayer = document.querySelector('.hero-fade-layer');

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (heroWrapper && heroFadeLayer && !prefersReducedMotion) {
  let heroHeight = window.innerHeight;

  let resizeTimer = null;

  const update = () => {
    const scrollTop = window.scrollY;
    if (scrollTop <= heroHeight) {
      const progress = scrollTop / heroHeight;
      heroFadeLayer.style.opacity = progress.toFixed(3);
      const yOffset = Math.round(scrollTop * 0.5);
      heroWrapper.style.transform = `translate3d(0, ${yOffset}px, 0)`;
    }
  };

  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      heroHeight = window.innerHeight;
      update();
    }, 100);
  });


  window.addEventListener('scroll', update, { passive: true });
  update();
}
