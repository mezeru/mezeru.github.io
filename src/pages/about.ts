import {html} from 'lit-html';

const about = () =>
{
    return html
    `
    <section class="child" id="about" style="align-items:normal">
        <p class="gliched-text">
            Hi! I'm <span class="gliched-move gliched-text" style="text-align:left">
                <a href="https://github.com/mezeru"><span>YASH chaudhari</span><span>Yash chaudhari</span> <span>YASH chaudhari</span></span></a>
                , a Full Stack Web developer and a software programmer.
        </p>

        <p class="gliched-text">
        I create WEBSITES for fun , love exploring frameworks & packages and my passion is centering DIv's (An ongoing css joke).
        </p>

        <p class="gliched-text" style="margin-bottom:0">
            I am pursuing a Bachelor's degree (B.Tech) in Computer Science Engineering at  <span style="color: white;"> National Institute of technology, Delhi</span>
        </p>

        <a href="https://drive.google.com/file/d/1a81pmC4I53NUrW1sA30eGz5C944K0sQI/view?usp=sharing" style="align-self: flex-start; font-size: 1.8em;margin-top:2%;" class="gliched-move gliched-text" >
        <span>Resume</span><span>Resume</span> <span>Resume</span></span>
        </a>
        
    </section>
    
    `
    
}

export default about;