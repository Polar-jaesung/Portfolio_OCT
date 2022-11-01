'use strict';

// (1) Navbar투명 > 내려가면 색상 표시 
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
// getBoundingClientRect()는 offsetHeight와 유사한 역할

window.addEventListener('scroll',()=>{  
    if(window.scrollY>navbarHeight){
    navbar.classList.add('add_color');
    }
    else{
    navbar.classList.remove('add_color');
    }
});

// (2) 버튼클릭 시 화면 이동하는 효과 (네브바 + Contact Me)
const navbarMenu = document.querySelector(".navbar_menu");

navbarMenu.addEventListener('click',(event)=>{
    const link =event.target.dataset.link;
    const linkPosition = document.querySelector(link);
    if(link == null){
        return;
    }
    else{
        linkPosition.scrollIntoView({behavior: "smooth"});
    }
    

})