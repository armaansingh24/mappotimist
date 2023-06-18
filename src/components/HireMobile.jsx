import React from 'react'
import { BsPersonFill } from "react-icons/bs";
import { RxDividerVertical } from "react-icons/rx";
import { HiOutlineMail } from "react-icons/hi";
import { GrAttachment } from "react-icons/gr";
import { MdOutlineMessage } from "react-icons/md";
import { useState, useRef } from "react";


const HireMobile = () => {
  const fileInputRef = useRef(null);
  const [error1, setError1] = useState("");
  const [error2, setError2] = useState("");
  const [error3, setError3] = useState("");
  const [error4, setError4] = useState("");
  const [error5, setError5] = useState("");
  const [error6, setError6] = useState("");
  const [error7, setError7] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    file: "",
    type: "",
    duration: "",
    summery: "",
  });

  function changeHandler(event) {
    console.log(formData);
    if (event.target.name === "file") {
      setFormData((prevData) => ({
        ...prevData,
        file: event.target.files[0], // Update file value with the selected file
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [event.target.name]: event.target.value,
      }));
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(error1);
    if (formData.name.trim() === "") {
      setError1("This field is necessary");
      return;
    }

    // Validate contact field
    if (formData.contact.trim() === "") {
      setError2("This field is necessary");
      return;
    }

    // Validate email field
    if (formData.email.trim() === "") {
      setError3("This field is necessary");
      return;
    }

    // Validate file field
    if (!formData.file) {
      setError4("This field is necessary");
      return;
    }

    // Validate type field
    if (formData.type.trim() === "" && accountType === "Hire Team") {
      setError5("This field is necessary");
      return;
    }

    // Validate duration field
    if (formData.duration.trim() === "" && accountType === "Hire Team") {
      setError6("This field is necessary");
      return;
    }

    // Validate summery field
    if (formData.summery.trim() === "") {
      setError7("This field is necessary");
      return;
    }
    console.log(formData);
    setError1("");
    setError2("");
    setError3("");
    setError4("");
    setError5("");
    setError6("");
    setError7("");

    setFormData({
      name: "",
      contact: "",
      email: "",
      file: "",
      type: "",
      duration: "",
      summery: "",
    });
  };
  const errorHandler = () => {
    setError1("");
    setError2("");
    setError3("");
    setError4("");
    setError5("");
    setError6("");
    setError7("");
  };

  const [accountType, setAccountType] = useState("Hire Team");

  const handleFileReset = () => {
    fileInputRef.current.value = ""; // Reset the value of the file input element
    setFormData((prevData) => ({
      ...prevData,
      file: "", // Reset the file value in the form data
    }));
  };

  return (
    <div className="w-screen h-scree relative z-30 ">
      <div className="w-[90%] mx-auto bg-white text-center rounded-3xl">
        <div className="flex items-center justify-center w-[90%] mx-auto flex-col">
          <div className="mt-10 flex gap-4 flex-col">
            <h2 className="text-4xl font-poppins text-transparent bg-gradient-to-b from-primary to-secondary bg-clip-text">
              Get In Touch
            </h2>
            <p className="text-sm font-poppins300 text-transparent bg-gradient-to-b from-primary to-secondary bg-clip-text">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
          <div className="bg-white w-[100%] flex items-center justify-center p-1 gap-x-1 my-4 mb-10 rounded-full shadow-[1px_4px_20px_-7px_rgba(0,0,0,0.6)]">
            <button
              className={`${
                accountType === "Hire Team"
                  ? "bg-gradient-to-r from-[#000046] to-[#1CB5E0] text-white font-semibold"
                  : "bg-white text-black"
              } py-2 px-5 rounded-full transition-all duration-200 w-full text-sm`}
              onClick={() => setAccountType("Hire Team")}
            >
              Hire Team
            </button>
            <button
              className={`${
                accountType === "Hire Individual Developer"
                  ? "bg-gradient-to-r to-[#000046] from-[#1CB5E0] text-white font-semibold"
                  : "bg-white text-black"
              } py-2 px-5 rounded-full transition-all duration-200 w-full text-sm`}
              onClick={() => setAccountType("Hire Individual Developer")}
            >
              Hire Individual
            </button>
          </div>
          <div className="w-full">
            <form className="p-5 flex flex-col gap-4" onSubmit={handleSubmit}>
              <div>
                <div className="flex items-center bg-richblack-800 rounded-full text-richblack-5 w-full p-1 gap-1 shadow-[1px_4px_20px_-7px_rgba(0,0,0,0.6)]">
                  <BsPersonFill className="text-[rgb(0,0,0,0.4)] text-2xl ml-2 mt-1" />
                  <RxDividerVertical className="text-4xl" />
                  <input
                    type="text"
                    name="name"
                    onChange={changeHandler}
                    placeholder="Name"
                    value={formData.name}
                    onClick={errorHandler}
                    className="h-full w-full rounded-full focus:outline-none text-lg px-1 bg-transparent"
                  />
                </div>
                {error1.length !== 0 && (
                  <p className="text-red-500 text-sm text-left rounded-lg relative z-10 flex items-center justify-start ml-5">
                    {error1}
                  </p>
                )}
              </div>
              <div>
                <div className="flex items-center bg-richblack-800 rounded-full text-richblack-5 w-full p-1 gap-1 shadow-[1px_4px_20px_-7px_rgba(0,0,0,0.6)]">
                  <BsPersonFill className="text-[rgb(0,0,0,0.4)] text-2xl ml-2 mt-1" />
                  <RxDividerVertical className="text-4xl" />
                  <input
                    type="number"
                    name="contact"
                    onChange={changeHandler}
                    placeholder="Contact no"
                    value={formData.contact}
                    onClick={errorHandler}
                    className="h-full w-full rounded-full focus:outline-none text-lg px-1 bg-transparent appearance-none custom-input"
                  />
                </div>
                {error2.length !== 0 && (
                  <p className="text-red-500 text-sm text-left rounded-lg relative z-10 flex items-center justify-start ml-5">
                    {error2}
                  </p>
                )}
              </div>
              <div>
                <div className="flex items-center bg-richblack-800 rounded-full text-richblack-5 w-full p-2 gap-1 shadow-[1px_4px_20px_-7px_rgba(0,0,0,0.6)]">
                  <HiOutlineMail className="text-[rgb(0,0,0,0.4)] text-2xl ml-2 mt-1" />
                  <RxDividerVertical className="text-4xl" />
                  <input
                    type="email"
                    name="email"
                    onChange={changeHandler}
                    placeholder="Email"
                    value={formData.email}
                    onClick={errorHandler}
                    className="h-full w-full rounded-full focus:outline-none text-lg px-1 bg-transparent"
                  />
                </div>
                {error3.length !== 0 && (
                  <p className="text-red-500 text-sm text-left rounded-lg relative z-10 flex items-center justify-start ml-5">
                    {error3}
                  </p>
                )}
              </div>
              <div>
                <div className="flex items-center bg-richblack-800 rounded-full text-richblack-5 w-full p-1 shadow-[1px_4px_20px_-7px_rgba(0,0,0,0.6)]">
                  <GrAttachment className="text-[rgb(0,0,0,0.4)] text-2xl ml-2 mt-1" />
                  <RxDividerVertical className="text-4xl translate-x-[0.4rem]" />
                  <input
                    type="file"
                    id="fileInput"
                    name="file"
                    className="hidden"
                    ref={fileInputRef}
                    onChange={changeHandler}
                  />
                  <div
                    htmlFor="fileInput"
                    className="w-full h-full cursor-pointer ml-3 -mt-2"
                    onClick={() => {
                      handleFileReset();
                      fileInputRef.current.click();
                      errorHandler();
                    }} // Open file selection dialog
                    // htmlFor="fileInput"
                    // className="w-full h-full cursor-pointer ml-3"
                  >
                    {formData.file !== "" ? (
                      <span className="text-gray-400 pointer-events-noneh-full w-full rounded-full focus:outline-none text-lg px-1 bg-transparentl -ml-16">
                        {formData.file.name}
                      </span>
                    ) : (
                      <span className="text-gray-400 pointer-events-none h-full w-full rounded-full focus:outline-none text-lg px-1 bg-transparent -ml-20">
                        {accountType === "Hire Team"
                          ? "Attach File"
                          : "Required Skills"}
                      </span>
                    )}
                  </div>
                </div>
                {error4.length !== 0 && (
                  <p className="text-red-500 text-sm text-left rounded-lg relative z-10 flex items-center justify-start ml-5">
                    {error4}
                  </p>
                )}
              </div>

              {accountType === "Hire Team" && (
                <div>
                  <div className="flex items-center bg-richblack-800 rounded-full text-richblack-5 w-full p-2 gap-1 shadow-[1px_4px_20px_-7px_rgba(0,0,0,0.6)]">
                    <BsPersonFill className="text-[rgb(0,0,0,0.4)] text-2xl ml-2 mt-1" />
                    <RxDividerVertical className="text-4xl" />
                    <input
                      type="text"
                      name="type"
                      onChange={changeHandler}
                      placeholder="Project Type"
                      value={formData.type}
                      onClick={errorHandler}
                      className="h-full w-full rounded-full focus:outline-none text-lg px-1 bg-transparent"
                    />
                  </div>
                  {error5.length !== 0 && (
                    <p className="text-red-500 text-sm text-left rounded-lg relative z-10 flex items-center justify-start ml-5">
                      {error5}
                    </p>
                  )}
                </div>
              )}
              {accountType === "Hire Team" && (
                <div>
                  <div className="flex items-center bg-richblack-800 rounded-full text-richblack-5 w-full p-2 gap-1 shadow-[1px_4px_20px_-7px_rgba(0,0,0,0.6)]">
                    <BsPersonFill className="text-[rgb(0,0,0,0.4)] text-2xl ml-2 mt-1" />
                    <RxDividerVertical className="text-4xl" />
                    <input
                      type="text"
                      name="duration"
                      onChange={changeHandler}
                      placeholder="Duration"
                      value={formData.duration}
                      onClick={errorHandler}
                      className="h-full w-full rounded-full focus:outline-none text-lg px-1 bg-transparent"
                    />
                  </div>
                  {error6.length !== 0 && (
                    <p className="text-red-500 text-sm text-left rounded-lg relative z-10 flex items-center justify-start ml-5">
                      {error6}
                    </p>
                  )}
                </div>
              )}
              <div>
                <div className="flex items-start bg-richblack-800 rounded-xl text-richblack-5 w-full  gap-1 shadow-[1px_4px_20px_-7px_rgba(0,0,0,0.6)]  h-[8rem]">
                  <MdOutlineMessage className="text-[rgb(0,0,0,0.4)] text-4xl ml-2 " />
                  <RxDividerVertical className="text-5xl -translate-x-1 -translate-y-2" />
                  <textarea
                    name="summery"
                    onChange={changeHandler}
                    placeholder="Summary of project"
                    value={formData.summery}
                    minLength={10}
                    maxLength={300}
                    onClick={errorHandler}
                    className="h-full w-screen focus:outline-none text-lg mr-20 resize-none"
                  />
                </div>
                {error7.length !== 0 && (
                  <p className="text-red-500 text-sm text-left rounded-lg relative z-10 flex items-center justify-start ml-5">
                    {error7}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="relative z-30 text-sm  h-fit bg-gradient-to-r from-[#000046] to-[#1CB5E0] hover:from-secondary hover:to-primary transition-all duration-1000 rounded-lg text-white font-poppins py-2 mt-8 sm:text-lg midxmd:mb-[0%]"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HireMobile