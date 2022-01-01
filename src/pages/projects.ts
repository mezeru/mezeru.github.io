import {html} from 'lit-html';
import pagination from '../scripts/pagination';
import $ from "jquery"
import AOS from 'aos';
import 'aos/dist/aos.css';

pagination();

$(document).on('scroll', pagination);

$(document).on('click', 'a[href^="#"]', function(e) {
    e.preventDefault();
    $('html, #main').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});



const projects = () => {return html
`

<ul id="pagination">
  <li><a href="#Proj"></a></li>
  <li><a href="#Two"></a></li>
  <li><a href="#Three"></a></li>
  <li><a href="#Four"></a></li>
  <li><a href="#Five"></a></li>
  <li><a href="#Six"></a></li>
  <li><a href="#Seven"></a></li>
  <li><a href="#Eight"></a></li>
  <li><a href="#Nine"></a></li>
  <li><a href="#Ten"></a></li>
</ul>


<section class="child" id="Proj">
            <span class="gliched-move gliched-text">
                <a style="font-size: 2.5em;"><span>Projects</span><span>Projects</span> <span>Projects</span></a>
            </span>
            <div class="scroll">
                <div class="chevron"></div>
                <div class="chevron"></div>
                <div class="chevron"></div>
            </div>
</section>

<section class="child proj-element " data-aos="fade"  id="Two">

    

    <div style="display:flex;justify-content:center;align-items:center; flex-direction:column">
            <span class="gliched-move gliched-text">
                <a style="font-size:1.5em">Interoperable System for COVID 19</a>
            </span>   
        <div class="line-point"><div class="line-top"></div><div class="mid-point"></div></div>   
    </div>

    <div style="display:flex;flex-direction:column;align-items:center">
        <p class="gliched-text lang">Svelte SCSS Typescript MongoDB EHRbase FHIR</p>
    </div>

    <div>
        <p class="gliched-move gliched-text info">        
            A Healthcare application to collect patient data following openEHR standards.
        </p>
        <p class="gliched-move gliched-text info">        
            I published a research paper documenting the creation and functioning of an interoperable system.
        </p>

    </div>
    
</section>


<section class="child proj-element " data-aos="fade"  id="Three">


    <div style="display:flex;justify-content:center;align-items:center; flex-direction:column">
        <div class="line-point"><div class="line-bottom"></div><div class="mid-point"></div></div>   
            <span class="gliched-move gliched-text">
                <a>Parkade
                </a>
            </span>   
        <div class="line-point"><div class="line-top"></div><div class="mid-point"></div></div>   
    </div>

    <div style="display:flex;flex-direction:column;align-items:center">
        <p class="gliched-text lang">python</p>
    </div>

    <div>
        <p class="gliched-move gliched-text info">        
        Course Project for Data Mining
        Parkage is a License Plate Detector for a Parking Lot.
        Fare Calculator for the vehicle while exitin
        </p>
    </div>
    
</section>

<section class="child proj-element " data-aos="fade"  id="Four">


    <div style="display:flex;justify-content:center;align-items:center; flex-direction:column">
        <div class="line-point"><div class="line-bottom"></div><div class="mid-point"></div></div>   
            <span class="gliched-move gliched-text">
                <a style="font-size:1.5em">Intelligent Study Material Download Program
                </a>
            </span>   
        <div class="line-point"><div class="line-top"></div><div class="mid-point"></div></div>   
    </div>

    <div style="display:flex;flex-direction:column;align-items:center">
        <p class="gliched-text lang" style="word-spacing:20em;text-align:center;;">python</p>
    </div>

    <div>
        <p class="gliched-move gliched-text info">
        Web-Scraper that download all files from a given website
        Segregating of different types of files
        Displaying Top Five PDF files relevant to a phrase entered by the user
        Displaying phrases related to the one entered by the user
        </p>
    </div>
    
</section>

<section class="child proj-element " data-aos="fade"  id="Five">


    <div style="display:flex;justify-content:center;align-items:center; flex-direction:column">
        <div class="line-point"><div class="line-bottom"></div><div class="mid-point"></div></div>   
            <span class="gliched-move gliched-text">
                <a>X-n-O
                </a>
            </span>   
        <div class="line-point"><div class="line-top"></div><div class="mid-point"></div></div>   
    </div>

    <div style="display:flex;flex-direction:column;align-items:center">
        <p class="gliched-text lang">HTML
        SCSS
        NodeJs
        JavaScript
        </p>
    </div>

    <div>
        <p class="gliched-move gliched-text info">
        Course Project for Network Programming
        An Online Multiplayer Tic-Tac-Toe Game (using Sockets)
        Supports Cross Platform
        </p>
    </div>
    
</section>

<section class="child proj-element " data-aos="fade"  id="Six">


    <div style="display:flex;justify-content:center;align-items:center; flex-direction:column">
        <div class="line-point"><div class="line-bottom"></div><div class="mid-point"></div></div>   
            <span class="gliched-move gliched-text" style="font-size:1em">
                <a>
                Unity Game Projects
                </a>
            </span>   
        <div class="line-point"><div class="line-top"></div><div class="mid-point"></div></div>   
    </div>

    <div style="display:flex;flex-direction:column;align-items:center">
        <p class="gliched-text lang">Unity-Engine C#</p>
    </div>

    <div>
        <p class="gliched-move gliched-text info">
        A Repo of Miniature Games made using Unity Engine

        </p>
    </div>
    
</section>

<section class="child proj-element " data-aos="fade"  id="Seven">


    <div style="display:flex;justify-content:center;align-items:center; flex-direction:column">
        <div class="line-point"><div class="line-bottom"></div><div class="mid-point"></div></div>   
            <span class="gliched-move gliched-text">
                <a>
                Cut It
                </a>
            </span>   
        <div class="line-point"><div class="line-top"></div><div class="mid-point"></div></div>   
    </div>

    <div style="display:flex;flex-direction:column;align-items:center">
        <p class="gliched-text lang">ElectronJs
        HTML
        SCSS
        Bulma
        </p>
    </div>

    <div>
        <p class="gliched-move gliched-text info">
        A Destop native screen recording app using ElectronJs
        </p>
    </div>
    
</section>

<section class="child proj-element " data-aos="fade"  id="Eight">

    <div style="display:flex;justify-content:center;align-items:center; flex-direction:column">
        <div class="line-point"><div class="line-bottom"></div><div class="mid-point"></div></div>   
            <span class="gliched-move gliched-text">
                <a>
                Bloggin
                </a>
            </span>   
        <div class="line-point"><div class="line-top"></div><div class="mid-point"></div></div>   
    </div>

    <div style="display:flex;flex-direction:column;align-items:center">
        <p class="gliched-text lang">Flask
        HTML
        SCSS
        Javascript
        Python</p>
    </div>

    <div>
        <p class="gliched-move gliched-text info">
            A blogging website made using Flask and Javascript
        </p>
    </div>
    
</section>

<section class="child proj-element " data-aos="fade"  id="Nine">

    <div style="display:flex;justify-content:center;align-items:center; flex-direction:column">
        <div class="line-point"><div class="line-bottom"></div><div class="mid-point"></div></div>   
            <span class="gliched-move gliched-text">
                <a>
                2048
                </a>
            </span>   
        <div class="line-point"><div class="line-top"></div><div class="mid-point"></div></div>   
    </div>

    <div style="display:flex;flex-direction:column;align-items:center">
        <p class="gliched-text lang">
        HTML
        SCSS
        TypeScript</p>
    </div>

    <div>
        <p class="gliched-move gliched-text info">
            A clone 2048 Game made using TypeScript.The game's objective is to slide numbered tiles on a grid to combine them to create a tile with the number 2048
        </p>
    </div>
    
</section>

<section class="child proj-element " data-aos="fade"  id="Ten">


    <div style="display:flex;justify-content:center;align-items:center; flex-direction:column">
        <div class="line-point"><div class="line-bottom"></div><div class="mid-point"></div></div>   
            <span class="gliched-move gliched-text">
                <a>
                Postoff
                </a>
            </span>   
    </div>

    <div style="display:flex;flex-direction:column;align-items:center">
        <p class="gliched-text lang">
        React
        SCSS
        JavaScript
        Parcel
        NodeJs
        MongoDB
        </p>
    </div>

    <div>
        <p class="gliched-move gliched-text info">
        A Repo of Miniature Games made using Unity Engine

        </p>
    </div>
    
</section>


${
    AOS.init({
        delay: 50, // values from 0 to 3000, with step 50ms
        duration: 800, // values from 0 to 3000, with step 50ms
        easing: 'ease-in',
        mirror:true
    })
}

`
}
export default projects;