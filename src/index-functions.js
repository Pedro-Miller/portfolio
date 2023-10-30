// DOM getters
const themeToggle = document.querySelectorAll(".index-theme-toggle")
const moon = document.querySelectorAll('.index-moon')
const sun = document.querySelectorAll('.index-sun')
const body = document.querySelector('body')
const navbar = document.getElementById('index-navbar')
const navbarLink = document.querySelectorAll('.index-navbar-link')
const theme = localStorage.getItem('theme')
const mobileMenuButton = document.querySelector('#index-mobile-menu')
const ourWorkMobile = document.querySelector('#index-dropdown-ourwork-mobile')
const animationBox = document.querySelector('#index-animation-box')
const typing1 = document.querySelector('.index-typing1')
const typing2 = document.querySelector('.index-typing2')
let isMenuOpen = false
let botoes = document.querySelectorAll('.index-navbar-button')
let titleFont1
let titleFont2

export function resizeHandler(){
    let width = screen.width
    if(width<900){
        titleFont1 = 7
        titleFont2 = 3
        botoes[0].style.transform = "translateX(100vw)"
        botoes[1].style.transform = "translateX(100vw)"
        botoes[2].style.transform = "translateX(100vw)"
    }
    else{
        titleFont1 = 9
        titleFont2 = 6.3
        botoes[0].style.transform = "translateX(0vw)"
        botoes[1].style.transform = "translateX(0vw)"
        botoes[2].style.transform = "translateX(0vw)"
    }
}


export function eventListenerHandler(){
    mobileMenuButton.addEventListener("touchstart", openMenu)
    window.addEventListener("resize", resizeHandler)
}

function openMenu(){
    if(isMenuOpen==true){
    botoes[0].style.transform = "translateX(100vw)"
    botoes[1].style.transform = "translateX(100vw)"
    botoes[2].style.transform = "translateX(100vw)"
    isMenuOpen = false
    }
    else{
    botoes[0].style.transform = "translateX(0vw)"
    botoes[1].style.transform = "translateX(0vw)"
    botoes[2].style.transform = "translateX(0vw)"
    isMenuOpen = true
    }
}

export function darkModeGet(){
    if(theme == 'darkmode')
    {
        body.classList.toggle('index-darkmode')
    }
}

export function scrollHandler(){
    window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
        typing1.style.fontSize = (titleFont1 - (document.documentElement.scrollTop/100))+'vh'
        typing2.style.fontSize = (titleFont2 - (document.documentElement.scrollTop/100))+'vh'
        typing1.style.top = (53 - 4*(document.documentElement.scrollTop/100))+'vh'
        typing2.style.top = (63 - 5*(document.documentElement.scrollTop/100))+'vh'
        if (document.documentElement.scrollTop > 850) {
            typing1.style.display = 'none'
            typing2.style.display = 'none'
        }
        else{
            typing1.style.display = 'block'
            typing2.style.display = 'block'
        }

        if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
            animationBox.style.boxShadow = '0px 0px 1px var(--clr-dark)'
        } else {
            animationBox.style.boxShadow = 'none'
        }
    }
}

export function themeToggleHandler(){
    themeToggle.forEach(btn =>{btn.addEventListener('click', ()=>{
    body.classList.toggle('index-darkmode')
    if(body.classList.contains('index-darkmode'))
    {
        localStorage.setItem('theme', 'darkmode')
        
    }
    else
    {
        localStorage.removeItem('theme')
    }
    })})
}









