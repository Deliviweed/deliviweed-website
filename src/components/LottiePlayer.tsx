import React from "react";
import Lottie from "react-lottie";
import droneAnimation from "../animations/drone_animation.json";

const LottieComponent: React.FC = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: droneAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
      clearCanvas: true,
    },
  };

  return (
    <div>
      <Lottie options={defaultOptions} />
    </div>
  );
};

export default LottieComponent;
