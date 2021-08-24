const exp = document.getElementById("Exp");
const proj = document.getElementById("proj");
const social = document.getElementById("social");
const about = document.getElementById("about");
const contact = document.getElementById("contact");
const icon = document.querySelector(".icon-hero");
const cursor = document.getElementById("cursor");
const overlaystatic = document.getElementById("overlay-back");
const overlayBack = document.getElementById("overlay-background");
const audio = document.getElementById("audio");
const backgrounds = ["./assets/Home.png","./assets/experience.jpg","./assets/Projects.jpg","./assets/Social.png","./assets/Contact.jpg"]

document.addEventListener('mousemove',(e)=>{
    var x = e.clientX;
    var y = e.clientY;
    cursor.style.left = x+"px";
    cursor.style.top = y+"px";
});

const nav = document.getElementsByClassName("nav-item");
const body = document.getElementById("body");

for (var i = 0 ; i < nav.length ; i++){
    nav[i].addEventListener("mouseenter",(e)=>{
        cursor.style.transform = "scale(1.7)";
    })
    nav[i].addEventListener("mouseleave",(e)=>{
        cursor.style.transform = "scale(1)";
    })
}

icon.addEventListener("click",() => {
    about.scrollIntoView();
    scrollIn(0)
});


nav[0].addEventListener("click",()=>{
    exp.scrollIntoView();
    scrollIn(1);
});

nav[1].addEventListener("click",()=>{
    proj.scrollIntoView();
    scrollIn(2);
});

nav[2].addEventListener("click",()=>{
    social.scrollIntoView();
    scrollIn(3);
});

nav[3].addEventListener("click",()=>{
    contact.scrollIntoView(0);
    scrollIn(4);
});



function scrollIn(num){
    audio.play();
    body.style.opacity = "0";
    overlaystatic.style.animation = "change 3s ease";
    body.style.animation = "scroll 2s ease";
    overlayBack.style.backgroundImage = "url("+backgrounds[num]+")";
    setTimeout(() => { body.style.removeProperty('animation');}, 2100);
    setTimeout(() => { overlaystatic.style.removeProperty('animation');}, 3100);
    body.style.opacity = "1";
}