window.addEventListener('scroll', changeNavigation);

function changeNavigation() {
  if (window.pageYOffset > 200) {
    document.getElementById('nav').classList.remove('navigation');
    document.getElementById('nav').classList.add('navigation-scrolled');
  } else {
    document.getElementById('nav').classList.add('navigation');
    document.getElementById('nav').classList.remove('navigation-scrolled');
  }
}

//dropdown menu on small screens
const menuBtn = document.querySelector('.collapse-btn');
const navMenu = document.querySelector('.nav-list');

let showMenu = false;
menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close')
    navMenu.classList.remove('nav-list-hide');
    navMenu.classList.add('nav-list-show');
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    navMenu.classList.remove('nav-list-show');
    navMenu.classList.add('nav-list-hide');
    showMenu = false;
  }
}


const navItems = document.querySelectorAll('.nav-item');
navItems.forEach(item => {
  item.addEventListener('click', () => {
    menuBtn.classList.remove('close');
    navMenu.classList.remove('nav-list-show');
    navMenu.classList.add('nav-list-hide');
    showMenu = false;
  })
}
);

//hover effects on work images
const work = document.querySelectorAll('.work');
work.forEach(item => {
  item.addEventListener('mouseenter', (e) => {
    e.target.children[1].classList.remove('work-desc');
    e.target.children[1].classList.add('work-desc-active');
  })
});
work.forEach(item => {
  item.addEventListener('mouseleave', (e) => {
    e.target.children[1].classList.remove('work-desc-active');
    e.target.children[1].classList.add('work-desc');

  })
})