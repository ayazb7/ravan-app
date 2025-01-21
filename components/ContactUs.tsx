"use client";
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
    <>
      <div className="md:flex hidden md:flex-col items-center  justify-center mt-24  bg-black">
        <h2 className=" text-white text-start font-semibold text-4xl ">
          Contact Us
        </h2>
        <div className="pb-10">
          <div className="flex pt-10">
            <Image
              src={ravan_logo}
              alt="ravan logo small with black background"
              height={50}
              width={80}
            />
            <div className="bg-white w-[0.1vw] h-[10vh] mx-5"></div>
            <div className="flex flex-col space-y-5">
              <div className="flex gap-3">
                <Image src={phone} alt="phone icon for phone number" />
                <a
                  href={`tel:${COMPANY_INFO.phoneNumber}`}
                  className="text-white"
                >
                  {COMPANY_INFO.phoneNumber}
                </a>
              </div>
              <div className="flex gap-3">
                <Image src={Email_logo} alt="mail icon for our email" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-white">
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center w-[80vw] md:w-[60vw] h-full">
          <div className="flex flex-col space-y-6 w-full flex-grow">
            <div className="flex  space-x-6">
              <input
                type="text"
                value={firsval}
                onChange={changefirst}
                placeholder="First Name"
                name="first"
                className="w-full h-[5vh] md:h-auto rounded-xl border-2 border-[#BCB9B9] p-4 focus:border-[#2F3757]"
              />
              <input
                type="text"
                placeholder="Last Name"
                onChange={changelst}
                value={lastval}
                name="last"
                className="w-full h-[5vh] md:h-auto rounded-xl border-2 border-[#BCB9B9] p-4 focus:border-[#2F3757]"
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
          disabled={
            !firsval || !lastval || !Phoneval || !emailval || !messageval
          }
          className={`md:w-[15vw] w-[30vw] h-[7vh] rounded-[28px] mb-10 mt-10 transition-all duration-300 ease-in-out
    ${
      firsval && lastval && Phoneval && emailval && messageval
        ? "bg-[#6EACDA] text-white hover:bg-[#5a9bca] focus:bg-[#4e8dbb] active:bg-[#4a85b2] cursor-pointer text-shadow-lg"
        : "bg-gray-400 text-gray-300 cursor-not-allowed"
    }`}
        >
          Submit
        </button>
      </div>
      <div className="flex flex-col md:hidden items-center pb-5  justify-center mt-24 bg-black px-6 md:px-12">
        <h2 className="text-white text-start font-semibold text-4xl mb-8">
          Contact Us
        </h2>
        <div className="pb-10">
          <div className="flex flex-col items-center space-y-6">
            <div className="flex items-center space-x-5">
              <Image
                src={ravan_logo}
                alt="ravan logo small with black background"
                height={50}
                width={70}
              />
              <div className="bg-white w-[0.1vw] h-[10vh]"></div>
              <div className="flex flex-col space-y-5">
                <div className="flex gap-3">
                  <Image src={phone} alt="phone icon for phone number" />
                  <a
                    href={`tel:${COMPANY_INFO.phoneNumber}`}
                    className="text-white"
                  >
                    {COMPANY_INFO.phoneNumber}
                  </a>
                </div>
                <div className="flex gap-3">
                  <Image src={Email_logo} alt="mail icon for our email" />
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-white"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col w-full max-w-xl space-y-6">
          <div className="flex flex-col">
            <label className="text-black font-medium mb-2" htmlFor="firstName">
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              value={firsval}
              onChange={changefirst}
              placeholder="First Name"
              className="w-[80vw] md:h-auto text-black h-[6vh] rounded-xl border-2 border-[#BCB9B9] p-4 focus:border-[#2F3757]"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-black font-medium mb-2" htmlFor="lastName">
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              value={lastval}
              onChange={changelst}
              placeholder="Last Name"
              className="w-[80vw] text-black rounded-xl md:h-auto h-[6vh]  border-2 border-[#BCB9B9] p-4 focus:border-[#2F3757]"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-black font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={emailval}
              onChange={changeemail}
              placeholder="Email"
              className="w-[80vw] rounded-xl text-black md:h-auto h-[6vh]  border-2 border-[#BCB9B9] p-4 focus:border-[#2F3757]"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-black font-medium mb-2" htmlFor="phone">
              Phone Number
            </label>
            <input
              id="phone"
              type="text"
              value={Phoneval}
              onChange={changephone}
              placeholder="Phone Number"
              className="w-[80vw] rounded-xl text-black md:h-auto h-[6vh]  border-2 border-[#BCB9B9] p-4 focus:border-[#2F3757]"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-black font-medium mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              value={messageval}
              onChange={changeMessage}
              placeholder="Message"
              className="w-[80vw] rounded-xl text-black border-2 border-[#BCB9B9] p-4 resize-none h-[20vh] focus:border-[#2F3757]"
            />
          </div>
        </div>
        <button
          onClick={handleSubmit}
          disabled={
            !firsval || !lastval || !Phoneval || !emailval || !messageval
          }
          className={`w-[40vw] items-center justify-center text-center md:w-auto md:h-auto h-[5vh] mt-6 rounded-[28px] transition-all duration-300 ease-in-out text-base ${
            firsval && lastval && Phoneval && emailval && messageval
              ? "bg-[#6EACDA] text-white hover:bg-[#5a9bca] focus:bg-[#4e8dbb] active:bg-[#4a85b2] cursor-pointer"
              : "bg-gray-400 text-gray-300 cursor-not-allowed"
          }`}
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default ContactUs;
