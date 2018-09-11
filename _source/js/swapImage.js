// change the image on hover
const butterflysListItem = Array.from(
  document.querySelectorAll('.butterflys li'));

//! when the mouse enters the li the image swaps but not the link
function swapButterfly(e) {
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


const facebookLogo = document.querySelector('.footer__link__facebookLogo');
const oldFacebookLogosource = facebookLogo.src;

function swapFacebookLogo(e) {
  if (e.type === 'mouseover') {
    const newImageSource = oldFacebookLogosource.replace('-normal', '-state');
    facebookLogo.src = newImageSource;
  } else {
    const newImageSource = oldFacebookLogosource.replace('-state', '-normal');
    facebookLogo.src = newImageSource;
  }
}

// eventlisteners
butterflysListItem.forEach(link =>
  link.addEventListener('mouseover', swapButterfly));
butterflysListItem.forEach(link =>
  link.addEventListener('mouseout', swapButterfly));

facebookLogo.addEventListener('mouseover', swapFacebookLogo);
facebookLogo.addEventListener('mouseout', swapFacebookLogo);
