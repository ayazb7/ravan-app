import React, { useState } from "react";
import Image from "next/image";
import ravan_logo from "@/logos/ravan_logo.png";
import phone from "@/logos/phone.png";
import { COMPANY_INFO } from "@/config.js";
import Email_logo from "@/logos/mail-01.svg";

const ListProperty = () => {
  const [propertyType, setPropertyType] = useState("");
  const [numBeds, setNumBeds] = useState("");
  const [area, setArea] = useState("");
  const [emailval, setemailVal] = useState("");
  const [messageval, setMessagetVal] = useState("");

  // Handlers for input fields
  const changePropertyType = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setPropertyType(event.target.value);
  };

  const changeNumBeds = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    setNumBeds(event.target.value);
  };

  const changeArea = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setArea(event.target.value);
  };

  const changeEmail = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setemailVal(event.target.value);
  };

  const changeMessage = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setMessagetVal(event.target.value);
  };

  const handleSubmit = () => {
    if (propertyType && numBeds && area && emailval && messageval) {
      fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          propertyType: propertyType,
          numBeds: parseInt(numBeds), // Converting to number
          area: area,
          email: emailval, // Sending email
          message: messageval,
        }),
      });

      // Clear the form fields after submission
      setPropertyType("");
      setNumBeds("");
      setArea("");
      setemailVal("");
      setMessagetVal("");
    } else {
      alert("Please fill in all the fields before submitting.");
    }
  };

  return (
    <div className="flex flex-col mt-28 items-center justify-center ">
      <h2 className="text-white text-start font-semibold text-4xl pb-10">
        List Your Property
      </h2>
      <div className="flex flex-col items-center w-[60vw] h-full">
        <div className="flex flex-col space-y-6 w-full flex-grow">
          <div className="flex space-x-6">
            <input
              type="text"
              value={propertyType}
              onChange={changePropertyType}
              placeholder="Property Type"
              name="Property"
              className="w-full rounded-xl border-2 border-[#BCB9B9] p-4 focus:border-[#2F3757]"
            />
            <select
              value={numBeds}
              onChange={changeNumBeds}
              name="Beds"
              className="w-full rounded-xl border-2 border-[#BCB9B9] p-4 focus:border-[#2F3757]"
            >
              <option value="">Number of Beds</option>
              {Array.from({ length: 12 }, (_, i) => i + 1).map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>
          <div className="flex space-x-6">
            <input
              type="text"
              placeholder="Your Area"
              onChange={changeArea}
              value={area}
              name="Area"
              className="w-full rounded-xl border-2 border-[#BCB9B9] p-4 focus:border-[#2F3757]"
            />
          </div>
          <div className="flex space-x-6">
            <input
              type="email"
              placeholder="Your Email"
              onChange={changeEmail}
              value={emailval}
              name="email"
              className="w-full rounded-xl border-2 border-[#BCB9B9] p-4 focus:border-[#2F3757]"
            />
          </div>
          <textarea
            placeholder="Message"
            value={messageval}
            onChange={changeMessage}
            name="message"
            className="w-full rounded-xl border-2 border-[#BCB9B9] p-4 flex-grow resize-none h-[20vh] focus:border-[#2F3757]"
          />
        </div>
      </div>
      <button
        onClick={handleSubmit}
        disabled={
          !propertyType || !numBeds || !area || !emailval || !messageval
        }
        className={`w-[15vw] h-[9vh] rounded-[28px] mb-10 mt-10 transition-all duration-300 ease-in-out
                    ${
                      propertyType && numBeds && area && emailval && messageval
                        ? "bg-[#6EACDA] text-[#FFFFFF] hover:bg-[#5a9bca] focus:bg-[#4e8dbb] active:bg-[#4a85b2] cursor-pointer"
                        : "bg-gray-400 text-gray-300 cursor-not-allowed"
                    }`}
      >
        Submit
      </button>
    </div>
  );
};

export default ListProperty;
