const menu=document.querySelector(".menu");
const opemMenuBtn=document.querySelector(".open-menu");
const closeMenuBtn=document.querySelector(".close-menu");

function toggleMenu(){
    menu.classList.toggle("menu_opened");
}

opemMenuBtn.addEventListener("click",toggleMenu);
closeMenuBtn.addEventListener("click",toggleMenu);

const menuLinks = document.querySelectorAll('.menu a[href^="#"]');

menuLinks.forEach(menuLink =>{
    menuLink.addEventListener("click", function(){
        menu.classList.remove("menu_opened");    
    })
})