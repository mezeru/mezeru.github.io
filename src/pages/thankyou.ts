import {html} from 'lit-html';

const error = () => {return html `

<section class="child" id="error">
<span class="gliched-move gliched-text">
    <a style="font-size: 3em;"><span>Will Get Back to You</span><span>Will Get Back to You</span> <span>Will Get Back to You</span></a>
</span>
<p class= "gliched-text">
    Your Response has been recorded
</p>
</section>

`
}
export default error;