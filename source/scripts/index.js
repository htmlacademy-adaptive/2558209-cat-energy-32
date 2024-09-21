// eslint-disable-next-line check-file/folder-naming-convention
const buttonMenu = document.querySelector('.button-burger');
const menu = document.querySelector('.nav');

buttonMenu.classList.remove('button-burger--close');
menu.classList.remove('nav--open-nojs');

buttonMenu.addEventListener('click', () => {
  buttonMenu.classList.toggle('button-burger--close');
  menu.classList.toggle('nav--open');
});
