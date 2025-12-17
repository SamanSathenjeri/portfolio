import Image from 'next/image';
import profilePic from "../../../../public/rutgers2.png";

const IconTwoSection = () => {
    return (
        <section className="icon-section-container">
            <Image
                src={profilePic}
                alt="Picture of the author"
                width={300}
                height={250}
                objectFit="cover"
                objectPosition="10% 10%"
            />
        </section>
    );
};

export default IconTwoSection;