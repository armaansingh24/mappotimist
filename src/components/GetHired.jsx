import React from "react";
import { BsFillTelephoneFill, BsPersonFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { RxDividerVertical } from "react-icons/rx";
import { HiOutlineMail } from "react-icons/hi";
import { GrAttachment } from "react-icons/gr";
import { MdOutlineMessage } from "react-icons/md";
import { useState, useRef } from "react";
import ellips from "../assets/contactUs/ellipes.webp";
import { toast } from "react-hot-toast";
import axios from "axios";

const GetHired = () => {
  const fileInputRef = useRef(null);
  const [error1, setError1] = useState("");
  const [error2, setError2] = useState("");
  const [error3, setError3] = useState("");
  const [error4, setError4] = useState("");
  const [error5, setError5] = useState("");
  const [error6, setError6] = useState("");
  const [error7, setError7] = useState("");
  const [error8, setError8] = useState("");
  const [accountType, setAccountType] = useState("Hire Team");

  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    required: "",
    file: "",
    type: "",
    duration: "",
    summery: "",
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
       setFormData((prevData) => ({
         ...prevData,
         [event.target.name]: event.target.value,
        }));
        if (
          event.target.value.trim().length > 300 &&
          event.target.name === "summery"
        ) {
          setError8("Summery should be less than 300 characters");
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
    if (formData.type.trim() === "" && accountType === "Hire Team") {
      setError5("This field is necessary");
      return;
    }
    if(formData.type.trim().length < 3 && accountType === "Hire Team"){
      setError5("Type should be atleast 3 characters");
      return;
    }
    if (formData.type.trim().length > 50 && accountType === "Hire Team") {
      setError5("Type should be less than 50 characters");
      return;
    }

    if (formData.duration.trim() === "" && accountType === "Hire Team") {
      setError6("This field is necessary");
      return;
    }
    if (formData.duration.trim().length < 3 && accountType === "Hire Team") {
      setError6("Duration should be atleast 3 characters");
      return;  
    }
    if (formData.duration.trim().length > 10 && accountType === "Hire Team") {
      setError6("Duration should be less than 10 characters");
      return;
    }

    if (formData.required.trim() === "" && accountType !== "Hire Team") {
      setError7("This field is necessary");
      return;
    }
    if (formData.required.trim().length < 3 && accountType !== "Hire Team") {
      setError7("Required should be atleast 3 characters");
      return;
    }
    if (formData.required.trim().length > 50 && accountType !== "Hire Team") {
      setError7("Required should be less than 50 characters");
      return;
    } 

     if (formData.summery.trim().length > 300) {
       setError8("Summery should be less than 300 characters");
       return;
     }

    if (accountType === "Hire Team") {
      const formDataSent = {
        name: formData.name,
        contact: formData.contact,
        email: formData.email,
        type:formData.type,
        duration:formData.duration,
        summery: formData.summery,
        file:formData.file
      };
      try {
        const response = await axios.post(
          "http://128.199.17.62:8080/v1/send-email-hire-team",
          formDataSent,
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
            required: "",
            file: "",
            type: "",
            duration: "",
            summery: "",
          });
        } else {
          toast.error("Email not sent");
        }
      } catch (error) {
        toast.error("Email not sent");
      }
    } else {
      const formDataSent = {
        name: formData.name,
        contact: formData.contact,
        email: formData.email,
        required: formData.required,
        summery: formData.summery,
      };
      try {
        const response = await axios.post(
          "http://128.199.17.62:8080/v1/send-email-individual",
          formDataSent
        );
        if (response.status === 200) {
          toast.success("Email sent successfully");
          setFormData({
            name: "",
            contact: "",
            email: "",
            required: "",
            file: "",
            type: "",
            duration: "",
            summery: "",
          });
        } else {
          toast.error("email not sent");
        }
      } catch (error) {
        toast.error("Email not sent");
        console.log(error);
      }
    }
    errorHandler();
  };
  const errorHandler = () => {
    setError1("");
    setError2("");
    setError3("");
    setError5("");
    setError6("");
    setError7("");
    setError8("");
  };

  const handleFileReset = () => {
    fileInputRef.current.value = "";
    setFormData((prevData) => ({
      ...prevData,
      file: "",
    }));
  };

  return (
    <>
      <div className=" relative z-[60]">
        <div className=" mx-auto mt-[2.5%] bg-gradient-to-r from-[#000046] to-[#1CB5E0] rounded-xl">
          <div className="flex items-center flex-col mx-auto w-[100%]">
            <div className="text-center flex flex-col gap-4 w-[80%] p-4">
              <h2 className="text-2xl font-bold text-white">Get In Touch</h2>
              <p className="text-white text-lg">
                Boost your project's success with our IT solutions. Whether you
                need individual or team developers, or flexible contract-based
                talent, we deliver top-notch expertise for seamless development
                experiences.
              </p>
            </div>
            <div className="bg-white w-[50%] flex items-center justify-center p-1 gap-x-1 my-4 mb-10 rounded-full">
              <button
                className={`${
                  accountType === "Hire Team"
                    ? "bg-gradient-to-r from-[#000046] to-[#1CB5E0] text-white font-semibold"
                    : "bg-white text-black"
                } py-2 px-5 rounded-full transition-all duration-200 w-full text-2xl`}
                onClick={() => setAccountType("Hire Team")}
              >
                Hire Team
              </button>
              <button
                className={`${
                  accountType === "Hire Individual Developer"
                    ? "bg-gradient-to-r to-[#000046] from-[#1CB5E0] text-white font-semibold"
                    : "bg-white text-black"
                } py-2 px-5 rounded-full transition-all duration-200 w-full text-2xl`}
                onClick={() => setAccountType("Hire Individual Developer")}
              >
                Hire Individual Developer
              </button>
            </div>
            <div className="bg-white w-[80%] h-full flex rounded-xl p-2 mb-10">
              <div className="w-[60%] p-7 rounded-xl bg-gradient-to-tl from-[#1CB5E0] to-[#8ed7ec] relative">
                <img
                  src={ellips}
                  alt=""
                  className="absolute bottom-0 right-0"
                />
                <div className="font-medium">
                  <p className="text-lg">Contact information</p>
                  <p className="text-[13px] leading-[19px]">
                    Contact us today to forge a deeper understanding and create
                    a strong bond. Let's collaborate and achieve remarkable
                    results together!
                  </p>
                </div>
                <div className="mt-10 flex gap-3 items-center">
                  <span className="text-lg">
                    <BsFillTelephoneFill />
                  </span>
                  <span className="text-lg">
                    <p>+91 8171977577</p>
                  </span>
                </div>
                <div className="mt-10 flex text-lg gap-3 items-center">
                  <span>
                    <MdEmail />
                  </span>
                  <p>info@mappoptimist.com</p>
                </div>
                <div className="mt-10 flex text-lg gap-3 items-center">
                  <span>
                    <IoLocationSharp />
                  </span>
                  <p>New Delhi, India, 110030</p>
                </div>
              </div>
              <div className="w-full">
                <form
                  className="p-5 grid grid-cols-2 gap-6"
                  onSubmit={handleSubmit}
                >
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
                        className="h-full w-full rounded-full focus:outline-none text-base bg-transparent"
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
                      <RxDividerVertical className="text-4xl text-gray-400" />
                      <input
                        type="number"
                        name="contact"
                        onChange={changeHandler}
                        placeholder="Contact no"
                        value={formData.contact}
                        onClick={errorHandler}
                        className="h-full w-full rounded-full focus:outline-none text-base bg-transparent appearance-none custom-input"
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
                        className="h-full w-full rounded-full focus:outline-none text-base bg-transparent"
                      />
                    </div>
                    {error3.length !== 0 && (
                      <p className="text-red-500 text-sm text-left rounded-lg relative z-10 flex items-center justify-start ml-5">
                        {error3}
                      </p>
                    )}
                  </div>
                  {accountType !== "Hire Team" && (
                    <div>
                      <div className="flex items-center bg-richblack-800 rounded-full text-richblack-5 w-full p-1 gap-1 shadow-[1px_4px_20px_-7px_rgba(0,0,0,0.6)]">
                        <BsPersonFill className="text-[rgb(0,0,0,0.4)] text-2xl ml-2 mt-1" />
                        <RxDividerVertical className="text-4xl text-gray-400" />
                        <input
                          type="text"
                          name="required"
                          onChange={changeHandler}
                          placeholder="Required Skills"
                          value={formData.required}
                          onClick={errorHandler}
                          className="h-full w-full rounded-full focus:outline-none text-base bg-transparent appearance-none custom-input"
                        />
                      </div>
                      {error7.length !== 0 && (
                        <p className="text-red-500 text-sm text-left rounded-lg relative z-10 flex items-center justify-start ml-5">
                          {error7}
                        </p>
                      )}
                    </div>
                  )}
                  {accountType === "Hire Team" && (
                    <div>
                      <div className="flex items-center bg-richblack-800 rounded-full text-richblack-5 w-full p-1 ">
                        <GrAttachment className="text-[rgb(0,0,0,0.4)] text-2xl ml-2 mt-1" />
                        <input
                          type={`${
                            accountType === "Hire Team" ? "file" : "text"
                          }`}
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
                            <span className="text-gray-400 pointer-events-noneh-full w-full rounded-full focus:outline-none text-base bg-transparentl mr-16">
                              {formData.file.name.length > 20
                                ? formData.file.name.slice(0, 15) + "..."
                                : formData.file.name}
                            </span>
                          ) : (
                            <span className="text-gray-400 pointer-events-none h-full w-full rounded-full focus:outline-none text-base bg-transparent mr-16">
                              {accountType === "Hire Team" ? "Attach File" : ""}
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
                  )}

                  {accountType === "Hire Team" && (
                    <div>
                      <div className="flex items-center bg-richblack-800 rounded-full text-richblack-5 w-full p-1 gap-1 shadow-[1px_4px_20px_-7px_rgba(0,0,0,0.6)]">
                        <BsPersonFill className="text-[rgb(0,0,0,0.4)] text-2xl ml-2 mt-1" />
                        <RxDividerVertical className="text-4xl text-gray-400" />
                        <input
                          type="text"
                          name="type"
                          onChange={changeHandler}
                          placeholder="Project Type"
                          value={formData.type}
                          onClick={errorHandler}
                          className="h-full w-full rounded-full focus:outline-none text-base bg-transparent"
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
                      <div className="flex items-center bg-richblack-800 rounded-full text-richblack-5 w-full p-1 gap-1 shadow-[1px_4px_20px_-7px_rgba(0,0,0,0.6)]">
                        <BsPersonFill className="text-[rgb(0,0,0,0.4)] text-2xl ml-2 mt-1" />
                        <RxDividerVertical className="text-4xl text-gray-400" />
                        <input
                          type="text"
                          name="duration"
                          onChange={changeHandler}
                          placeholder="Duration"
                          value={formData.duration}
                          onClick={errorHandler}
                          className="h-full w-full rounded-full focus:outline-none text-base bg-transparent"
                        />
                      </div>
                      {error6.length !== 0 && (
                        <p className="text-red-500 text-sm text-left rounded-lg relative z-10 flex items-center justify-start ml-5">
                          {error6}
                        </p>
                      )}
                    </div>
                  )}
                  <div className="col-span-2">
                    <div className="flex items-start  bg-richblack-800 rounded-xl text-richblack-5 w-full p-2 gap-1 shadow-[1px_4px_20px_-7px_rgba(0,0,0,0.6)]  h-[8rem]">
                      <MdOutlineMessage className="text-[rgb(0,0,0,0.4)] text-2xl ml-2 mt-1" />
                      <RxDividerVertical className="text-4xl -translate-x-1 -translate-y-1 text-gray-400" />
                      <textarea
                        name="summery"
                        onChange={changeHandler}
                        placeholder="Summary of project"
                        value={formData.summery}
                        minLength={10}
                        onClick={errorHandler}
                        className="h-full w-full focus:outline-none text-base mr-20 resize-none"
                      />
                    </div>
                    {error8.length !== 0 && (
                      <p className="text-red-500 text-sm text-left rounded-lg relative z-10 flex items-center justify-start ml-5">
                        {error8}
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
      </div>
    </>
  );
};

export default GetHired;
