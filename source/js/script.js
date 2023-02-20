/* Menu */

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

/* Slider */

const slider = document.querySelector('.example__slider-wrapper');
const before = document.querySelector('.example__slider--before');
const after = document.querySelector('.example__slider--after');
const range = document.querySelector('.example__button');

let isActive = false;

const getShift = (xCoordinate) => {
  const shift = Math.max(0, Math.min(xCoordinate, slider.offsetWidth));
  range.style.left = `${shift}px`;
  before.style.clipPath = `polygon(0 0, ${shift}px 0, ${shift}px 100%, 0% 100%)`;
  after.style.clipPath = `polygon(${shift}px 0, 100% 0, 100% 100%, ${shift}px 100%)`;
}

const resizeImagesByMouseMove = (evt) => {
  if (!isActive) {
    return;
  }
  let xCoordinate = evt.pageX - slider.getBoundingClientRect().left;
  getShift(xCoordinate);
};

const resizeImagesByTouch = (evt) => {
  if (!isActive) {
    return;
}
  let xCoordinate;
  for (let i = 0; i < evt.changedTouches.length; i++) {
    xCoordinate = evt.changedTouches[i].pageX;
  }

  xCoordinate -= slider.getBoundingClientRect().left;
  getShift(xCoordinate);
}

range.addEventListener('mousedown', (evt) => {
  evt.preventDefault();
  isActive = true;
});
range.addEventListener('touchstart', (evt) => {
  evt.preventDefault();
  isActive = true;
});

before.addEventListener('mousemove', (evt) => {
  evt.preventDefault();
});
after.addEventListener('mousemove', (evt) => {
  evt.preventDefault();
});

document.addEventListener('mouseup', () => isActive = false);
document.addEventListener('mouseleave', () => isActive = false);

document.addEventListener('touchend', () => isActive = false);
document.addEventListener('touchcancel', () => isActive = false);

slider.addEventListener('mousemove', (evt) => resizeImagesByMouseMove(evt));
slider.addEventListener('touchmove', (evt) => resizeImagesByTouch(evt));
