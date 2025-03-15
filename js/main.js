const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".header__nav");

hamburger.addEventListener("click",function(){
    hamburger.classList.toggle("hamburger--open");
    nav.classList.toggle("header__nav--open")
})