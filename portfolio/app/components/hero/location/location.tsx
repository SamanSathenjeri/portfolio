import Image from "next/image";
import locationPic from "../../../../public/location.png";
import locationIndicator from "../../../../public/bluedot.png";

const LocationSection = () => {
  return (
    <div
      className="
      relative mx-auto w-full max-w-4xl aspect-[5/4] md:aspect-video 
      
      overflow-hidden rotate-2 md:rotate-3 rounded-[28px] 
      shadow-[0_20px_40px_rgba(0,0,0,0.45)]
      transition-all duration-300 ease-in-out
      hover:rotate-0 hover:-translate-y-4
      hover:shadow-2xl hover:shadow-cyan-400/50
    "
    >
      <Image
        src={locationPic}
        alt="Map showing New York"
        fill
        priority
        className="
          object-cover
          scale-[1.05]
        "
        style={{
          objectPosition: "90% 50%",
        }}
      />

      <div
        className="
        pointer-events-none
        absolute
        left-[51%]
        top-[40%] md:top-[55%] 
        -translate-x-1/2
        -translate-y-1/2
        w-24 md:w-32"
      >
        <Image
          src={locationIndicator}
          alt="Current location indicator"
          width={130}
          height={130}
          className="drop-shadow-[0_6px_12px_rgba(0,0,0,0.35)]"
        />
      </div>

      <div className="absolute bottom-0 w-full">
        <div className="relative overflow-hidden rounded-b-[28px]">
          <div className="bg-black/20 backdrop-blur-[22px]">
            <div className="absolute inset-x-0 top-0 h-px bg-white/20" />
            <div className="relative px-5 py-4 md:px-6 md:py-5">
              <p className="text-[10px] md:text-[11px] tracking-wide text-white/70 uppercase">
                Currently based in
              </p>
              <p className="mt-0.5 text-lg md:text-[22px] font-semibold leading-tight text-white">
                New York, United States
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationSection;
