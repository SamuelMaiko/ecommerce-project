import React from "react";
import Supplier from "./Supplier";
import SourcingDetails from "./SourcingDetails";

const SupplierAndSourcing = ({ OnactiveSection }) => {
  return (
    <div className={`${OnactiveSection == 2 ? "" : "hidden"} grid grid-cols-2`}>
      <div>
        <Supplier />
      </div>
      <div>
        <SourcingDetails />
      </div>
    </div>
  );
};

export default SupplierAndSourcing;
