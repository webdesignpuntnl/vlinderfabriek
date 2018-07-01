// change the image on hover
const butterflysListItem = Array.from(document.querySelectorAll('.butterflys li'));

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