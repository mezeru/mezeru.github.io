import {html} from 'lit-html';
import{ init, send } from "emailjs-com";
import router from "../scripts/router"

init("user_skqmAHaUypslAcztpKImL");

const sendEmail = (e) => {

    e.preventDefault();
    let aok = true;

    let FD = new FormData(document.getElementById("form") as HTMLFormElement);
    let params = {
        name: FD.get('name'),
        email: FD.get('email'),
        subject: FD.get('subject'),
        message: FD.get('message'),
    }

    for ( let i in params ){
        if (params[i].trim() == "") {
            aok = false;
            document.querySelector(".alert").style.animation = "alert-ye 1s ease-in";
            document.querySelector(".alert").style.opacity = "0.8"
            break;
        }
    }
    
    if(aok){

        try{
            
            send('Gmail-portfo',"Ruizo-portfo",params);
            router.navigate("/thankz");
            
        }
        catch{
            console.log("No");
        }

    }
    
    
}

const contact = () => {return html 
`

<section class="child" id="contact">
            <div class="container">
                <div style="display: flex;align-items: center;justify-content: center;" >
                    <span class="gliched-move gliched-text">
                        <a href="mailto: jermpro0@gmail.com" style="font-size: 2em;"><span>Contact ME</span><span>Contact ME</span> <span>Contact ME</span></a>
                        <p style="font-size: 1.5rem;;line-height: 25px;"><i class="fas fa-arrow-up"></i>Click above to send Email manually</p>
                    </span>
                </div>
                
                <form id="form" style="display: flex;align-items: flex-start;justify-content: center; flex-direction: column;position:relative">
                    <span class="gliched-move gliched-text">
                        <p style="font-size: 2rem;line-height: 25px;">Fill the form if you are lazy</p>
                    </span>

                    <div style="display: flex;justify-content: space-between ; flex-direction: row; width: 100%;">
                        <input type="text" style="width: 40%;" required id="name" name="name" placeholder="Your Name">
                        <input type="email" style="width: 40%;" required  id="email" name="email" placeholder="Email Address">
                    </div>
                    <br>
                    <input type="text" id="subject" required style="width: 50%;" cols="50" name="subject" placeholder="Subject">
                    <br>
                    <textarea placeholder="Message" rows="5" cols="200" style="width: 100%;" id="message" name="message" required></textarea>
                    <a type="submit" class="submit" @click=${sendEmail}>Submit</a>
                    
                    <div class="alert">
                    <span class="closebtn" onclick="this.parentElement.style.opacity='0';this.parentElement.style.animation='none'">&times;</span> 
                    <strong><i class="fas fa-exclamation-triangle"></i>Please fill all the fields before proceeding</strong> 
                    </div>                
                </form>
            </div>
            
</section>

`}
export default contact;