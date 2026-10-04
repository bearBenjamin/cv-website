const ANIM_KEY = 'quote-animated';

const quoteTarget = document.querySelector('.quote-section');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

// защита от падения, в режиме инкогнито или при блокировку куки - браузеры выбрасывают критическую ошибку при попытке вызвать sessionStorage.setItem обертка в try catch позволяет работать дальше
const storage = {
  get(key) {
    try {
      return sessionStorage.getItem(key);
    } catch {
      return null;
    }
  },
  set(key, value) {
    try {
      sessionStorage.setItem(key, value);
    } catch { /* приватный режим */ }
  },
};

const revealInstantly = (textElem, authorElem) => {
  if (textElem) {
    textElem.style.visibility = '';
  }
  if (authorElem) {
    authorElem.style.transition = 'none';
    authorElem.classList.add('is-visible');
  }
};

const startAnimation = (textElem, authorElem) => {
  storage.set(ANIM_KEY, '1');

  if (!textElem) {
    return;
  }

  if (reducedMotion.matches) {
    textElem.style.visibility = '';
    if (authorElem) {
      authorElem.classList.add('is-visible');
    }
    return;
  }

  const originalText = textElem.textContent.trim();
  textElem.textContent = ''; // Очищаем голый текст

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

    textElem.appendChild(span);
  });

  textElem.style.visibility = '';

  // появлени автора цитаты
  setTimeout(() => {
    if (authorElem) {
      authorElem.classList.add('is-visible');
    }
  }, letters.length * 30);
};

const initAnimatedQuote = () => {
  if (!quoteTarget) {
    return;
  }

  const quoteTextElem = quoteTarget.querySelector('.quote-text');
  const quoteAuthorElem = quoteTarget.querySelector('.quote-author');

  if (storage.get(ANIM_KEY) === '1') {
    revealInstantly(quoteTextElem, quoteAuthorElem);
    return;
  }

  if (quoteTarget.getBoundingClientRect().top <= 0) {
    revealInstantly(quoteTextElem, quoteAuthorElem);
    return;
  }

  if (quoteTextElem) {
    quoteTextElem.style.visibility = 'hidden';
  }

  const viewportH = window.innerHeight || document.documentElement.clientHeight;
  const threshold = quoteTarget.offsetHeight >= viewportH ? 0.8 : 1;

  const observer = new IntersectionObserver((entries, observerInstance) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        startAnimation(quoteTextElem, quoteAuthorElem);
        observerInstance.unobserve(entry.target);
      }
    });
  }, { threshold });

  observer.observe(quoteTarget);
};

export { initAnimatedQuote };
