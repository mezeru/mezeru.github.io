import {html} from 'https://unpkg.com/lit-html?module';

const error = () => {return html `

<section class="child" id="error">
<span class="gliched-move gliched-text">
    <a style="font-size: 3em;"><span>Thank You</span><span>Thank You</span> <span>Thank You</span></a>
</span>
<p class= "gliched-text">
    Your Response has been recorded
</p>
</section>

`
}
export default error;