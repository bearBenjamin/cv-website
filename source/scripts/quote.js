const quoteTarget = document.querySelector('.quote-section');

const startAnimation = () => {
  const quoteTextElem = quoteTarget.querySelector('.quote-text');
  const quoteAuthorElem = quoteTarget.querySelector('.quote-author');

  if (!quoteTextElem) {
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

  // появлени автора цитаты
  setTimeout(() => {
    if (quoteAuthorElem) {
      quoteAuthorElem.classList.add('is-visible');
    }
  }, letters.length * 30);
};

const initAnimatedQuote = () => {
  const observer = new IntersectionObserver((entries, observerInstance) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        startAnimation();
        observerInstance.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  observer.observe(quoteTarget);
};

export { initAnimatedQuote };
