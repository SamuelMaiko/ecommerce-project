import React from "react";
import salah from "../../assets/salah.jpeg";
import { useMyGeneralContext } from "../../context/AppContext";

const CategoryTile = ({ name, description, image }) => {
  const { backendDomain } = useMyGeneralContext();

  const styles = {
    backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(255, 255, 255, 0.1)), url(${backendDomain}${image})`,
    backgroundSize: "100% 100%",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    objectFit: "cover",
    objectPosition: "center",
    /* Add other background properties as needed */
  };

  return (
    <div
      style={styles}
      className="relative w-full h-[13.3rem] transform  transition-all duration-300 ease-in-out hover:scale-105 shadow-[0_2px_4px_rgba(0,0,0,0.1)] hover:shadow-[0_0_10px_rgba(0,0,0,0.1)] rounded-sm cursor-pointer "
    >
      {/* <img style={styles.gradient} src={salah} className='w-full h-full' alt="" /> */}
      <div className="absolute bottom-0 right-1/2 translate-x-1/2 w-full pb-2">
        <h3 className=" text-lg font-heading font-semibold text-center text-[#F0F0F0]">
          {name}
        </h3>
        <h3 className=" text-xs font-body font-medium text-center text-[#fff]">
          {description}
        </h3>
      </div>
    </div>
  );
};

export default CategoryTile;
