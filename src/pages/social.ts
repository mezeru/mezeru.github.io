import {html} from 'lit-html';
import '@fortawesome/fontawesome-free/css/all.css'

const social = () => {return html `


<section class="child" id="social">
            <div class="container">

                <div style="display: flex;align-items: center;justify-content: center;flex-direction: column;">
                    <span class="gliched-move gliched-text">
                        <a style="font-size: 2em;"><span>social</span><span>social</span> <span>social</span></a>
                        <p style="font-size: 1.5rem;line-height: 25px;">Get in Touch with me</p>
                    </span>
                    
                </div>

                <div  class="social-items">
                    <a href="https://github.com/mezeru" class="gliched-text social-item"><i class="fab fa-github"></i>Github</a>
                    <a href="https://www.linkedin.com/in/yash-chaudhari-9194311bb/" class="gliched-text social-item"><i class="fab fa-linkedin"></i>linkedin</a>
                    <a href="https://open.spotify.com/user/31d5ihybeudzqweelv7pc7tsjsmm" class="gliched-text social-item"><i class="fab fa-spotify"></i>Spotify</a>
                    <a href="https://www.instagram.com/_juz_someone_/" class="gliched-text social-item"><i class="fab fa-instagram"></i>Instragram</a>
                    <a href="https://steamcommunity.com/id/Ruizolas/" class="gliched-text social-item"><i class="fab fa-steam"></i>Steam</a>
                    <a href="https://www.snapchat.com/add/juz.someone" class="gliched-text social-item"><i class="fab fa-snapchat-ghost"></i>Snapchat</a>
                </div>

            </div>
</section>

`
}

export default social;