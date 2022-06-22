import "./App.css";
import Facebook from "./assets/images/Facebook-Icon.svg";
import Github from "./assets/images/GitHub-Icon.svg";
import Hero from "./assets/images/hero-img.svg";
import Instagram from "./assets/images/Instagram-Icon.svg";
import LinkedIn from "./assets/images/linkedin.svg";
import Mail from "./assets/images/Mail.svg";
import Twitter from "./assets/images/Twitter-Icon.svg";

const App = () => {
    return (
        <section className="main">
            <div className="main__image">
                <img className="hero-img" src={Hero} alt="Hero Image" />
            </div>
            <div className="main__contents">
                <h2 className="main-name">Laura Smith</h2>
                <h3 className="main-role">Frontend Developer</h3>
                <p className="main-website">laurasmith.website</p>
                <div className="main-buttons">
                    <button className="main-email--btn"> <img className="contact-img mail-img" src={Mail} alt="Mail" /> Email</button>
                    <button className="main-linkedin--btn"><img className="contact-img linkedin-img" src={LinkedIn} alt="LinkedIn" />LinkedIn</button>
                </div>
                <div className="main--description">
                    <h4>About</h4>
                    <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                    <h4>Interests</h4>
                    <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
                </div>
            </div>
            <footer className="footer">
                <div className="footer__container">
                    <img className="footer-icons" src={Twitter} alt="Twitter" />
                    <img className="footer-icons" src={Facebook} alt="Facebook" />
                    <img className="footer-icons" src={Instagram} alt="Instagram" />
                    <img className="footer-icons" src={Github} alt="Github" />
                </div>
            </footer>
        </section>
    )
}

export default App