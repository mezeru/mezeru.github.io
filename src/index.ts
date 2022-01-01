import iconUrl from "./assets/icon.png";

const overlaystatic = document.getElementById("overlay-back");
const nav = document.getElementsByClassName("nav-item");
const main = document.getElementById("main");
const loaded = document.getElementById("after-load");

window.addEventListener('load', function() {
    overlaystatic.style.animation = "change 500ms ease-in";
    loaded.style.animation = "scroll 1.5s ease-in";
    loaded.style.opacity = "1";
});

const cursor = document.getElementById("cursor");
document.addEventListener('mousemove',(e)=>{
    var x = e.clientX;
    var y = e.clientY;
    cursor.style.left = x+"px";
    cursor.style.top = y+"px";
});


const exp = document.getElementById("Exp");
const proj = document.getElementById("proj");
const social = document.getElementById("social");
const about = document.getElementById("about");
const contact = document.getElementById("contact");
const icon = document.querySelector(".icon-hero");

icon.src = iconUrl;



for (var i = 0 ; i < nav.length ; i++){
    nav[i].addEventListener("mouseenter",(e)=>{
        cursor.style.transform = "scale(1.7)";
        cursor.style.border = "solid 1px white";
        cursor.style.removeProperty("animation");
        cursor.style.boxShadow = "0px 0px 0px 0px white"
    })
    nav[i].addEventListener("mouseleave",(e)=>{
        cursor.style.transform = "scale(1)";
        cursor.style.border = "solid 2px white";
        cursor.style.animation = "beat 1s infinite ease-in-out";
        cursor.style.transform = "translate(-50%,-50%)";
        
    })
}

