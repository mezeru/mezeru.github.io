import about from "../pages/about.js";
import contactPage from "../pages/contact.js";
import socialPage from "../pages/social.js";
import projectsPage from "../pages/projects.js";
import experiencePage from "../pages/experiment.js";
import {render} from 'https://unpkg.com/lit-html?module';
import error from "../pages/error.js"
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

    router.navigate("/");
  });


  

    



    




  
