const body = document.documentElement.querySelector('body');
const menuNav = document.querySelector('.header-list');
const btnBurger = document.querySelector('.btn-header-burger');
const btnBurgerText = document.querySelector('.btn-header-burger-text');

// const preventScrollBehavior = (event) => {
//   event.preventDefault();
// };

const closeMenu = () => {
  // window.removeEventListener('wheel', preventScrollBehavior, { passive: false });
  // window.removeEventListener('touchmove', preventScrollBehavior, { passive: false });

  body.classList.remove('no-scroll');
  menuNav.classList.remove('menu-open');
  btnBurger.classList.remove('btn-header-burger-close');
  btnBurgerText.textContent = 'Открыть меню';
};

const openMenu = () => {
  // добавил для блокировки прокрутки страницы под открытым бургер меню два обработчика на глобальное окно, по другому победить Firefox не получилось
  // window.addEventListener('wheel', preventScrollBehavior, { passive: false });
  // window.addEventListener('touchmove', preventScrollBehavior, { passive: false });

  body.classList.add('no-scroll');
  menuNav.classList.add('menu-open');
  btnBurger.classList.add('btn-header-burger-close');
  btnBurgerText.textContent = 'Закрыть меню';
};

const initNavigation = () => {
  if (!menuNav) {
    return;
  }

  menuNav.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('header-link')) {
      closeMenu();
    }
  });
};

const initMenu = () => {
  if (!btnBurger) {
    return;
  }

  btnBurger.addEventListener('click', () => {
    if (!btnBurger.classList.contains('btn-header-burger-close')) {
      openMenu();
    } else {
      closeMenu();
    }
  });

  initNavigation();
};

export { initMenu };
