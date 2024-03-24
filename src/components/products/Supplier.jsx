import React from "react";

const Supplier = () => {
  return (
    <div className="flex flex-col justify-center p-4">
      <h1 className="font-semibold text-center text-md mt-2 mb-4 text-[#28A745]">
        Supplier Information
      </h1>
      <div>
        <p>
          <span className="font-medium text-sm"> Name:</span>{" "}
          <span className="text-sm text-gray-600">EcoMines Inc.</span>
        </p>
        <p>
          <span className="font-medium text-sm"> Location:</span>{" "}
          <span className="text-sm text-gray-600">Denver, Colorado, USA</span>
        </p>
        <p>
          <span className="font-medium text-sm"> Partnership:</span>{" "}
          <span className="text-sm text-gray-600">5 years</span>
        </p>
        <p>
          <span className="font-medium text-sm"> Ethical Standards:</span>{" "}
          <span className="text-sm text-gray-600">
            EcoMines Inc. adheres to fair labor practices and environmentally
            sustainable mining techniques. They prioritize worker safety and
            community engagement.
          </span>
        </p>
      </div>
    </div>
  );
};

export default Supplier;
