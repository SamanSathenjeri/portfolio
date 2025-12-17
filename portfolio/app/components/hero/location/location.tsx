import Image from "next/image";
import locationPic from "../../../../public/location.png";
import locationIndicator from "../../../../public/bluedot.png";

const LocationSection = () => {
    return (
    <div className="relative h-[400px] w-[800px] overflow-hidden rotate-3 rounded-[28px] shadow-[0_20px_40px_rgba(0,0,0,0.45)]
      transition-all duration-300 ease-in-out
      hover:rotate-0
      hover:-translate-y-4
      hover:shadow-2xl hover:shadow-cyan-400/50
    ">

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

      <div className="
        pointer-events-none
        absolute
        left-[51%]
        top-[55%]
        -translate-x-1/2
        -translate-y-1/2
      ">
        <Image
          src={locationIndicator}
          alt="Current location indicator"
          width={130}
          height={130}
          className="drop-shadow-[0_6px_12px_rgba(0,0,0,0.35)]"
        />
      </div>

      <div className="absolute bottom-0 w-full">
        {/* Glass container */}
        <div className="relative overflow-hidden rounded-b-[28px]">

            {/* Glass base */}
            <div className="
            bg-neutral-900/0
            backdrop-blur-[22px]
            ">
            <div className="absolute inset-x-0 top-0 h-px bg-white/20" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
            <div className="relative px-6 py-5">
                <p className="text-[11px] tracking-wide text-white/70">
                Currently based in
                </p>
                <p className="mt-1 text-[22px] font-semibold leading-tight text-white">
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
