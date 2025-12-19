import HelloSection from "./hello/hello";
import IconOneSection from "./iconPictures/icon1";
import IconTwoSection from "./iconPictures/icon2";
import LocationSection from "./location/location";
import ScrollSection from "./scroll/scroll";
import OpenToHireSection from "./openToHire/openHire";
import MessageBubbleSection from "./messageBubble/messageBubble";
import "./hero.css";
import "tailwindcss";

const HeroSection = () => {
  return (
    <section className="flex h-[85vh] w-full bg-[#f5f5f7] flex-col md:flex-row justify-start items-start pt-13 ">
      <div className="md:w-45/100 md:p-15">
        <HelloSection />
        <div>
          <h1 className="main-greeting font-[inter] text-[40px] xl:text-[50px] 2xl:text-[60px]">
            I'm Saman Sathenjeri!
          </h1>
          <ul className="flex flex-col md:flex-row list-none gap-[clamp(1rem,3vw,4rem)]">
            <li className="list-el linkedin-link">
              <a
                href="https://www.linkedin.com/in/saman-sathenjeri/"
                target="_blank"
              >
                Linkedin
              </a>
            </li>
            <li className="list-el email-link">
              <a href="mailto:saman.m.sath@gmail.com" target="_blank">
                Email
              </a>
            </li>
            <li className="list-el x-link">
              <a href="https://x.com/sathenjeri" target="_blank">
                Twitter
              </a>
            </li>
            <li className="list-el resume-link">
              <a href="https://www.example.com" target="_blank">
                Blog
              </a>
            </li>
          </ul>
          <OpenToHireSection />
        </div>
      </div>

      <div className="md:w-55/100">
        <div className="flex items-center justify-center w-full min-h-[400px] p-8 md:scale-80 md:pt-25">
          <LocationSection />
        </div>
        <div className="image-1 inline-block"><IconOneSection /></div>
        <div className="image-2 inline-block"><IconTwoSection /></div>
        <div className="message-bubble"><MessageBubbleSection /></div>
      </div>
      <div className="scroll-hero">
        <ScrollSection />
      </div>
    </section>
  );
};

export default HeroSection;
