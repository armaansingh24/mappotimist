import React from "react";
import { BsPersonFill } from "react-icons/bs";
import { RxDividerVertical } from "react-icons/rx";
import { HiOutlineMail } from "react-icons/hi";
import { GrAttachment } from "react-icons/gr";
import { MdOutlineMessage } from "react-icons/md";
import { useState, useRef } from "react";
import ellips1 from "../assets/contactUs/ellips1.webp";
import ellips2 from "../assets/contactUs/ellips2.webp";
import axios from "axios";
import { toast } from "react-hot-toast";
import expertise from "../assets/forms/expertise.png";
import cal from "../assets/forms/cal.png";
import call from "../assets/forms/call.png";

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
    expertise: "",
    experience: "",
    bio: "",
  });

  const handleFlieInput = () => {
    setError4("File size should be less than 5 MB");
  };
  
  function changeHandler(event) {
    if (event.target.name === "file") {
      if (event.target.files[0].size > 5242880) {
        handleFlieInput();
        return;
      }
      setFormData((prevData) => ({
        ...prevData,
        file: event.target.files[0],
      }));
    } else {
      if (event.target.name === "contact" && event.target.value.length > 13) {
        setError2("Contact should be less than 13");
        return;
      }
      setFormData((prevData) => ({
        ...prevData,
        [event.target.name]: event.target.value,
      }));
      if (
        event.target.value.trim().length > 300 &&
        event.target.name === "bio"
      ) {
        setError7("Bio should be less than 300 characters");
        return;
      }
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.name.trim() === "") {
      setError1("This field is necessary");
      return;
    }
    if (formData.name.trim().length < 3) {
      setError1("Name should be atleast 3 characters long");
      return;
    }
    if (formData.name.trim().length > 25) {
      setError1("Name should be less than 25 characters");
      return;
    }

    if (formData.contact.trim() === "") {
      setError2("This field is necessary");
      return;
    }
    if (formData.contact.trim().length < 3) {
      setError2("Contact should be atleast 3");
      return;
    }
    if (formData.contact.trim().length > 13) {
      setError2("Contact should be less than 13");
      return;
    }

    if (formData.email.trim() === "") {
      setError3("This field is necessary");
      return;
    }

    if (!formData.file) {
      setError4("This field is necessary");
      return;
    }

    if (formData.expertise.trim() === "") {
      setError5("This field is necessary");
      return;
    }
    if (formData.expertise.trim().length < 3) {
      setError5("Expertise should be atleast 3 characters");
      return;
    }
    if (formData.expertise.trim().length > 20) {
      setError5("Expertise should be less than 20 characters");
      return;
    }

    if (formData.experience.trim() === "") {
      setError6("This field is necessary");
      return;
    }
    if (formData.experience.trim().length < 3) {
      setError6("Expertise should be atleast 3 characters");
      return;
    }
    if (formData.experience.trim().length > 20) {
      setError6("Expertise should be less than 20 characters");
      return;
    }

    if (formData.bio.trim() === "") {
      setError7("This field is necessary");
      return;
    }
    if (formData.bio.trim().length < 3) {
      setError7("Bio should be atleast 3 characters");
      return;
    }
    if (formData.bio.trim().length > 300) {
      setError7("Bio should be less than 300 characters");
      return;
    }

    errorHandler();

    try {
      const response = await axios.post(
        "https://mappoptimist.com/v1/send-email-hire",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.status === 200) {
        toast.success("Email sent successfully");
        setFormData({
          name: "",
          contact: "",
          email: "",
          file: "",
          expertise: "",
          experience: "",
          bio: "",
        });
      } else {
        toast.error("Email not sent");
      }
    } catch (error) {
      toast.error("Email not sent");
    }
    errorHandler();
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

  const handleFileReset = () => {
    fileInputRef.current.value = "";
    setFormData((prevData) => ({
      ...prevData,
      file: "",
    }));
  };

  return (
    <div className=" relative z-[60]">
      <div className=" mx-auto mt-[2.5%] bg-gradient-to-r from-white to-white rounded-xl">
        <img src={ellips1} alt="" className="absolute right-0 top-[50%] z-0" />
        <img src={ellips2} alt="" className="absolute bottom-0 z-0" />
        <div className="flex items-center justify-center w-[90%] mx-auto flex-col">
          <div className="mt-10 flex gap-4 flex-col">
            <h2 className="text-4xl font-poppins text-transparent bg-gradient-to-b from-primary to-secondary bg-clip-text">
              Get In Touch
            </h2>
            <p className="text-sm font-poppins300 text-transparent bg-gradient-to-b from-primary to-secondary bg-clip-text">
              Unlock endless opportunities as a freelancer with our MappOptimist
              company. We connect talented professionals with exciting projects,
              fostering growth, creativity, and success in the digital world.
            </p>
          </div>

          <div className="w-full">
            <form className="p-5 flex flex-col gap-6" onSubmit={handleSubmit}>
              <div>
                <div className="flex items-center bg-richblack-800 rounded-full text-richblack-5 w-full p-1 gap-1 shadow-[1px_4px_20px_-7px_rgba(0,0,0,0.6)]">
                  <BsPersonFill className="text-[rgb(0,0,0,0.4)] text-2xl ml-2 mt-1" />
                  <RxDividerVertical className="text-4xl text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    onChange={changeHandler}
                    placeholder="Name"
                    value={formData.name}
                    onClick={errorHandler}
                    className="h-full w-full rounded-full focus:outline-none text-base px-1 bg-transparent"
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
                  <img src={call} alt="" className="w-[8%] ml-2" />
                  <RxDividerVertical className="text-4xl text-gray-400" />
                  <input
                    type="number"
                    name="contact"
                    maxLength={13}
                    onChange={changeHandler}
                    placeholder="Contact no"
                    value={formData.contact}
                    onClick={errorHandler}
                    className="h-full w-full focus:outline-none text-base px-1 bg-transparent appearance-none custom-input"
                  />
                </div>
                {error2.length !== 0 && (
                  <p className="text-red-500 text-sm text-left rounded-lg relative z-10 flex items-center justify-start ml-5">
                    {error2}
                  </p>
                )}
              </div>
              <div>
                <div className="flex items-center bg-richblack-800 rounded-full text-richblack-5 w-full p-1 gap-1 shadow-[1px_4px_20px_-7px_rgba(0,0,0,0.6)]">
                  <HiOutlineMail className="text-[rgb(0,0,0,0.4)] text-2xl ml-2 mt-1" />
                  <RxDividerVertical className="text-4xl text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    onChange={changeHandler}
                    placeholder="Email"
                    value={formData.email}
                    onClick={errorHandler}
                    className="h-full w-full focus:outline-none text-base px-1 bg-transparent"
                  />
                </div>
                {error3.length !== 0 && (
                  <p className="text-red-500 text-sm text-left rounded-lg relative z-10 flex items-center justify-start ml-5">
                    {error3}
                  </p>
                )}
              </div>

              {
                <div className="relative z-30">
                  <div className="flex items-center bg-richblack-800 rounded-full text-richblack-5 w-full p-1 gap-1 shadow-[1px_4px_20px_-7px_rgba(0,0,0,0.6)] bg-white">
                    <img src={expertise} alt="" className="w-[8%] ml-2" />
                    <RxDividerVertical className="text-4xl text-gray-400" />
                    <input
                      type="text"
                      name="expertise"
                      onChange={changeHandler}
                      placeholder="Area Of Expertise"
                      value={formData.expertise}
                      onClick={errorHandler}
                      className="h-full w-full focus:outline-none text-base px-1 bg-transparent"
                    />
                  </div>
                  {error5.length !== 0 && (
                    <p className="text-red-500 text-sm text-left rounded-lg relative z-10 flex items-center justify-start ml-5">
                      {error5}
                    </p>
                  )}
                </div>
              }
              {
                <div className="relative z-20">
                  <div className="flex items-center bg-richblack-800 rounded-full text-richblack-5 w-full p-1 gap-1 shadow-[1px_4px_20px_-7px_rgba(0,0,0,0.6)] bg-white">
                    <img src={cal} alt="" className="w-[8%] ml-2" />
                    <RxDividerVertical className="text-4xl text-gray-400" />
                    <input
                      type="text"
                      name="experience"
                      onChange={changeHandler}
                      placeholder="Years of Experience"
                      value={formData.experience}
                      onClick={errorHandler}
                      className="h-full w-full focus:outline-none text-base px-1 bg-transparent"
                    />
                  </div>
                  {error6.length !== 0 && (
                    <p className="text-red-500 text-sm text-left rounded-lg relative z-10 flex items-center justify-start ml-5">
                      {error6}
                    </p>
                  )}
                </div>
              }
              <div>
                <div className="flex items-center bg-richblack-800 rounded-full text-richblack-5 w-full p-1">
                  <GrAttachment className="text-[rgb(0,0,0,0.4)] text-2xl ml-2 mt-1" />
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
                    }}
                  >
                    {formData.file !== "" ? (
                      <span className="text-gray-400 pointer-events-noneh-full w-full rounded-full focus:outline-none text-base bg-transparentl mr-16">
                        {formData.file.name}
                      </span>
                    ) : (
                      <span className="text-gray-400 pointer-events-none h-full w-full rounded-full focus:outline-none text-base bg-transparent mr-24">
                        Resume
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
              <div className="col-span-2 relative z-30">
                <div className="flex items-start  bg-richblack-800 rounded-xl text-richblack-5 w-full p-2 gap-1 shadow-[1px_4px_20px_-7px_rgba(0,0,0,0.6)]  h-[8rem] bg-white">
                  <MdOutlineMessage className="text-[rgb(0,0,0,0.4)] text-2xl ml-2 mt-1" />
                  <RxDividerVertical className="text-4xl -translate-x-1 -translate-y-1 text-gray-400" />
                  <textarea
                    name="bio"
                    onChange={changeHandler}
                    placeholder="Bio"
                    value={formData.bio}
                    minLength={10}
                    onClick={errorHandler}
                    className="h-full w-full focus:outline-none text-base  resize-none"
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

export default HireMobile;
