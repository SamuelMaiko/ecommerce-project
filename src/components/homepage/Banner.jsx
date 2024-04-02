import React from "react";
import salah from "../../assets/dumper.jpg";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  const bannerStyles = {
    // backgroundColor:"red"
    background: `linear-gradient(to bottom, #2E4A62, rgba(0,0,0,0.05)), url(${salah})`,
    backgroundSize: "cover",
    backgroundPosition: "bottom",
    color: "#ffffff",
  };

  return (
    <div className="w-[90%] mx-auto mt-5">
      <div
        style={bannerStyles}
        className="relative py-[40px] md:py-[100px] w-full md:h-[500px] rounded-lg shadow-[2px_2px_4px_rgba(0,0,0,0.1)] "
      >
        <h1 className="text-[24px] md:text-[36px] mb-[14px] md:mb-[20px] font-heading font-bold text-center md:mt-5">
          Discover the Finest Raw Materials for Your Industry
        </h1>
        <p className="text-[14px] md:text-[20px] md:mb-[30px] font-body text-center">
          Explore our wide range of high-quality raw materials sourced from
          trusted suppliers around the globe.
        </p>
        <div className="w-full flex flex-col items-center">
          <button
            onClick={() => navigate("/products")}
            className="inline bg-accent text-[14px] md:text-[18px] hover:text-[#17212B] text-[#2E4A62] transition-colors duration-300 rounded-lg py-2 px-3 mt-4 font-button"
          >
            Shop Now
          </button>
          <a href="#about">
            <button className="relative button flex items-center gap-2 pr-10 bg-accent text-[14px] md:text-[18px] hover:text-[#17212B] hover:bg-accent text-[#2E4A62] transition-all duration-300 rounded-lg py-2 px-3 mt-4 font-button">
              Learn more
              {/* ______ arrow icon __________ */}
              <span className="arrow flex items-center justify-center ">
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
          </a>
        </div>
      </div>

      {/* <div className="absolute bottom-11 left-1/2 -translate-x-1/2 flex gap-3">
        <p className="bg-white w-[0.5rem] h-[0.5rem] rounded-full hover:scale-125 transition-all duration-300 cursor-pointer"></p>
        <p className="bg-white w-[0.5rem] h-[0.5rem] rounded-full hover:scale-125 transition-all duration-300 cursor-pointer"></p>
        <p className="bg-white w-[0.5rem] h-[0.5rem] rounded-full hover:scale-125 transition-all duration-300 cursor-pointer"></p>
      </div> */}
    </div>
  );
};

export default Banner;
