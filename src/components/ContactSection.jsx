import { useTypewriter } from "react-simple-typewriter";
import { useState, useRef } from "react";
import image1 from "../assets/contactUs/image1.webp";
import R2 from "../assets/contactUs/R2.webp";
import linkedin from "../assets/contactUs/linkedin.webp";
import { toast } from "react-hot-toast";
import axios from "axios";

const ContactSection = () => {
  const [text] = useTypewriter({
    words: [" Project?", "Idea?"],
    loop: {},
    typeSpeed: 200,
    delaySpeed: 200,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    idea: "",
    // formId: "Contact Us",
  });
  const [error, setError] = useState("");
  const [error1, setError1] = useState("");
  const [error2, setError2] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [customService, setCustomService] = useState("");
  const inputRef = useRef(null);
  const form = useRef();

  const handleButtonClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.name.trim() === "") {
      setError("This field is necessary");
      return;
    }
    // Validate email field
    if (formData.email.trim() === "") {
      setError1("This field is necessary");
      return;
    }

    // Validate idea field
    if (formData.idea.trim() === "") {
      setError2("This field is necessary");
      return;
    }

    setError("");
    setError1("");
    setError2("");
    try {
      const response = await axios.post(
        "http://localhost:3000/send-email-contact",
        formData
      );
      if (response.status === 200) {
        // Reset the form
        toast.success("Email sent successfully");
        setFormData({
          name: "",
          email: "",
          idea: "",
        });
        setCustomService("");
        setSelectedService("");
      } else {
        toast.error("Email not sent");
      }
    } catch (error) {
      toast.error("Email not sent");
      // Handle error
    }
  };

  const errorHandler = () => {
    setError("");
    setError1("");
    setError2("");
  };

  const handleSelectedService = (service) => {
    if (selectedService === "") {
      setSelectedService(service);
      setFormData((prevData) => ({
        ...prevData,
        idea: service,
      }));
    } else {
      setSelectedService((prevService) => prevService + ", " + service);
      setFormData((prevData) => ({
        ...prevData,
        idea: prevData.idea + ", " + service,
      }));
    }
    setCustomService("");
  };

  const handleCustomServiceChange = (event) => {
    setSelectedService("");
    setFormData((prevData) => ({
      ...prevData,
      idea: event.target.value,
    }));
    setCustomService(event.target.value);
  };

  return (
    <>
      <div
        className="relative z-30 w-full -mt-10 midxmd:-mt-60 "
        id="Contact Us"
      >
        <img
          src={R2}
          alt=""
          className="absolute -top-[40%] -left-2 hidden midxmd:block z-0"
        />
        <div className=" mx-auto p-3">
          <h2 className="font-poppins500 text-[30px] lmd:text-[48px] text-start midxmd:ml-32">
            Contact Us
          </h2>
          <div className="flex middlesm:mt-32 gap-10">
            <div className="hidden midxmd:flex flex-col items-center justify-start w-[25%] relative z-10  -ml-10">
              <div className="ml-4">
                <p className="text-sm text-center font-poppins500">
                  You can email us at
                </p>
                <p className="text-lg text-center font-poppins">
                  info@mappoptimist.com
                </p>
              </div>
              <div className="mt-12 flex items-center gap-3">
                <div className="">
                  <a
                    href="https://www.linkedin.com/in/yashvant-sikarvar-52022064/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={image1} alt="" className="" />
                    <img
                      src={linkedin}
                      alt=""
                      className="-mt-7 ml-12 w-[39%]"
                    />
                  </a>
                </div>
                <div className="">
                  <p className="text-lg font-poppins text-center">
                    Yashvant Sikarvar
                  </p>
                  <p className="text-lg text-[#7e7c7c] font-poppins mx-auto text-center">
                    Founder & CEO
                  </p>
                </div>
              </div>
            </div>
            <div className="relative hidden midxmd:block">
              <div className="w-1 bg-gradient-to-b from-transparent via-[rgb(0,0,0,0.2)] to-transparent absolute top-0 bottom-0" />
              <div className="w-1 bg-via-[rgb(0,0,0,0.6)] relative" />
            </div>
            <div>
              <div className="flex flex-col flex-wrap mt-8 midxmd:mt-0 w-full font-poppins500">
                <span className="midxmd:text-5xl">Hey there!</span>
                <div className="flex flex-wrap gap-1 items-baseline">
                  <span className=" midxmd:text-5xl">Do you have a </span>
                  <span className="text-[#DF9507] lmd:text-[48px] -z-1 inline midxmd:text-5xl midlg:ml-2">
                    {text}
                  </span>
                </div>
                <span className="midxmd:text-5xl">Let's Talk 👋</span>
              </div>

              <div className="flex flex-col gap-2 mt-10 relative z-20">
                <p className="text-sm sm:text-lg font-poppins500">
                  What services you need?
                </p>
                <div className="h-fit flex flex-wrap justify-start items-center gap-2 midxmd:w-[80%]">
                  <div className="anim-btn">
                    <button
                      className="px-2 rounded-lg bg-[#F5F7FE] text-[10px] h-[25px] flex items-center sm:text-[17px] sm:h-[37px] border-2 cursor-pointer font-poppins500 anim-btn__button"
                      onClick={() =>
                        handleSelectedService("Mobile App Development")
                      }
                    >
                      Mobile App Development
                    </button>
                  </div>

                  <button
                    className="px-2 rounded-lg bg-[#F5F7FE] text-[10px] h-[25px] flex items-center sm:text-[17px] sm:h-[37px] border-2 cursor-pointer font-poppins500 anim-btn__button"
                    onClick={() => handleSelectedService("Website Development")}
                  >
                    Website Development
                  </button>

                  <span
                    className="px-2 rounded-lg bg-[#F5F7FE] text-[10px] h-[25px] flex items-center sm:text-[17px] sm:h-[37px] border-2 cursor-pointer font-poppins500 anim-btn__button"
                    onClick={() => handleSelectedService("Website Design")}
                  >
                    Website Design
                  </span>

                  <span
                    className="px-2 rounded-lg bg-[#F5F7FE] text-[10px] h-[25px] flex items-center sm:text-[17px] sm:h-[37px] border-2 cursor-pointer font-poppins500 anim-btn__button"
                    onClick={() => handleSelectedService("Mobile App Design")}
                  >
                    Mobile App Design
                  </span>

                  <span
                    className="px-2 rounded-lg bg-[#F5F7FE] text-[10px] h-[25px] flex items-center sm:text-[17px] sm:h-[37px] border-2 cursor-pointer font-poppins500 anim-btn__button"
                    onClick={() => handleSelectedService("Product strategy")}
                  >
                    Product strategy
                  </span>
                  <span
                    className="px-2 rounded-lg bg-[#F5F7FE] text-[10px] h-[25px] flex items-center sm:text-[17px] sm:h-[37px] border-2 cursor-pointer font-poppins500 anim-btn__button"
                    ref={inputRef}
                    onClick={handleButtonClick}
                  >
                    Others
                  </span>
                </div>
                <div className="w-[100%]">
                  <form
                    action=""
                    className=""
                    onSubmit={handleSubmit}
                    ref={form}
                  >
                    <div className="midxmd:grid midxmd:grid-cols-2 ">
                      <div className="flex flex-col mt-5">
                        <label
                          htmlFor="name"
                          className="text-sm mb-2 sm:text-lg font-poppins500 text-primary"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          onChange={changeHandler}
                          value={formData.name}
                          className={`w-[90%] border  ${
                            error ? "border-red-500" : "border-gray-300"
                          } py-1 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary text-lg relative z-20`}
                          onClick={errorHandler}
                          placeholder="Your Name"
                        />
                        {error.length !== 0 && (
                          <p className="text-red-500 text-sm  text-left rounded-lg  relative z-10  flex items-center justify-start">
                            {error}
                          </p>
                        )}
                      </div>
                      <div className="flex flex-col mt-5">
                        <label
                          htmlFor="email"
                          className="text-sm mb-2 sm:text-lg font-poppins500 text-primary"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          onChange={changeHandler}
                          value={formData.email}
                          className={`w-[90%] border  ${
                            error1 ? "border-red-500" : "border-gray-300"
                          } py-1 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary text-lg relative z-20`}
                          onClick={errorHandler}
                          placeholder="yourName@gmail.com"
                        />
                        {error1.length !== 0 && (
                          <p className="text-red-500 text-sm  text-left rounded-lg  relative z-10  flex items-center justify-start">
                            {error1}
                          </p>
                        )}
                      </div>
                      <div className="flex flex-col mt-5 midxmd:col-span-2 midxmd:w-[75vw]">
                        <label
                          htmlFor="idea"
                          className="text-sm mb-2 sm:text-lg font-poppins500 text-primary"
                        >
                          Tell Us About Your Idea
                        </label>
                        <textarea
                          rows={3}
                          maxLength={500}
                          id="idea"
                          name="idea"
                          onChange={handleCustomServiceChange}
                          value={selectedService || customService}
                          className={`w-[90%] border  ${
                            !selectedService && error2
                              ? "border-red-500"
                              : "border-gray-300"
                          } py-1 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary text-lg relative z-20 resize-none`}
                          onClick={errorHandler}
                          placeholder={
                            selectedService ? "" : "tell us about your idea"
                          }
                          ref={inputRef}
                        />
                        {!selectedService && error2.length !== 0 && (
                          <p className="text-red-500 text-sm  text-left rounded-lg  relative z-10  flex items-center justify-start">
                            {error2}
                          </p>
                        )}
                      </div>
                    </div>
                    <button className="relative z-30 text-sm w-[30%] h-fit bg-gradient-to-r from-[#000046] to-[#1CB5E0] hover:from-secondary hover:to-primary transition-all duration-1000 rounded-lg text-white font-poppins py-2 mt-8 sm:text-lg midxmd:mb-[20%]">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactSection;
