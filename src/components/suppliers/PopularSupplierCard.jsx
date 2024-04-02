import React from "react";
import { useMyGeneralContext } from "../../context/AppContext";
import { NavLink } from "react-router-dom";

const PopularSupplierCard = ({ id, name, image }) => {
  const { backendDomain } = useMyGeneralContext();
  return (
    <div className="group before:hover:scale-95 before:hover:w-80 before:hover:h-44 before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-80 before:h-24 before:rounded-t-2xl before:bg-gradient-to-bl from-sky-100 via-orange-200 to-accent before:absolute before:top-0 w-80 h-72 relative bg-slate-50 flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden">
      <div className="w-28 h-28 bg-blue-700 mt-8 rounded-full overflow-hidden border-4 border-slate-50 z-10 group-hover:scale-150 group-hover:-translate-x-24  group-hover:-translate-y-20 transition-all duration-500">
        <img
          src={`${backendDomain}${image}`}
          className="h-full object-cover object-center w-full"
          alt=""
        />
      </div>
      <div className="z-10  group-hover:-translate-y-10 transition-all duration-500">
        <span className="text-lg md:text-xl font-semibold">{name}</span>
        <p>Supplier</p>
      </div>
      <a href={`/suppliers/${id}`}>
        <button className="bg-accent px-4 py-1 text-[#333] font-button font-medium text-md md:text-lg rounded-md z-10 hover:scale-125 transition-all duration-500 hover:text-slate-900">
          Follow
        </button>
      </a>
    </div>
  );
};

export default PopularSupplierCard;
