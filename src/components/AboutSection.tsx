import { FaInstagram, FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";

function AboutSection() {
    return(
        <section id="about-section">
            <h2>Hello, World I'm Paul!</h2>

            <div id="headshot">
                <picture>
                    <img src="/images/paulImage.jpg" alt="headshot" />
                </picture>
            </div>

            <div className="bio">
                <p>
                    I am a software engineer who has an Associate's Degree in
                    Computer Science from Catawba Valley Community College. I have experience in
                    front-end web development using React, TypeScript, HTML, CSS, and JavaScript. I 
                    also love to work on game developement projects using Unity,C#, Godot, and GDScript. 
                    I also have a background in information techonology support and customer service.
                </p>
                <br />
                <p>
                    Outside of software development, I love to spend time with my wife and son, play video games, and watch sports.  
                    I also enjoy serving in my church as a youth group leader!
                </p>
            </div>

            <div className="social-links">
                <a href="https://www.instagram.com/paulrodriguez20/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
                <a href="https://github.com/Paulrod20" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="https://www.facebook.com/pauly.rodriguez.923/" target="_blank" rel="noopener noreferrer">
                    <FaFacebook />
                </a>
                <a href="https://www.linkedin.com/in/paul-rodriguez-452640319" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
            </div>
        </section>
    )
}

export default AboutSection