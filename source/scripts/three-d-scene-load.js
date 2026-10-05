const initAsyncStyles = () => {
  const prefersReduceMotion = window.matchMedia('(prefers-reduced-motion: reduce').matches;

  if (prefersReduceMotion) {
    return;
  }

  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'styles/3d-scene.css';

  document.head.appendChild(link);
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAsyncStyles);
} else {
  initAsyncStyles();
}
