import HelloSection from "./hello/hello";
import IconOneSection from "./iconPictures/icon1";
import IconTwoSection from "./iconPictures/icon2";
import LocationSection from "./location/location";
import ScrollSection from "./scroll/scroll";
import "./hero.css";

const HeroSection = () => {
    return (
        <section className="hero-section-container">
            <div className="left-sided-hero">
                <div className="left-sided-padding">
                    <div className="lottie-trim-container">
                        <HelloSection />
                    </div>
                    <div>
                        <h1 className="main-greeting">I'm Saman Sathenjeri!</h1>
                        {/* <h2 className="secondary-greeting">Software Engineer/Problem Solver</h2> */}
                        <ul className="contact-list">
                            <li className="list-el linkedin-link"><a href="https://www.linkedin.com/in/saman-sathenjeri/" target="_blank">Linkedin</a></li>
                            <li className="list-el email-link"><a href="mailto:saman.m.sath@gmail.com" target="_blank">Email</a></li>
                            <li className="list-el x-link"><a href="https://x.com/sathenjeri" target="_blank">Twitter</a></li>
                            <li className="list-el resume-link"><a href="https://www.example.com" target="_blank">Blog</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="right-sided-hero">
                <LocationSection />
                <div className="image-1">
                    <IconOneSection />
                </div>
                <div className="image-2">
                    <IconTwoSection />
                </div>
            </div>
            <div className="scroll-hero">
                <ScrollSection />
            </div>
        </section>
    );
};

export default HeroSection;