import React from "react";

const SourcingDetails = () => {
  return (
    <div className="flex flex-col pl-2 p-4">
      <h1 className="font-semibold text-md text-center mt-2 text-[#28A745]">
        Sourcing details
      </h1>
      <div className="">
        <h2 className="ml-2 mt-4 font-semibold text-sm capitalize font-body text-[#555555]">
          origin of Raw Materials
        </h2>
        <div className="pl-7">
          <p>
            <span className="font-medium text-sm"> Quartzite:</span>{" "}
            <span className="text-sm text-gray-600">
              Sourced from quarries in Colorado and Utah, USA.
            </span>
          </p>
          <p>
            <span className="font-medium text-sm"> Hematite:</span>{" "}
            <span className="text-sm text-gray-600">
              DMined from deposits in Western Australia and Minas Gerais,
              Brazil.
            </span>
          </p>
          <p>
            <span className="font-medium text-sm"> Turquoise:</span>{" "}
            <span className="text-sm text-gray-600">
              Sourced from mines in Arizona, USA, and Nishapur, Iran
            </span>
          </p>
        </div>
        <p className="ml-2 ">
          <span className="font-semibold text font-body text-sm text-[#555555]">
            Certifications:
          </span>
          <span className="text-sm text-gray-600">
            Certified by the Responsible Mining Initiative (RMI) for sustainable
            mining practices and Fair Labor Association (FLA) for ethical labor
            standards.
          </span>
        </p>
      </div>
    </div>
  );
};

export default SourcingDetails;
