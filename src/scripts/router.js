import about from "../pages/about.js";
import contactPage from "../pages/contact.js";
import socialPage from "../pages/social.js";
import projectsPage from "../pages/projects.js";
import experiencePage from "../pages/experience.js";
import {render} from 'lit-html';
import error from "../pages/error.js"
import Navigo from 'navigo';
import thankz from "../pages/thankyou.js";
import home from "../assets/Home.jpg"
import Experience from "../assets/Experience.png"
import Projects from "../assets/Projects.jpg"
import Social from "../assets/Social.png"
import Contact from "../assets/Contact.jpg"
import thnkz from "../assets/thnkz.png"
import staticGif from "../assets/noise_try.gif" 

const backgrounds = [home,Experience,Projects,Social,Contact,thnkz];
const overlaystatic = document.getElementById("overlay-back");
const overlayBack = document.getElementById("overlay-background");
const audio = document.getElementById("audio");

overlaystatic.style.background = "url("+staticGif+")";


function scrollIn(num){
  audio.play();
  main.style.opacity = "0";
  overlaystatic.style.animation = "change 1s ease-in";
  main.style.animation = "scroll 1.5s ease-in";
  overlayBack.style.backgroundImage = "url("+backgrounds[num]+")";
  setTimeout(() => { main.style.removeProperty('animation');}, 1550);
  setTimeout(() => { overlaystatic.style.removeProperty('animation');}, 1000);
  main.style.opacity = "1";
}


  window.addEventListener("load",()=>{
    const router = new Navigo("/");
    const main = document.getElementById("main");
    const routes = [
      {
        route: "/",
        page: about()
      }
      ,
      {
        route:"/experience",
        page: experiencePage()
      }
      ,
      {
        route:"/projects",
        page: projectsPage()
      }
      ,
      {
        route:"social",
        page: socialPage()
      }
      ,
      {
        route:"contact",
        page: contactPage()
      },
      {
        route:"thankz",
        page: thankz()
      }
    ];

    routes.forEach((path,i) => {
      router.on(path.route,() => {
        render(path.page, main);
          scrollIn(i);  
      });
      
    });

    router.notFound(()=> {
      render(error,main);
  });

    router.resolve();
  });


  

    



    




  
