const buttons = document.querySelectorAll('.buttons');

function changeColor(e) {
  const buttonDimensions = this.getBoundingClientRect();
  
}

buttons.forEach(button => button.addEventListener('mouseover', changeColor));
buttons.forEach(button => button.addEventListener('mouseout', changeColor));
