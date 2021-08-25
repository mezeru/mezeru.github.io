import about from "../pages/about.js";
import contactPage from "../pages/contact.js";
import socialPage from "../pages/social.js";
import projectsPage from "../pages/projects.js";
import experimentPage from "../pages/experiment.js"

window.addEventListener("load", () => {
    const router = new Navigo("/");
    const main = document.getElementById("main");

    router
    .on("/", () => {
        main.innerHTML = about;
        scrollIn(0);
      })
      .on("/Experience", () => {
        main.innerHTML = experimentPage;
        scrollIn(1);
      })
      .on("/Projects", () => {
        main.innerHTML = projectsPage;
        scrollIn(2);
      })
      .on("/Social", () => {
        main.innerHTML = socialPage;
        scrollIn(3);
      })
      .on("/Contact", () => {
        main.innerHTML = contactPage;
        scrollIn(4);
      })
      .resolve();
  });