import Image from 'next/image';
import profilePic from "../../../../public/profilePic.jpeg";

const IconOneSection = () => {
    return (
        <section className="rounded-[20px] overflow-hidden max-w-[150px] h-auto ml-[20px] mt-auto">
            <Image
                src={profilePic}
                alt="Picture of the author"
                width={150}
                height={250}
            />
        </section>
    );
};

export default IconOneSection;