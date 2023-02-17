const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--no-js');

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('main-nav--opened')) {
    navMain.classList.remove('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--opened');
  }
});
