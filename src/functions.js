const themeToggle = document.querySelectorAll(".theme-toggle")
const body = document.querySelector('body')
const navbar = document.getElementById('navbar')
const theme = localStorage.getItem('theme')
const ourWork = document.getElementById('dropdown-ourwork')
const dropdown = document.querySelector('#dropdown')
const slides = document.querySelectorAll('.slider-image')
const carouselContainer = document.querySelector('#carousel-container')
const next = document.getElementById('next-button')
const previous = document.getElementById('previous-button')
const bubble = document.querySelectorAll('.bubble')
const mobileMenuButton = document.querySelector('#mobile-menu')
const mobileMenu = document.querySelector('#dropdown-mobile')
const dropdownMobile = document.querySelectorAll('.dropdown-list-mobile')
const ourWorkMobile = document.querySelector('#dropdown-ourwork-mobile')
let counter = 0
let size = slides.length
let initialX = null;
let initialY = null;
let autoslider
let slideWidth = 900




export function autoSlideHandler(){
    bubble[counter].style.borderColor = 'var(--clr-dark)'
    bubble[counter].style.backgroundColor = 'var(--clr-light)'
    if(screen.width > 1300){
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
}

export function darkModeGet(){
    if(theme == 'darkmode')
    {
        body.classList.toggle('darkmode')
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
    if(dropdownMobile[0].style.display != 'none'){
        dropdownMobile.forEach(item =>{item.style.display = 'none'})
        console.log(dropdownMobile[0].style.display);
    }
    else{
        dropdownMobile.forEach(item =>{item.style.display = 'flex'})
    }
}

function openMenu(){
    if(mobileMenu.style.display != 'none'){
        mobileMenu.style.display = 'none'
    }
    else{
        mobileMenu.style.display = 'flex'
    }
}


function nextSlide(){
    if(screen.width < 1000){
        slideWidth = 450
    }
    if(counter == (size-1)){
        counter = 0
        slides.forEach(slide =>{slide.style.transform = 'translateX('+ (-slideWidth*counter)+'px)'})
        bubble[counter].style.borderColor = 'var(--clr-dark)'
        bubble[counter].style.backgroundColor = 'var(--clr-light)'
        bubble[size-1].style.borderColor = 'var(--clr-light)'
        bubble[size-1].style.backgroundColor = 'var(--clr-dark)'
    }
    else{
        counter++
        slides.forEach(slide =>{slide.style.transform = 'translateX('+ (-slideWidth*counter)+'px)'})
        console.log(slideWidth)
        bubble[counter].style.borderColor = 'var(--clr-dark)'
        bubble[counter].style.backgroundColor = 'var(--clr-light)'
        bubble[counter-1].style.borderColor = 'var(--clr-light)'
        bubble[counter-1].style.backgroundColor = 'var(--clr-dark)'
    }
}


function previousSlide(){
    if(screen.width < 1000){
        slideWidth = 500
    }
    if(counter == 0){
        bubble[counter].style.borderColor = 'var(--clr-light)'
        bubble[counter].style.backgroundColor = 'var(--clr-dark)'
        counter = (size-1)
        slides.forEach(slide =>{slide.style.transform = 'translateX('+ (-slideWidth*counter)+'px)'})
        bubble[counter].style.borderColor = 'var(--clr-dark)'
        bubble[counter].style.backgroundColor = 'var(--clr-light)'
    }
    else{
    counter--
        slides.forEach(slide =>{slide.style.transform = 'translateX('+ (-slideWidth*counter)+'px)'})
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
    body.classList.toggle('darkmode')
    if(body.classList.contains('darkmode'))
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









