import React, { useState } from "react";
import Image from "next/image";
import ravan_logo from "@/logos/ravan_logo.png";
import phone from "@/logos/phone.png";
import { COMPANY_INFO } from "@/config.js";
import Email_logo from "@/logos/mail-01.svg";
const ContactUs = () => {
  const [firsval, setfirstVal] = useState("");
  const [lastval, setlastVal] = useState("");
  const [Phoneval, setPhonetVal] = useState("");
  const [emailval, setemailVal] = useState("");
  const [messageval, setMessagetVal] = useState("");

  const changefirst = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setfirstVal(event.target.value);
  };

  const changelst = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setlastVal(event.target.value);
  };

  const changephone = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setPhonetVal(event.target.value);
  };

  const changeemail = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setemailVal(event.target.value);
  };

  const changeMessage = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setMessagetVal(event.target.value);
  };

  const handleSubmit = () => {
    if (firsval && lastval && Phoneval && emailval && messageval) {
      fetch("/api/email", {
        method: "POST",
        body: JSON.stringify({
          firstname: firsval,
          lastname: lastval,
          phone: Phoneval,
          email: emailval,
          message: messageval,
        }),
      });

      // Clear the form fields after submission
      setfirstVal("");
      setlastVal("");
      setPhonetVal("");
      setemailVal("");
      setMessagetVal("");
    } else {
      alert("Please fill in all the fields before submitting.");
    }
  };
  return (
    <div className="flex flex-col items-center justify-center mt-24  bg-black">
      <h2 className=" text-white text-start font-semibold text-5xl ">
        Contact Us
      </h2>
      <div className="pb-10">
        <div className="flex pt-10">
          <Image
            src={ravan_logo}
            alt="ravan logo small with black background"
            height={70}
            width={70}
          />
          <div className="bg-white w-[0.1vw] h-[10vh] mx-5"></div>
          <div className="flex flex-col space-y-5">
            <div className="flex gap-3">
              <Image src={phone} alt="phone icon for phone number" />
              <p className="text-white">{COMPANY_INFO.phoneNumber}</p>
            </div>
            <div className="flex gap-3">
              <Image src={Email_logo} alt="mail icon for our email" />
              <p className="text-white">{COMPANY_INFO.email}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center w-[70vw] h-full">
        <div className="flex flex-col space-y-6 w-full flex-grow">
          <div className="flex space-x-6">
            <input
              type="text"
              value={firsval}
              onChange={changefirst}
              placeholder="First Name"
              name="first"
              className="w-full rounded-xl border-2 border-[#BCB9B9] p-4 focus:border-[#2F3757]"
            />
            <input
              type="text"
              placeholder="Last Name"
              onChange={changelst}
              value={lastval}
              name="last"
              className="w-full rounded-xl border-2 border-[#BCB9B9] p-4 focus:border-[#2F3757]"
            />
          </div>
          <div className="flex space-x-6">
            <input
              type="text"
              placeholder="Email"
              onChange={changeemail}
              value={emailval}
              name="email"
              className="w-full rounded-xl border-2 border-[#BCB9B9] p-4 focus:border-[#2F3757]"
            />
            <input
              type="text"
              placeholder="Phone Number"
              value={Phoneval}
              onChange={changephone}
              name="phone"
              className="w-full rounded-xl border-2 border-[#BCB9B9] p-4 focus:border-[#2F3757]"
            />
          </div>
          <textarea
            placeholder="Message"
            value={messageval}
            onChange={changeMessage}
            name="message"
            className="w-full rounded-xl border-2 border-[#BCB9B9] p-4 flex-grow resize-none h-[30vh] focus:border-[#2F3757]"
          />
        </div>
      </div>
      <button
        onClick={handleSubmit}
        disabled={!firsval || !lastval || !Phoneval || !emailval || !messageval}
        className={`w-[15vw] h-[9vh] rounded-[28px] mb-10 mt-10 transition-all duration-300 ease-in-out
    ${
      firsval && lastval && Phoneval && emailval && messageval
        ? "bg-[#6EACDA] text-white hover:bg-[#5a9bca] focus:bg-[#4e8dbb] active:bg-[#4a85b2] cursor-pointer text-shadow-lg"
        : "bg-gray-400 text-gray-300 cursor-not-allowed"
    }`}
      >
        Submit
      </button>
    </div>
  );
};

export default ContactUs;
