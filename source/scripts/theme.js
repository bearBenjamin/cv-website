const body = document.documentElement.querySelector('body');
const btnThemeToggle = document.querySelector('.btn-theme-toggle');

if (btnThemeToggle) {
  btnThemeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
  });
}
