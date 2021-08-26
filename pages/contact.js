import {html} from 'https://unpkg.com/lit-html?module';

const contact = () => {return html 
`
<section class="child" id="contact">
            <div class="container">
                <div style="display: flex;align-items: center;justify-content: center;" >
                    <span class="gliched-move gliched-text">
                        <a href="mailto: jermpro0@gmail.com" style="font-size: 2em;"><span>Contact ME</span><span>Contact ME</span> <span>Contact ME</span></a>
                        <p style="font-size: 1.5rem;line-height: 25px;">Feel Free to Contact me xD</p>
                    </span>
                </div>
                <form style="display: flex;align-items: center;justify-content: center; flex-direction: column;" action="https://formsubmit.co/jermpro0@gmail.com" method="POST">

                    <div style="display: flex;justify-content: space-around ; flex-direction: row; width: 100%;">
                        <input type="text" style="width: 45%;"  id="fname" name="fname" placeholder="Your Name">
                        <input type="email" style="width: 45%;"  id="email" name="email" placeholder="Your Email Address">
                    </div>
                    <br>
                    <input type="text" id="Subject" style="width: 100%;" cols="50" name="Subject" placeholder="Subject">
                    <br>
                    <textarea placeholder="Message" rows="5" cols="200" style="width: 100%;" name="Message" required></textarea>
                    <input type="hidden" name="_captcha" value="false">
                    <input type="hidden" name="_next" value="https://ruizo.is-a.dev/contact">
                    <button class="submit">Submit</button>                   
                </form>
            </div>
            
</section>

`}
export default contact;