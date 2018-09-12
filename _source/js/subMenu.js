const buttons = document.querySelectorAll('.buttons');
const dropDown = document.querySelectorAll('.buttons__second-level');
console.log(dropDown);

function showMenu(e) {
    dropDown.setAttribute('class', 'openSubmenu');
}

buttons.forEach(button => button.addEventListener('click', showMenu));
