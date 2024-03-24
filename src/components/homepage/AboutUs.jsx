import React from "react";
import OurStory from "./OurStory";
import ValueProposition from "./ValueProposition";

const AboutUs = () => {
  return (
    <div
      id="about"
      className="w-[90%] bg-[$f9f9f9] bg-[#ffffe6] rounded-lg p-[40px] shadow-[0_0_10px_rgba(0,0,0,0.1)] mx-auto mt-14"
    >
      <h1 className="text-2xl font-semibold text-[#28A745] font-heading mb-8">
        About Us
      </h1>
      <div className="flex gap-8">
        <OurStory />
        <ValueProposition />
      </div>
      <button className="relative flex items-center gap-2 bg-accent text-[18px] hover:text-[#17212B] text-[#2E4A62] transition-colors duration-300 font-button border-none rounded-lg px-[20px] py-[10px] shadow-[2px_2px_4px_rgba(0,0,0,0.15)]">
        Explore Our Commitment
        {/* ______ arrow icon __________ */}
        <span className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </span>
      </button>
    </div>
  );
};

export default AboutUs;
