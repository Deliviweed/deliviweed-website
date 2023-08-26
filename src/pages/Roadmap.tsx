import React from "react";
import "./Roadmap.css";

const Roadmap = () => {
  const steps = [
    {
      title: "Secure Funding",
      icon: "🔒",
    },
    {
      title: "Develop MVP",
      icon: "🛠",
    },
    {
      title: "Dispensary POS Integration",
      icon: "💳",
    },
    {
      title: "Testing",
      icon: "🧪",
    },
    {
      title: "Application Launch",
      icon: "🚀",
    },
  ];

  const currentStep = 1;

  return (
    <div
      id="roadmap"
      className="h-screen bg-black flex items-center justify-center text-white p-6"
    >
      <div className="w-full max-w-md pt-10">
        <h2 className="text-xxxl font-bold mb-12 text-center">Roadmap</h2>
        <div className="flex flex-col items-center">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center mb-6">
              <div
                className={`w-12 h-12 mb-2 rounded-full flex items-center justify-center text-sm ${
                  index <= currentStep
                    ? "bg-gradient-to-r from-[#01ff8f] to-[#00a1fe] shadow-md"
                    : "bg-gray-900"
                }`}
              >
                <span className="text-xxl">{step.icon}</span>
              </div>
              <p
                className={`text-base text-center ${
                  index <= currentStep ? "font-semibold" : "font-medium"
                }`}
              >
                {index === currentStep && <span className="bounce">→ </span>}
                {step.title}
                {index === currentStep && <span className="bounce"> ←</span>}
              </p>
              {index !== steps.length - 1 && (
                <div
                  className={`w-1 h-6 mt-2 ${
                    index < currentStep
                      ? "bg-gradient-to-r from-[#01ff8f] to-[#00a1fe]"
                      : "bg-gray-800"
                  }`}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
