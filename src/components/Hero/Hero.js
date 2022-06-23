import HeroImage from "../../assets/images/images.svg";
import "./Hero.css";

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero__image">
                <img className="hero-img" src={HeroImage} alt="Hero Image" />
            </div>
        </section>
    )
}

export default Hero