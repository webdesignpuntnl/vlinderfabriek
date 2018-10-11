const subMenu = document.querySelector('.buttons__second-level');
const subMenuActive = document.querySelector('.buttons__second-level__active');
const buttons = document.querySelector('.buttons');

let buttonTop = 272;

function moveButtons() {
  if (subMenu && !subMenuActive) {
    let countDown = setInterval(() => {
      if (buttonTop <= 272) {
        buttonTop--;
        buttons.style.top = `${buttonTop}px`; // moet van 272 naar 209
        if (buttonTop === 207) {
          clearInterval(countDown);
        }
      }
    }, 10);
  }
}

function showSubmenu() {
  if (!subMenuShow) {
    subMenu.classList.add('closeSubmenu');
    subMenuShow = false;
  } else {
    subMenu.classList.remove('closeSubmenu');
    subMenuShow = true;
  }
}

moveButtons();

buttons.addEventListener('click', showSubmenu);
