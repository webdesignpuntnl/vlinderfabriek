const subMenu = document.querySelector('.buttons__second-level');
const subMenuActive = document.querySelector('.buttons__second-level__active');
const buttons = document.querySelector('.buttons'); 
const currentDocument = document.body;
let showMenu;
let test = 272;

if (subMenu && !subMenuActive) {
  subMenu.classList.add('closeSubmenu');
  subMenu.style.display = 'none';
  subMenu.style.display = 'block';
  
  showMenu = setTimeout(() => {
    subMenu.classList.add('openSubmenu');
    subMenu.classList.remove('closeSubmenu');
    
    
    let countDown = setInterval(() => {
      if (test <=272) {
        test--;
        buttons.style.top = `${test}px`; // moet van 272 naar 209
        if (test === 207) {
          clearInterval(countDown);
        }
      }
    }, 5);
  }, 50);
}

function dropButtons() {
  let windowSize = document.body.clientWidth;
  if (windowSize >= 1080) {
    buttons.style.top = `${test}px`;
  } 
}


dropButtons();

window.addEventListener('resize', dropButtons);
