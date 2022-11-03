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

//contact me 버튼
const contact = document.querySelector(".home_contact");

contact.addEventListener('click',(event)=>{
   
    const link = event.target.dataset.link;
    const linkPosition =document.querySelector(link);
    if(link==null){
        return;
    }
    else{
        linkPosition.scrollIntoView({behavior:"smooth"});       
    }
})

//(3) 스크롤 내려가면 Home 섹션 Opacity 변경하는 이벤트

const home = document.querySelector("#home");
const homeHeight = home.getBoundingClientRect().height;


window.addEventListener('scroll',()=>{
    home.style.opacity= 1-window.scrollY / homeHeight;
})

//(4)화살표 애니메이션이 스크롤 조금 내려갔을때 보이기 시작

const arrowUp= document.querySelector(".arrow__up");

window.addEventListener('scroll',()=>{

if(window.scrollY>homeHeight){
    arrowUp.classList.add("visible");
}
else{
    arrowUp.classList.remove("visible"); 
}
})

// (4-1) 화살표 누르면 맨위로 올라오도록

arrowUp.addEventListener('click',(event)=>{

const link = event.target.dataset.link;
const linkPosition =document.querySelector(link);
    linkPosition.scrollIntoView({behavior:"smooth"});        
});

// 클릭시 스킬별로 프로젝트 구분해서 뜨도록 
const workBtnContainer = document.querySelector(".work_categories");
const projectContainer =document.querySelector(".work_projects");
const projects = document.querySelectorAll(".project");


workBtnContainer.addEventListener("click",(e)=>{
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;

    if(filter==null){
        return;
    }
    projectContainer.classList.add('fade-out');

    setTimeout(()=>{
        projects.forEach((project)=>{
            if(filter==="*" || filter=== project.dataset.type){
                project.classList.remove('invisible');
            }
            else{
                project.classList.add('invisible');
            }
        });
        projectContainer.classList.remove('fade-out');
    },300)
})