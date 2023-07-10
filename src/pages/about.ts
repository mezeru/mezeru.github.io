import {html} from 'lit-html';

const about = () =>
{
    return html
    `
    <section class="child abt" id="about" style="align-items:normal">
        <p class="gliched-text">
            Hi! I'm <span class="gliched-move gliched-text" style="text-align:left">
                <a href="https://github.com/mezeru"><span>YASH chaudhari</span><span>Yash chaudhari</span> <span>YASH chaudhari</span></span></a>
                , a Full Stack Web developer and a software engineer.
        </p>

        <p class="gliched-text">

        I create WEBSITES for fun, love exploring frameworks & packages and my passion is centering DIv's (An ongoing css joke). I like researching and learning about Web Dev and I play a lot of Games xD. 

        </p>

        <p class="gliched-text" style="margin-bottom:0">
            I completed my Bachelor's in Computer Science Engineering at  <span style="color: white;"> National Institute of technology Delhi</span>. Currently pursuing Master of Science degree in Computer Science from <span style="color: white;"> University of central Florida </span>
        </p>

        <a href="https://drive.google.com/drive/folders/1oMvbbnov6BWOqLznrQohUEX9-0sUNLtA?usp=sharing" style="align-self: flex-start; font-size: 1.8em;margin-top:2%;" class="gliched-move gliched-text" >
        <span>Resume</span><span>Resume</span> <span>Resume</span></span>
        </a>
        
    </section>
    
    `
    
}

export default about;
