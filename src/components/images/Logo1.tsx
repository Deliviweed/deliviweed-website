import React from "react";
import logo from "../../assets/Logo2.png";

interface LogoProps {
  width?: number;
}

const Logo = ({ width = 500 }: LogoProps) => {
  return (
    <>
      <img src={logo} width={width} alt="Deliviweed Logo"></img>
    </>
  );
};

export default Logo;
