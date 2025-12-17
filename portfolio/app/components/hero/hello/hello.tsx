"use client";

import React from "react";
import dynamic from 'next/dynamic';
import animationData from "../../../../public/hello.json";

const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  {
    ssr: false,
    loading: () => <div style={{ height: '300px' }}></div>,
  }
);

const LottieAnimation: React.FC = () => {
  return (
    <Player
      id="lottie-player-element"
      autoplay
      loop
      keepLastFrame
      src={animationData}
      style={{ height: "1750px", width: "1750px" }}
    />
  );
};

export default LottieAnimation;
