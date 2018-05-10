import './test.js';

window.onload = function load() {
  const hamburgerMenu = document.getElementById('hamburgerIcon');
  hamburgerMenu.addEventListener('click', () => {
    console.log('klikken op het hamburgermenu werkt nu');
  });
};
