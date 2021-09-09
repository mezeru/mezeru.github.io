import {html} from "lit-html";
import $ from "jquery"
import pagination from "../scripts/pagination"
import AOS from 'aos';
import 'aos/dist/aos.css';

$(document).on('scroll', pagination);

$(document).on('click', 'a[href^="#"]', function(e) {
    e.preventDefault();
    $('html, #main').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

const experiment = () => {
    
    return html `

<ul id="pagination">
  <li><a href="#Exp"></a></li>
  <li><a href="#Two"></a></li>
  <li><a href="#Three"></a></li>
  <li><a href="#Four"></a></li>
  <li><a href="#Five"></a></li>
  <li><a href="#Six"></a></li>
  <li><a href="#Seven"></a></li>
</ul>

${pagination()}

<section class="child" id="Exp" >
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
    <p style="color:white;font-size:1.5em;font-family: 'Pixel', sans-serif;">Jun 2021 - Aug 2021</p>
    <div class="time-point"><div class="line-top"></div><div class="mid-point"></div></div>
    <div style="display:flex;">
        <span class="gliched-move gliched-text">
            <a href="https://nitdelhi.ac.in/" style="font-size: 2em; text-transform:none"; >National Institute of Technology Delhi</a>
        </span>
        
    </div>
    <div>
        <p class="gliched-text">Research Intern</p>
        <p class="gliched-text gliched-move info">        
        Conducted research on Interoprability in Healthcare and worked on Electronic Health Record Arcehtypes, Archetype Designer, Ehrbase and Med Blocks UI. 
        <p class="gliched-text gliched-move info">
        Developed an interoperable system for Covid 19 following OpenEHR standard and prepared a data set for finding correlations between symptoms and the physique of a patient by implementing machine learning techniques.
        </p>

        </p>
    </div>
</section>

<section class="child exp-element " data-aos="fade" id="Three" >
    <p style="color:white;font-size:1.5em;font-family: 'Pixel', sans-serif;">May 2021 – Jun 2021</p> 
    <div class="time-point"><div class="line"></div><div class="mid-point"></div></div>
    <div style="display:flex;">
        <span class="gliched-move gliched-text">
            <a href="https://senraco.com/" style="font-size: 2.5em; text-transform:none"; >SenRa Tech Pvt. Ltd.</a>
        </span>
        
    </div>
    <div>
        <p class="gliched-text">Full Stack Developer Intern</p>
        <p class="gliched-move gliched-text info">        
        Senra is a PAN India Low Power Wide Area Network Provider (LPWAN) Specifically LoRaWAN
        Which provides high quality commercial grade managed network services
        </p>
        <p class="gliched-move gliched-text info" >
        Learned AngularJs and developed web-components from UI designs in Adobe XD for SenRaco's Website using AngularJs.
        Worked on SenRa's IoT Analytics Platform, Ginjer, to resolve production bugs and add minor features to the application.
        Tested Senra's website for bugs
        </p>
    </div>

</section>

<section class="child exp-element " data-aos="fade" id="Four" >
    <p style="color:white;font-size:1.5em;font-family: 'Pixel', sans-serif;">Mar 2021 – Jun 2021</p> 
    <div class="time-point"><div class="line"></div><div class="mid-point"></div></div>
    <div style="display:flex;">
        <span class="gliched-move gliched-text">
            <a href="https://www.unschool.in/" style="font-size: 2.5em; text-transform:none"; >Unschool</a>
        </span>
        
    </div>
    <div>
        <p class="gliched-text">Business development intern</p>
        <p class="gliched-move gliched-text info" >        
            Researched Market to identify new development channels, target market for Unschool products and Selling products or services to those clients.
            Promoted Unschool and Unschool products through various marketing channels.
        </p>
        <p class="gliched-move gliched-text info" >
            Promoted ideas for Sustained revenue growth and efficient marketing based on current sales.
            Was tasked with Interviewing and recruiting potential Interns.
        </p>
        
        </p>
    </div>

</section>

<section class="child exp-element " data-aos="fade"  id="Five" >
    <p style="color:white;font-size:1.5em;font-family: 'Pixel', sans-serif;">Apr 2021 – May 2021</p> 
    <div class="time-point"><div class="line"></div><div class="mid-point"></div></div>
    <div style="display:flex;">
        <span class="gliched-move gliched-text">
            <a href="https://www.linkedin.com/company/validlog/?originalSubdomain=in" style="font-size: 2em; line-height:0em ;text-transform:none"; >
            Catosoft Technologies Private Limited</a>
        </span>
        
    </div>
    <div>
        <p class="gliched-text" >Python Developer Intern</p>
        <p class="gliched-move gliched-text info">        
        Worked on a real time facial recognition system providing real time KYC. 
        Used OpenCV to extract face from adhaard card and interview video then Machine Learning model Trained using the frames extracted from the interview video to find if the faces matched.
        </p>
        <p class="gliched-move gliched-text info">
        Verfied the authenticity of Summited aadharcard image with the help of offline e-KYC Xml library of pyaadhar. 
        Worked briefly on the front end part of the project with ReactJs and parcel
        </p>
    </div>
</section>

<section class="child exp-element " data-aos="fade"  id="Six">
    <p style="color:white;font-size:1.5em;font-family: 'Pixel', sans-serif;">Feb 2021 – Apr 2021</p> 
    <div class="time-point"><div class="line"></div><div class="mid-point"></div></div>
    <div style="display:flex;">
        <span class="gliched-move gliched-text">
            <a href="https://www.power2create.in/" style="font-size: 2em; text-transform:none"; >P2L Impact Learning Empowers Pvt. Ltd.</a>
        </span>
        
    </div>
    <div>
        <p class="gliched-text">Unity Developer Intern</p>
        <p class="gliched-move gliched-text info">        
            Worked on Unity Engine and also on Blender3D to make a virtual shopping experience and created low poly 3D models of everyday items.
        </p>
    </div>

</section>

<section class="child exp-element " data-aos="fade" id="Seven" >
    <p style="color:white;font-size:1.5em;font-family: 'Pixel', sans-serif;">May 2020 – Oct 2020</p> 
    <div class="time-point"><div class="line-bottom"></div><div class="mid-point"></div></div>
    <div style="display:flex;">
        <span class="gliched-move gliched-text">
            <a href="https://nitdelhi.ac.in/" style="font-size: 2em; text-transform:none"; >
            National Institute of Technology Delhi </a>
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