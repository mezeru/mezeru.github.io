import {html} from 'lit-html';

import AOS from 'aos';
import 'aos/dist/aos.css';

const projects = () => {return html
`
<section class="child" id="proj">
            <span class="gliched-move gliched-text">
                <a style="font-size: 2.5em;"><span>Projects</span><span>Projects</span> <span>Projects</span></a>
            </span>
            <div class="scroll">
                <div class="chevron"></div>
                <div class="chevron"></div>
                <div class="chevron"></div>
            </div>
</section>

<section class="child exp-element " data-aos="fade"  id="Two">
    <p style="color:white; font-family: 'Pixel', sans-serif;">June 2021 - Aug 2021</p>
    <div class="time-point"><div class="line-top"></div><div class="mid-point"></div></div>
    <div style="display:flex; flex-direction:column;">
        <span class="gliched-move gliched-text">
            <a style="font-size: 2em; text-transform:none"; >National Institute of Technology , Delhi</a>
        </span>
        
    </div>
    <div>
        <p class="gliched-text">Research Intern</p>
        <p class="gliched-move gliched-text" style="font-size:1.5em">        
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum iste nihil assumenda eum consequuntur sunt, quia dolorem, magni veritatis esse minima, ab illo perferendis. Unde quas perferendis dignissimos deleniti suscipit!
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
export default projects;