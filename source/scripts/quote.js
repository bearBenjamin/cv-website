const quoteTarget = document.querySelector('.quote-section');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

const startAnimation = () => {
  const quoteTextElem = quoteTarget.querySelector('.quote-text');
  const quoteAuthorElem = quoteTarget.querySelector('.quote-author');

  if (!quoteTextElem) {
    return;
  }

  if (reducedMotion.matches) {
    quoteTextElem.style.visibility = '';
    if (quoteAuthorElem) {
      quoteAuthorElem.classList.add('is-visible');
    }
    return;
  }

  const originalText = quoteTextElem.textContent.trim();
  quoteTextElem.textContent = ''; // Очищаем голый текст

  const letters = originalText.split('');

  letters.forEach((char, index) => {
    const span = document.createElement('span');

    if (char === ' ') {
      span.innerHTML = '&nbsp;';
    } else {
      span.textContent = char;
    }

    span.classList.add('quote-letter');

    span.style.animationDelay = `${index * 30}ms`;

    quoteTextElem.appendChild(span);
  });

  quoteTextElem.style.visibility = '';

  // появлени автора цитаты
  setTimeout(() => {
    if (quoteAuthorElem) {
      quoteAuthorElem.classList.add('is-visible');
    }
  }, letters.length * 30);
};

const initAnimatedQuote = () => {
  if (!quoteTarget) {
    return;
  }

  const quoteTextElem = quoteTarget.querySelector('.quote-text');

  if (quoteTextElem) {
    quoteTextElem.style.visibility = 'hidden';
  }

  const viewportH = window.innerHeight || document.documentElement.clientHeight;
  const threshold = quoteTarget.offsetHeight >= viewportH ? 0.8 : 1;

  const observer = new IntersectionObserver((entries, observerInstance) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        startAnimation();
        observerInstance.unobserve(entry.target);
      }
    });
  }, { threshold });

  observer.observe(quoteTarget);
};

export { initAnimatedQuote };
