import {html} from "lit-html";

import AOS from 'aos';
import 'aos/dist/aos.css';

const experiment = () => {
    
    return html `

<section class="child" id="Exp One" >
        <span class="gliched-move gliched-text">
            <a style="font-size: 3em;"><span>Experience</span><span>Experience</span> <span>Experience</span></a>
        </span>
        
        <div class="scroll">
            <div class="chevron"></div>
            <div class="chevron"></div>
            <div class="chevron"></div>
        </div>
</section>

<section class="child exp-element " data-aos="fade"  id="Two">
    <p style="color:white; font-family: 'Pixel', sans-serif;">Jun 2021 - Aug 2021</p>
    <div class="time-point"><div class="line-top"></div><div class="mid-point"></div></div>
    <div style="display:flex;">
        <span class="gliched-move gliched-text">
            <a href="https://nitdelhi.ac.in/" style="font-size: 2em; text-transform:none"; >National Institute of Technology , Delhi</a>
        </span>
        
    </div>
    <div>
        <p class="gliched-text">Research Intern</p>
        <p class="gliched-move gliched-text info">        
       
        </p>
    </div>
</section>

<section class="child exp-element " data-aos="fade" id="Three" >
    <p style="color:white; font-family: 'Pixel', sans-serif;">May 2021 – Jun 2021</p> 
    <div class="time-point"><div class="line"></div><div class="mid-point"></div></div>
    <div style="display:flex;">
        <span class="gliched-move gliched-text">
            <a href="https://senraco.com/" style="font-size: 2.5em; text-transform:none"; >SenRa Tech Pvt. Ltd.</a>
        </span>
        
    </div>
    <div>
        <p class="gliched-text">Full Stack Developer Intern</p>
        <p class="gliched-move gliched-text info">        
        Learned AngularJs and Developed pages for SenRaco's Website using AngularJs
        Resolved bugs and added features to SenRa's IOT Application (Ginjer) with AngularJs and GraphQL
         
        </p>
    </div>

</section>

<section class="child exp-element " data-aos="fade" id="Four" >
    <p style="color:white; font-family: 'Pixel', sans-serif;">Mar 2021 – Jun 2021</p> 
    <div class="time-point"><div class="line"></div><div class="mid-point"></div></div>
    <div style="display:flex;">
        <span class="gliched-move gliched-text">
            <a href="https://www.unschool.in/" style="font-size: 2.5em; text-transform:none"; >Unschool</a>
        </span>
        
    </div>
    <div>
        <p class="gliched-text">B2B Intern</p>
        <p class="gliched-move gliched-text info" >        
        Researched Market to identify the target market for the products
        and Promoted Marketing of Unschool products through various marketing channels.
        Was tasked with Interviewing and recruiting potential Interns
        </p>
    </div>

</section>

<section class="child exp-element " data-aos="fade"  id="Five" >
    <p style="color:white; font-family: 'Pixel', sans-serif;">Apr 2021 – May 2021</p> 
    <div class="time-point"><div class="line"></div><div class="mid-point"></div></div>
    <div style="display:flex;">
        <span class="gliched-move gliched-text">
            <a href="https://www.linkedin.com/company/validlog/?originalSubdomain=in" style="font-size: 2em; line-height:0em ;text-transform:none"; >
            Catosoft Technologies Private Limited</a>
        </span>
        
    </div>
    <div>
        <p class="gliched-text" >Python & React Developer Intern</p>
        <p class="gliched-move gliched-text info">        
        Worked on a real time facial recognition system providing real time KYC also worked as a React Developer for a brief time.    
        </p>
    </div>
</section>

<section class="child exp-element " data-aos="fade"  id="Six">
    <p style="color:white; font-family: 'Pixel', sans-serif;">Feb 2021 – Apr 2021</p> 
    <div class="time-point"><div class="line"></div><div class="mid-point"></div></div>
    <div style="display:flex;">
        <span class="gliched-move gliched-text">
            <a style="font-size: 2em; text-transform:none"; >P2L Impact Learning Empowers Pvt. Ltd.</a>
        </span>
        
    </div>
    <div>
        <p class="gliched-text">Unity Developer Intern</p>
        <p class="gliched-move gliched-text info">        
            Worked on Unity Engine and also on Blender3D to create low poly 3D models of everyday items. I got practical exposure of C# programming in Unity Engine.
        </p>
    </div>

</section>

<section class="child exp-element " data-aos="fade" id="Seven" >
    <p style="color:white; font-family: 'Pixel', sans-serif;">May 2020 – Oct 2020</p> 
    <div class="time-point"><div class="line-bottom"></div><div class="mid-point"></div></div>
    <div style="display:flex;">
        <span class="gliched-move gliched-text">
            <a href="https://nitdelhi.ac.in/" style="font-size: 2em; text-transform:none"; >
            National Institute of Technology , Delhi </a>
        </span>
        
    </div>
    <div>
        <p class="gliched-text">Python Developer Intern</p>
        <p class="gliched-move gliched-text info">        
            Worked on Intelligent Study Material Download Program under the supervision of Dr. Rajya Lakshmi            
        </p>
    </div>

    </section>

    ${
        AOS.init({
            delay: 50, // values from 0 to 3000, with step 50ms
            duration: 500, // values from 0 to 3000, with step 50ms
            easing: 'ease-in-out',
            mirror:true
        })
    }

`
}
export default experiment;