import React from "react";
import { motion } from "framer-motion";
import BackgroundImage from "../assets/hero1_background.jpeg";
import HookText from "../components/images/hero/HookText";
import LottieComponent from "../components/LottiePlayer";

const Hero = () => {
  const fadeIn = {
    initial: {
      y: 50, // Start below by 50px
      opacity: 0,
    },
    animate: {
      y: 0, // Move to its original position
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };


  const lottieFromLeft = {
    initial: {
      x: '-100%', // Start outside the screen on the left
      opacity: 0,
    },
    animate: {
      x: 0, // Move to its original position
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <>
      <div
        id="hero"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
        className="text-center bg-gradient-to-r from-[#171717] to-[#242424] h-screen bg-cover bg-left"
      >
        <header className="flex flex-col columns-1 justify-center items-center h-full">
          <motion.div
            className="mb-80"
            variants={fadeIn}
            initial="initial"
            animate="animate"
          >
            <HookText />
          </motion.div>
          <motion.div  variants={lottieFromLeft}
            initial="initial"
            animate="animate" className="absolute w-11/12 xs:w-9/12 sm:w-96 bottom-6 xs:bottom-8 sm:bottom-12">
            <LottieComponent />
          </motion.div>
        </header>
      </div>
    </>
  );
};

export default Hero;
