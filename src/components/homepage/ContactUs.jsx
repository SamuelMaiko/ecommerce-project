import React from "react";

const ContactUs = () => {
  return (
    <div
      id="contact"
      className="flex-1 w-full md:h-[30rem] pb-[3rem] flex flex-col items-center"
    >
      <h1 className="text-xl font-medium font-heading mb-4 text-center">
        Contact Us
      </h1>
      {/* <h3>Contact Us</h3> */}
      <ul>
        <li>Email: info@example.com</li>
        <li>Phone: +1234567890</li>
        <li>Address: 123 Main Street, Nairobi, Kenya</li>
      </ul>
    </div>
  );
};

export default ContactUs;
