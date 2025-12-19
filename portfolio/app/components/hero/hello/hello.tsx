"use client";

import React from "react";
import dynamic from "next/dynamic";
import animationData from "../../../../public/hello.json";

const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  {
    ssr: false,
    loading: () => <div style={{ height: "300px" }}></div>,
  }
);

const LottieAnimation: React.FC = () => {
  return (
    <div className="relative mx-auto h-[90px] md:h-[230px] w-full md:max-w-[700px] aspect-[16/5] md:aspect-video overflow-hidden rounded-xl">
      <Player
        id="lottie-player-element"
        autoplay
        loop
        keepLastFrame
        src={animationData}
        className="flex-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[0.4] md:scale-[0.6] xl:scale-100"
        style={{ height: "1700px", 
                width: "1700px"}}
      />
    </div>
  );
};

export default LottieAnimation;
