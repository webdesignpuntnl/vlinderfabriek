/* eslint-disable */

require('../images/vlinder-groen.png');
require('../images/vlinder-oranje.png');
require('../images/vlinder-rood.png');
require('../images/vlinder-blauw.png');
require('../images/logo-facebook-state.svg');

window.onload = function load() {
  const imgPad = '../images/'; // set the path where the images are located
  const imgPadRoot = 'images/'; // set the path where the images are located
  const imagePreloadList = [];
  const rootPage = document.querySelector('#index');

  const preloadImages = [
    'vlinder-blauw.png',
    'vlinder-groen.png',
    'vlinder-oranje.png',
    'vlinder-rood.png',
    'fabriek-oranje.svg',
    'fabriek-groen.svg',
    'fabriek-rood.svg',
    'logo-facebook-normal.svg',
    'logo-facebook-state.svg',
  ];

  // preload the butterflys
  preloadImages.map((images, i) => {
    if (!rootPage) {
      imagePreloadList[i] = new Image();
      imagePreloadList[i].src = imgPad + preloadImages[i];
    } else {
      imagePreloadList[i] = new Image();
      imagePreloadList[i].src = imgPadRoot + preloadImages[i];
    }
  });
};
