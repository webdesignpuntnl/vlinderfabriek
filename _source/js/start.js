import 'jquery';

window.onload = function load() {

  
  const butterflys = Array.from(document.querySelectorAll('.butterflys img'));

  const imgPad = '../media/images/'; // set the path where the images are located
  const imagePreloadList = [];

  const preloadImages = ['vlinder-blauw.png', 'vlinder-groen.png', 'vlinder-oranje.png', 'vlinder-rood.png'];

  // preload the butterflys
  for (let i = 0; i < preloadImages.length; i += 1) { //! arrowfunctie van maken
    imagePreloadList[i] = new Image();
    imagePreloadList[i].src = imgPad + preloadImages[i];
  }


  // change the image on hover
  function swapImage(e) {
    const oldImageSource = this.src;
    if (e.type === 'mouseover') {
      const newImageSource = oldImageSource.replace('-outline', '');
      this.src = newImageSource;
    } else {
      const newImageSource = oldImageSource.replace('.png', '-outline.png');
      this.src = newImageSource;
    }
  }

  // eventlistener hover on butterfly's
  butterflys.forEach(butterFly => butterFly.addEventListener('mouseover', swapImage));
  butterflys.forEach(butterFly => butterFly.addEventListener('mouseout', swapImage));
};
