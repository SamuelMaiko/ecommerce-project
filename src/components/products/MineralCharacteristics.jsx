import React from "react";

const MineralCharacteristics = ({ OnactiveSection }) => {
  return (
    <div className={`${OnactiveSection == 0 ? "" : "hidden"} w-full p-4`}>
      <h1 className="font-semibold font-heading text-[15px] mb-2">
        Mineral characteristics
      </h1>
      <p>
        <p>
          <span className="font-medium text-sm"> Color:</span>{" "}
          <span className="text-sm text-gray-600"> White to gray</span>
        </p>
        <p>
          <span className="font-medium text-sm"> Hardness:</span>{" "}
          <span className="text-sm text-gray-600"> 7 (on Mohs scale)</span>
        </p>
        <p>
          <span className="font-medium text-sm"> Composition:</span>{" "}
          <span className="text-sm text-gray-600">
            Composed primarily of quartz
          </span>
        </p>
        <p>
          <span className="font-medium text-sm"> Origin:</span>{" "}
          <span className="text-sm text-gray-600">
            Sourced from quarries in the Rocky Mountains region of the United
            States
          </span>
        </p>
        <p>
          <span className="font-medium text-sm"> Sustainability:</span>{" "}
          <span className="text-sm text-gray-600">
            {" "}
            Ethically sourced with minimal environmental impact; supports local
            communities through responsible mining practices.
          </span>
        </p>
      </p>
    </div>
  );
};

export default MineralCharacteristics;
