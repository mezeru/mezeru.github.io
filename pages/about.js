import {html} from 'https://unpkg.com/lit-html?module';

const about = () =>
{
    return html
    `
    <section class="child" id="about">
        <p class="gliched-text">
            Hi! I'm <span class="gliched-move gliched-text">
                <a href="https://github.com/mezeru"><span>YASH chaudhari</span><span>Yash chaudhari</span> <span>YASH chaudhari</span></span></a>
                , a Full Stack Web developer and a software programmer.
        </p>

        <p class="gliched-text">
        I create WEBSITES for fun , love exploring frameworks & packages and my passion is centering DIv's (An ongoing css joke).
        </p>

        <p class="gliched-text" style="margin-bottom:0">
            I am pursuing a Bachelor's degree (B.Tech) in Computer Science Engineering at  <span style="color: white;"> National Institute of technology, Delhi</span>
        </p>

        <a href="https://drive.google.com/file/d/1traoS4zLFMhL56OUmNTL_ey6pNfV-Gyb/view?usp=sharing" style="align-self: flex-start; font-size: 1.8em;margin-top:1%;" class="gliched-move gliched-text social-item" >My RESUME</a>
        
    </section>
    
    `
    
}

export default about;