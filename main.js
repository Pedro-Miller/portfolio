window.onload= function(){

const themeToggle = document.querySelectorAll(".theme-toggle")
const body = document.querySelector('body')
const navbar = document.getElementById('navbar')
const theme = localStorage.getItem('theme')

if(theme == 'darkmode')
{
    body.classList.toggle('darkmode')
}

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        navbar.style.boxShadow = '1px 2px 5px var(--clr-dark)'
    } else {
        navbar.style.boxShadow = 'none'
    }
}

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

