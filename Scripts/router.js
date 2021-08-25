import about from "../pages/about.js";
import contactPage from "../pages/contact.js";
import socialPage from "../pages/social.js";
import projectsPage from "../pages/projects.js";
import experimentPage from "../pages/experiment.js";
import {html, render} from 'https://unpkg.com/lit-html?module';

window.addEventListener("load", () => {
    const router = new Navigo("/");
    const main = document.getElementById("main");

    router
    .on("/", () => {
        render(about(),main);
        scrollIn(0);
      })
      .on("/Experience", () => {
        render(experimentPage(),main);
        scrollIn(1);
      })
      .on("/Projects", () => {
        render(projectsPage(),main);
        scrollIn(2);
      })
      .on("/Social", () => {
        render(socialPage(),main);
        scrollIn(3);
      })
      .on("/Contact", () => {
        render(contactPage(),main);
        scrollIn(4);
      })
      .resolve();
  });