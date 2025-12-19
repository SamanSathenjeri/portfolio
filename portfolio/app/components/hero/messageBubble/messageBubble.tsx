import Image from "next/image";
import bubble from "../../../../public/messageBubble.jpg";
import LoudPop from "./loudPop";

const MessageBubbleSection = () => {
  return (
    <LoudPop>
      <div>
        <div className="relative rounded-[20px] overflow-hidden max-w-[150px] mt-auto scale-200">
          <Image
            src={bubble}
            alt="Message Bubble"
            width={150}
            height={250}
            className="relative z-0 select-none"
          />

          <div className="absolute inset-0 z-10 flex items-center justify-center px-2 pointer-events-none">
            <h2 className="text-white text-[12.5px] font-medium tracking-[-0.01em] leading-snug  translate-x-[-4px]">
              Software Developer
            </h2>
          </div>
        </div>
      </div>
    </LoudPop>
  );
};

export default MessageBubbleSection;
