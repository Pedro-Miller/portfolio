// DOM getters
const themeToggle = document.querySelectorAll(".index-theme-toggle")
const moon = document.querySelectorAll('.index-moon')
const sun = document.querySelectorAll('.index-sun')
const body = document.querySelector('body')
const navbar = document.getElementById('index-navbar')
const navbarLink = document.querySelectorAll('.index-navbar-link')
const theme = localStorage.getItem('theme')
const ourWork = document.getElementById('index-dropdown-ourwork')
const dropdown = document.querySelector('#index-dropdown')
const mobileMenuButton = document.querySelector('#index-mobile-menu')
const mobileMenu = document.querySelector('#index-dropdown-mobile')
const dropdownMobile = document.querySelectorAll('.index-dropdown-list-mobile')
const ourWorkMobile = document.querySelector('#index-dropdown-ourwork-mobile')
let width = screen.width


// Mobile menu computed style getters
const mobileMenuStyleGet = window.getComputedStyle(mobileMenu)
const ourWorkMobileStyleGet = window.getComputedStyle(dropdownMobile[0])


export function eventListenerHandler(){
    ourWork.addEventListener('mouseenter', dropdownourWork)
    ourWork.addEventListener('mouseleave', dropupourWork)
    dropdown.addEventListener('mouseenter', dropdownourWork)
    dropdown.addEventListener('mouseleave', dropupourWork)
    mobileMenuButton.addEventListener("touchstart", openMenu)
    ourWorkMobile.addEventListener("touchstart", dropdownourWorkMobile)
}


export function darkModeGet(){
    if(theme == 'darkmode')
    {
        body.classList.toggle('index-darkmode')
        mobileMenuButton.style.filter = 'invert(0)'
    }
    else{
        mobileMenuButton.style.filter = 'invert(100)'
    }
}

export function scrollHandler(){
    window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
        if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
            navbar.style.backgroundColor = 'var(--clr-light)'
            navbar.style.boxShadow = '0px 0px 1px var(--clr-dark)'
            navbarLink.forEach(link =>{link.style.color = 'var(--clr-dark)'})
            sun.forEach(moon => {moon.style.filter = 'invert(0)'})
        } else {
            navbar.style.backgroundColor = 'transparent'
            navbar.style.boxShadow = 'none'
            navbarLink.forEach(link =>{link.style.color = 'aliceblue'})
            sun.forEach(moon => {moon.style.filter = 'invert(100)'})
        }
    }
}


function dropdownourWork(){
    dropdown.style.display = 'flex'
}
function dropupourWork(){
    dropdown.style.display = 'none'
}

function dropdownourWorkMobile(){
    let ourWorkMobileDisplay = ourWorkMobileStyleGet.getPropertyValue('display') 
    if(ourWorkMobileDisplay != 'none'){
        dropdownMobile.forEach(item =>{item.style.display = 'none'})
    }
    else{
        dropdownMobile.forEach(item =>{item.style.display = 'flex'})
    }
}

function openMenu(){
    let mobileMenuDisplay = mobileMenuStyleGet.getPropertyValue('display')
    if(mobileMenuDisplay != 'none'){
        mobileMenu.style.display = 'none'
        dropdownMobile.forEach(item =>{item.style.display = 'none'})
    }
    else{
        mobileMenu.style.display = 'flex'
    }
}

export function themeToggleHandler(){
    themeToggle.forEach(btn =>{btn.addEventListener('click', ()=>{
    body.classList.toggle('index-darkmode')
    if(body.classList.contains('index-darkmode'))
    {
        localStorage.setItem('theme', 'darkmode')
        mobileMenuButton.style.filter = 'invert(0)'
        
    }
    else
    {
        localStorage.removeItem('theme')
        mobileMenuButton.style.filter = 'invert(100)'
    }
    })})
}









