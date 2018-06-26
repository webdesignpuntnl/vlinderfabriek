
import '../js/cookieBar';

window.onload = function load() {
  const butterflysListItem = Array.from(document.querySelectorAll('.butterflys li'));

  const imgPad = '../media/images/'; // set the path where the images are located
  const imagePreloadList = [];

  const preloadImages = [
    'vlinder-blauw.png',
    'vlinder-groen.png',
    'vlinder-oranje.png',
    'vlinder-rood.png',
    'fabriek-oranje.svg',
    'fabriek-groen.svg',
    'fabriek-rood.svg'];

  // preload the butterflys
  preloadImages.map((images, i) => {
    imagePreloadList[i] = new Image();
    imagePreloadList[i].src = imgPad + preloadImages[i];
  });


  // change the image on hover
  function swapImage(e) {
    const butterfly = this.querySelector('img');
    const link = this.querySelector('a');
    const oldImageSource = butterfly.src;
    if (!link.hasAttribute('class')) {
      if (e.type === 'mouseover') {
        const newImageSource = oldImageSource.replace('-outline', '');
        butterfly.src = newImageSource;
      } else {
        const newImageSource = oldImageSource.replace('.png', '-outline.png');
        butterfly.src = newImageSource;
      }
    }
  }

  // eventlisteners
  butterflysListItem.forEach(link => link.addEventListener('mouseover', swapImage)); // butterfly's
  butterflysListItem.forEach(link => link.addEventListener('mouseout', swapImage)); // butterfly's
};
