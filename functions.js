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
const dot = document.querySelector('#dot')
let counter = 0
let autoslider = setInterval(nextSlide, 3000)
let size = slides.length
let initialX = null;
let initialY = null;


export function eventListenerHandler(){
    carouselContainer.addEventListener('mouseenter', autoslideStop)
    carouselContainer.addEventListener('mouseleave', autoslideStart)
    ourWork.addEventListener('mouseenter', dropdownourWork)
    ourWork.addEventListener('mouseleave', dropupourWork)
    dropdown.addEventListener('mouseenter', dropdownourWork)
    dropdown.addEventListener('mouseleave', dropupourWork)
    next.addEventListener('click', nextSlide)
    previous.addEventListener('click', previousSlide)
    carouselContainer.addEventListener("touchstart", startTouch, false);
    carouselContainer.addEventListener("touchmove", moveTouch, false);
}

export function darkModeGet(){
    if(theme == 'darkmode')
    {
        body.classList.toggle('darkmode')
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
    


function nextSlide(){
    if(counter == (size-1)){
        counter = 0
        slides.forEach(slide =>{slide.style.transform = 'translateX('+ (-900*counter)+'px)'})
        dot.style.transform = 'translateX(' + (-117.5+25*counter) +'px)' + 'translateY(-0.5px)'
    }
    else{
    counter++
    slides.forEach(slide =>{slide.style.transform = 'translateX('+ (-900*counter)+'px)'})
    dot.style.transform = 'translateX(' + (-117.5+25*counter) +'px)' + 'translateY(-0.5px)'
    }
}


function previousSlide(){
    if(counter == 0){
        counter = (size-1)
        slides.forEach(slide =>{slide.style.transform = 'translateX('+ (-900*counter)+'px)'})
        dot.style.transform = 'translateX(' + (-117.5+25*counter) +'px)' + 'translateY(-0.5px)'
    }
    else{
    counter--
    slides.forEach(slide =>{slide.style.transform = 'translateX('+ (-900*counter)+'px)'})
    dot.style.transform = 'translateX(' + (-117.5+25*counter) +'px)' + 'translateY(-0.5px)'
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
    }
    else
    {
        localStorage.removeItem('theme')
    }
    })})
}









