import React from "react";
import { LinearTextGradient } from "react-text-gradients-and-animations";

interface HookTextProps {
  props?: any;
}

const HookText = ({ props }: HookTextProps) => {
  return (
    <>
      <div className="xs:w-[450px] px-2 sm:px-0">
        <h1 className="text-[36px]  xxs:text-[38px] xs:text-[44px] sm:text-4xl md:text-5xl font-bold text-center text-[#ffffff] flex-col columns-1">
          <span className="text-neutral-400 block">From</span>
          <span>
            Dispensary to Doorstep in{" "}
            <LinearTextGradient
              animate={true}
              animateDirection="horizontal"
              animateDuration={3}
              angle={90}
              colors={["#EB4237", "#FAB048"]}
            >
              Minutes
            </LinearTextGradient>
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-center text-neutral-400">
          Secure Drone Delivery as a Service with assured identity verification
        </p>
      </div>
    </>
  );
};

export default HookText;
