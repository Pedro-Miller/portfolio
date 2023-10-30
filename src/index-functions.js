// DOM getters
const themeToggle = document.querySelectorAll(".index-theme-toggle")
const moon = document.querySelectorAll('.index-moon')
const sun = document.querySelectorAll('.index-sun')
const body = document.querySelector('body')
const navbar = document.getElementById('index-navbar')
const navbarLink = document.querySelectorAll('.index-navbar-link')
const theme = localStorage.getItem('theme')
const mobileMenuButton = document.querySelector('#index-mobile-menu')
const mobileMenu = document.querySelector('#index-dropdown-mobile')
const dropdownMobile = document.querySelectorAll('.index-dropdown-list-mobile')
const ourWorkMobile = document.querySelector('#index-dropdown-ourwork-mobile')
const animationBox = document.querySelector('#index-animation-box')
const typing1 = document.querySelector('.index-typing1')
const typing2 = document.querySelector('.index-typing2')
let width = screen.width


// Mobile menu computed style getters
const mobileMenuStyleGet = window.getComputedStyle(mobileMenu)
const ourWorkMobileStyleGet = window.getComputedStyle(dropdownMobile[0])


export function eventListenerHandler(){
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
        typing1.style.fontSize = (9 - (document.documentElement.scrollTop/100))+'vh'
        typing2.style.fontSize = (9 - (document.documentElement.scrollTop/100))+'vh'
        typing1.style.top = (53 - 4*(document.documentElement.scrollTop/100))+'vh'
        typing2.style.top = (63 - 5*(document.documentElement.scrollTop/100))+'vh'
        if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
            animationBox.style.boxShadow = '0px 0px 1px var(--clr-dark)'
        } else {
            animationBox.style.boxShadow = 'none'
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









