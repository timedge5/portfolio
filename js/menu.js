//declaring variables to select DOM items in the HTML - using const as these are going to be constants
const menubtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const close = document.querySelector('.close-btn');
const navitems = document.querySelectorAll('.nav-item');

let showMenu = false;

menubtn.addEventListener('click', toggleMenu);
close.addEventListener('click', toggleMenu);

for(i = 0; i < navitems.length; i++) {
  result = navitems[i];
  result.addEventListener('click', toggleMenu);
}

function toggleMenu() {
  if (!showMenu) {
    menubtn.classList.add('hide');
    menu.classList.add('show');
    close.classList.add('show');

    showMenu = true;
  } else {
    menubtn.classList.remove('hide');
    menu.classList.remove('show');
    close.classList.remove('show');
    
    showMenu = false;
  }
}