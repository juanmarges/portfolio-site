// DOM Select Items
const menuBtn = document.querySelector('.menu-btn')
const menu = document.querySelector('.menu')
const menuBranding = document.querySelector('.menu-branding')
const menuNav = document.querySelector('.menu-nav')
const navItems = document.querySelectorAll('.nav-item')
const body = document.querySelector('body')

// Init state
let showMenu = false
const toggleMenu = () => {
    
    menuBtn.classList.toggle('close');
    menu.classList.toggle('show');
    menuBranding.classList.toggle('show');
    menuNav.classList.toggle('show');
    navItems.forEach(item => item.classList.toggle('show'));
    body.classList.toggle('fixed');

    showMenu = !showMenu
}

menuBtn.addEventListener('click', toggleMenu)