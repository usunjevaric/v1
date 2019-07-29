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


window.addEventListener('scroll', activeItem);
function activeItem() {
  const about = document.querySelector('#about-me').offsetTop;
  const skills = document.querySelector('#skills').offsetTop;
  const portfolio = document.querySelector('#portfolio').offsetTop;
  const contact = document.querySelector('#contact').offsetTop;
  const navItems = document.querySelectorAll('.nav-list li');
  const scroll = window.pageYOffset;
  if (scroll < about) {
    deleteClass(navItems);
    navItems[0].classList.add('nav-item-active')
  } else if (scroll > about && scroll < skills) {
    deleteClass(navItems);
    navItems[1].classList.add('nav-item-active')
  } else if (scroll > skills && scroll < portfolio) {
    deleteClass(navItems);
    navItems[2].classList.add('nav-item-active')
  } else if (scroll > portfolio && scroll < contact) {
    deleteClass(navItems);
    navItems[3].classList.add('nav-item-active')
  } else if (scroll > contact) {
    deleteClass(navItems);
    navItems[4].classList.add('nav-item-active')
  }
}

function deleteClass(navItems) {
  navItems.forEach(item => {
    if (item.classList[1] !== undefined) {
      item.classList.remove('nav-item-active');
    }
  })
}