import React from "react";
import SendEmailForm from "./SendEmailForm";
import ContactUs from "./ContactUs";

const GetInTouch = () => {
  return (
    <div className="w-[90%] h-full mx-auto mt-14 ">
      <h1 className="text-2xl text-[#28A745] font-semibold font-heading mb-4">
        Get In Touch
      </h1>
      <div className="flex gap-8 pt-8">
        <SendEmailForm />

        <ContactUs />
      </div>
    </div>
  );
};

export default GetInTouch;
