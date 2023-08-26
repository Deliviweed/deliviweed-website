import React, { useEffect, useState } from "react";
import Logo from "../images/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHelicopter,
  faRoute,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

interface HeaderProps {
  props?: any;
}

const Header = ({ props }: HeaderProps) => {
  const logoAnimation = {
    initial: {
      x: -100, // Start 100 pixels to the left
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

  const menuAnimation = {
    initial: {
      x: 100, // Start 100 pixels to the right
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

  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isMobileView, setIsMobileView] = useState<boolean>(
    window.innerWidth <= 768
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobileView(true);
      } else {
        setIsMobileView(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const renderMenu = () => {
    if (isMobileView) {
      return (
        <li>
          <details>
            <summary></summary>
            <ul className="p-2 bg-base-100 right-2">
              <li>
                <a href="#about" className="flex gap-1">
                  <FontAwesomeIcon icon={faHelicopter} />
                  About
                </a>
              </li>
              <li>
                <a href="#roadmap" className="flex gap-1">
                  <FontAwesomeIcon icon={faRoute} />
                  Roadmap
                </a>
              </li>
              <li>
                <a
                  href="mailto:barrettstubbs@deliviweed.com"
                  className="flex gap-1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faEnvelope} />
                  Contact
                </a>
              </li>
            </ul>
          </details>
        </li>
      );
    } else {
      return (
        <>
          <li>
            <a href="#about" className="flex gap-1">
              <FontAwesomeIcon icon={faHelicopter} />
              About
            </a>
          </li>
          <li>
            <a href="#roadmap" className="flex gap-1">
              <FontAwesomeIcon icon={faRoute} />
              Roadmap
            </a>
          </li>
          <li>
            <a
              href="mailto:barrettstubbs@deliviweed.com"
              className="flex gap-1"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faEnvelope} />
              Contact
            </a>
          </li>
        </>
      );
    }
  };

  return (
    <>
      <div
        className={`navbar fixed top-0 lg:px-52 transition-all duration-300 z-50 ${
          isScrolled ? "bg-opacity-60 backdrop-blur-md" : "bg-opacity-100"
        }`}
      >
        <motion.div
          className="flex-1"
          variants={logoAnimation}
          initial="initial"
          animate="animate"
        >
          <a href="#hero">
            <Logo />
          </a>
        </motion.div>
        <motion.div
          className="flex-none"
          variants={menuAnimation}
          initial="initial"
          animate="animate"
        >
          <ul className="menu menu-horizontal px-1 font-semibold gap-1">
            {renderMenu()}
          </ul>
        </motion.div>
      </div>
    </>
  );
};

export default Header;
