import React from "react";
import { useMyGeneralContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";

const SupplierHeader = ({ name, email, image }) => {
  const { backendDomain } = useMyGeneralContext();
  const navigate = useNavigate();
  return (
    <div className="relative w-[90%] pt-[2rem] md:pt-4 mx-auto md:bg-blue-500 flex items-center">
      <button
        onClick={() => navigate(-1)}
        className="absolute -top-5 md:-left-12 -left-4 md:text-white text-blue-500 cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 md:w-10 h-8 md:h-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
          />
        </svg>
      </button>
      <div className="w-fit flex justify-center items-center gap-3">
        <div className="w-[7rem] h-[7rem] bg-white rounded-full overflow-hidden">
          <img
            src={`${backendDomain}${image}`}
            className="h-full object-cover object-center w-full"
            alt=""
          />
        </div>
        <div className="md:text-white text-black">
          <p>{name}</p>
          <p className="text-sm text-[#333333] md:text-gray-200">{email}</p>
        </div>
      </div>
      {/* _____ chat icon start  */}
      <div className=" absolute right-0 -bottom-8 flex items-center justify-center w-[4rem] h-[4rem] bg-[#f5f5f5] hover:bg-[#d1cfcfea] transition-colors duration-300  text-gray-600 rounded-full overflow-hidden shadow-[2px_2px_4px_rgba(0,0,0,0.15)] cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-7 h-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
          />
        </svg>
      </div>
      {/* _____ chat icon end  */}
    </div>
  );
};

export default SupplierHeader;
