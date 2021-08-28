import {html} from 'https://unpkg.com/lit-html?module';

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
`
}
export default projects;