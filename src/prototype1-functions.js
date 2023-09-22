// DOM getters
const themeToggle = document.querySelectorAll(".prototype1-theme-toggle")
const body = document.querySelector('body')
const navbar = document.getElementById('prototype1-navbar')
const theme = localStorage.getItem('theme')
const ourWork = document.getElementById('prototype1-dropdown-ourwork')
const dropdown = document.querySelector('#prototype1-dropdown')
const slides = document.querySelectorAll('.prototype1-slider-image')
const carouselContainer = document.querySelector('#prototype1-carousel-container')
const next = document.getElementById('prototype1-next-button')
const previous = document.getElementById('prototype1-previous-button')
const bubble = document.querySelectorAll('.prototype1-bubble')
const mobileMenuButton = document.querySelector('#prototype1-mobile-menu')
const mobileMenu = document.querySelector('#prototype1-dropdown-mobile')
const dropdownMobile = document.querySelectorAll('.prototype1-dropdown-list-mobile')
const ourWorkMobile = document.querySelector('#prototype1-dropdown-ourwork-mobile')
let width = screen.width


// Global control variables
let counter = 0
let size = slides.length
let initialX = null;
let initialY = null;
let autoslider
let slideWidth

// Mobile menu computed style getters
const mobileMenuStyleGet = window.getComputedStyle(mobileMenu)
const ourWorkMobileStyleGet = window.getComputedStyle(dropdownMobile[0])
const slideStyleGet = window.getComputedStyle(slides[0])



export function autoSlideHandler(){
    bubble[counter].style.borderColor = 'var(--clr-dark)'
    bubble[counter].style.backgroundColor = 'var(--clr-light)'
    if(width > 1300){
        autoslider = setInterval(nextSlide, 3000)
        carouselContainer.addEventListener('mouseenter', autoslideStop)
        carouselContainer.addEventListener('mouseleave', autoslideStart)
    }
}

export function eventListenerHandler(){
    ourWork.addEventListener('mouseenter', dropdownourWork)
    ourWork.addEventListener('mouseleave', dropupourWork)
    dropdown.addEventListener('mouseenter', dropdownourWork)
    dropdown.addEventListener('mouseleave', dropupourWork)
    next.addEventListener('click', nextSlide)
    previous.addEventListener('click', previousSlide)
    carouselContainer.addEventListener("touchstart", startTouch, false);
    carouselContainer.addEventListener("touchmove", moveTouch, false);
    mobileMenuButton.addEventListener("touchstart", openMenu)
    ourWorkMobile.addEventListener("touchstart", dropdownourWorkMobile)
    window.addEventListener("resize", resizeHandler)
}

function resizeHandler(){
    let width = screen.width
    setTimeout(()=>{slideWidth = parseFloat(slideStyleGet.getPropertyValue('width'))
    slides.forEach(slide =>{
        slide.style.transform = 'translateX('+ (-slideWidth * counter)+'px)'
    })}, 500)
    if(width < 400){
        bubble.forEach(bubble=>(bubble.style.width = '0.7em'))
        bubble.forEach(bubble=>(bubble.style.height = '0.7em'))
    }
    else{
        bubble.forEach(bubble=>(bubble.style.width = '1em'))
        bubble.forEach(bubble=>(bubble.style.height = '1em'))
    }
    
}


export function darkModeGet(){
    if(theme == 'darkmode')
    {
        body.classList.toggle('prototype1-darkmode')
        mobileMenuButton.style.filter = 'invert(0)'
    }
    else{
        mobileMenuButton.style.filter = 'invert(100)'
    }
}

export function scrollHandler(){
    window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
        if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
            navbar.style.boxShadow = '1px 2px 5px var(--clr-dark)'
        } else {
            navbar.style.boxShadow = 'none'
        }
    }
}

function autoslideStop(){
    clearInterval(autoslider)
}

function autoslideStart(){
    autoslider = setInterval(nextSlide, 3000)
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


function nextSlide(){
    slideWidth = parseFloat(slideStyleGet.getPropertyValue('width'))
    if(counter == (size-1)){
        counter = 0
        slides.forEach(slide =>{slide.style.transform = 'translateX('+ (-slideWidth*  counter)+'px)'})
        bubble[counter].style.borderColor = 'var(--clr-dark)'
        bubble[counter].style.backgroundColor = 'var(--clr-light)'
        bubble[size-1].style.borderColor = 'var(--clr-light)'
        bubble[size-1].style.backgroundColor = 'var(--clr-dark)'
    }
    else{
        counter++
        slides.forEach(slide =>{slide.style.transform = 'translateX('+ (-slideWidth * counter)+'px)'})
        bubble[counter].style.borderColor = 'var(--clr-dark)'
        bubble[counter].style.backgroundColor = 'var(--clr-light)'
        bubble[counter-1].style.borderColor = 'var(--clr-light)'
        bubble[counter-1].style.backgroundColor = 'var(--clr-dark)'
    }
}


function previousSlide(){
    slideWidth = parseFloat(slideStyleGet.getPropertyValue('width'))
    if(counter == 0){
        bubble[counter].style.borderColor = 'var(--clr-light)'
        bubble[counter].style.backgroundColor = 'var(--clr-dark)'
        counter = (size-1)
        slides.forEach(slide =>{slide.style.transform = 'translateX('+ (-slideWidth * counter)+'px)'})
        bubble[counter].style.borderColor = 'var(--clr-dark)'
        bubble[counter].style.backgroundColor = 'var(--clr-light)'
    }
    else{
    counter--
        slides.forEach(slide =>{slide.style.transform = 'translateX('+ (-slideWidth * counter)+'px)'})
        bubble[counter].style.borderColor = 'var(--clr-dark)'
        bubble[counter].style.backgroundColor = 'var(--clr-light)'
        bubble[counter+1].style.borderColor = 'var(--clr-light)'
        bubble[counter+1].style.backgroundColor = 'var(--clr-dark)'
    }
}


 
// Swipe Up / Down / Left / Right

 
function startTouch(e) {
  initialX = e.touches[0].clientX;
  initialY = e.touches[0].clientY;
}
 
function moveTouch(e) {
  if (initialX === null) {
    return;
  }
 
  if (initialY === null) {
    return;
  }
  let currentX = e.touches[0].clientX;
  let currentY = e.touches[0].clientY;
 
  let diffX = initialX - currentX;
  let diffY = initialY - currentY;
 
  if (Math.abs(diffX) > Math.abs(diffY)) {
    // sliding horizontally
    if (diffX > 0) {
      // swiped left
      nextSlide()
    } 
    else {
      // swiped right
      previousSlide()
    }  
  } 
  initialX = null;
  initialY = null;
  }
 

export function themeToggleHandler(){
    themeToggle.forEach(btn =>{btn.addEventListener('click', ()=>{
    body.classList.toggle('prototype1-darkmode')
    if(body.classList.contains('prototype1-darkmode'))
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









