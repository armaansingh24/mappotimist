import { useTypewriter } from "react-simple-typewriter";
import { useState } from "react";
import image1 from "../assets/contactUs/image1.png";
import R2 from "../assets/contactUs/R2.png";
import linkedin from "../assets/contactUs/linkedin.png";
import { SectionWrapper } from "../hoc";

const ContactSection = () => {
  const [text] = useTypewriter({
    words: ["Project?", "Idea?"],
    loop: {},
    typeSpeed: 200,
    delaySpeed: 200,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    idea: "",
  });
  const [error, setError] = useState("");
  const [error1, setError1] = useState("");
  const [error2, setError2] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [customService, setCustomService] = useState("");

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }
  const handleSubmit = (e) => {
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

    console.log(formData);
    // Perform other validation checks or submit the form
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
          <h2 className="font-poppins500  text-[30px] lmd:text-[48px] text-start ">
            Contact Us
          </h2>
          <div className="flex midxs:mt-32 gap-10">
            <div className="hidden midxmd:flex flex-col items-center justify-start w-[25%] relative z-10  -ml-10">
              <div className="">
                <p className="text-sm text-center font-poppins500">
                  You can email us at
                </p>
                <p className="text-lg text-center font-poppins">
                  info@mappoptimist.com
                </p>
              </div>
              <div className="mt-5 flex items-center gap-6">
                <div>
                  <img src={image1} alt="" className="" />
                  <img src={linkedin} alt="" className="-mt-7 ml-12" />
                </div>
                <div className="">
                  <p className="text-lg font-poppins text-center">
                    Arpit Dwivedi
                  </p>
                  <p className="text-lg text-[#CCCCCC] font-poppins mx-auto text-center">
                    Position Name
                  </p>
                </div>
              </div>
              <div className="mt-5 flex items-center gap-6">
                <div>
                  <img src={image1} alt="" className="" />
                  <img src={linkedin} alt="" className="-mt-7 ml-12" />
                </div>
                <div className="">
                  <p className="text-lg font-poppins text-center">
                    Arpit Dwivedi
                  </p>
                  <p className="text-lg text-[#CCCCCC] font-poppins mx-auto text-center">
                    Position Name
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
                  <span className="text-[#DF9507] lmd:text-[48px] -z-1 inline midxmd:text-5xl">
                    {text}
                  </span>
                </div>
                <span className="midxmd:text-5xl">Let's Talk 👋</span>
              </div>

              <div className="flex flex-col gap-2 mt-10 relative z-20">
                <p className="text-sm sm:text-lg font-poppins500">
                  What services you need?
                </p>
                <div className="h-fit flex flex-wrap justify-start items-center gap-2 midxmd:w-[90%]">
                  <span
                    className="px-2 rounded-lg bg-[#F5F7FE] text-[10px] h-[25px] flex items-center sm:text-[17px] sm:h-[37px] border-2 cursor-pointer font-poppins500"
                    onClick={() =>
                      handleSelectedService("Mobile App Development")
                    }
                  >
                    Mobile App Development
                  </span>
                  <span
                    className="px-2 rounded-lg bg-[#F5F7FE] text-[10px] h-[25px] flex items-center sm:text-[17px] sm:h-[37px] border-2 cursor-pointer font-poppins500"
                    onClick={() => handleSelectedService("Website Development")}
                  >
                    Website Development
                  </span>
                  <span
                    className="px-2 rounded-lg bg-[#F5F7FE] text-[10px] h-[25px] flex items-center sm:text-[17px] sm:h-[37px] border-2 cursor-pointer font-poppins500"
                    onClick={() => handleSelectedService("Website Design")}
                  >
                    Website Design
                  </span>
                  <span
                    className="px-2 rounded-lg bg-[#F5F7FE] text-[10px] h-[25px] flex items-center sm:text-[17px] sm:h-[37px] border-2 cursor-pointer font-poppins500"
                    onClick={() => handleSelectedService("Mobile App Design")}
                  >
                    Mobile App Design
                  </span>
                  <span
                    className="px-2 rounded-lg bg-[#F5F7FE] text-[10px] h-[25px] flex items-center sm:text-[17px] sm:h-[37px] border-2 cursor-pointer font-poppins500"
                    onClick={() => handleSelectedService("Product strategy")}
                  >
                    Product strategy
                  </span>
                  <span
                    className="px-2 rounded-lg bg-[#F5F7FE] text-[10px] h-[25px] flex items-center sm:text-[17px] sm:h-[37px] border-2 cursor-pointer font-poppins500"
                    onClick={() => handleSelectedService("")}
                  >
                    Others
                  </span>
                </div>
                <div className="w-[100%]">
                  <form action="" className="" onSubmit={handleSubmit}>
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
                          <p className="text-red-500 text-sm text-center mr-20 border border-red-500 sm:w-[80%] mx-auto rounded-lg -mt-2 relative z-10 h-8 flex items-center justify-center">
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
                          <p className="text-red-500 text-sm text-center mr-20 border border-red-500 w-[80%] mx-auto rounded-lg -mt-2 relative z-10 h-8 flex items-center justify-center">
                            {error1}
                          </p>
                        )}
                      </div>
                      <div className="flex flex-col mt-5">
                        <label
                          htmlFor="idea"
                          className="text-sm mb-2 sm:text-lg font-poppins500 text-primary"
                        >
                          Tell Us About Your Idea
                        </label>
                        <input
                          type="text"
                          id="idea"
                          name="idea"
                          onChange={handleCustomServiceChange}
                          value={selectedService || customService}
                          className={`w-[90%] border  ${
                            !selectedService && error2
                              ? "border-red-500"
                              : "border-gray-300"
                          } py-1 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary text-lg relative z-20`}
                          onClick={errorHandler}
                          placeholder={
                            selectedService ? "" : "tell us about your idea"
                          }
                        />
                        {!selectedService && error2.length !== 0 && (
                          <p className="text-red-500 text-sm text-center mr-20 border border-red-500 w-[80%] mx-auto rounded-lg -mt-2 relative z-10 h-8 flex items-center justify-center">
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
