import React from "react";
import DroneCannabis from "../assets/CloudCannabis.jpg";
const About = () => {
  return (
    <section
      id="about"
      className="h-screen bg-gray-900 text-white py-20 flex items-center justify-center  z-0"
    >
      <div className="container mx-auto px-4 md:px-0 flex flex-col columns-1 items-center justify-center">
        <div className="card w-96 bg-base-100 shadow-xl ">
          <figure className="px-10 pt-10">
            <img
              src={DroneCannabis}
              alt="Drone delivering cannabis"
              className="w-72 h-auto shadow-xl z-0 rounded-xl"
            />
          </figure>
          <div className=" py-4 text-zinc-300 w-full card-body px-6 pb-6">
            <h2 className="card-title mb-2">About Us</h2>
            <div className="card-actions justify-end">
              <p className="mb-4  font-normal">
                We are reshaping how users access cannabis.
                Through our platform, users can effortlessly browse and select cannabis products from a myriad of local dispensaries.
              </p>
              <p className="mb-4">
                In a matter of minutes after ordering, our state-of-the-art
                drones, equipped with our patented safes, will be airborne,
                heading to your location.
              </p>

              <p>
                Our commitment to safety and security is paramount. Thus, upon
                arrival, biometric verification ensures the product lands into
                the rightful hands – yours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
