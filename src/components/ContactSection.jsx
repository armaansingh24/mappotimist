import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useState } from "react";
import image1  from "../assets/contactUs/image1.png"
import R2  from "../assets/contactUs/R2.png"

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

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }
  return (
    <>
      <div className="relative z-30 w-full -mt-10 midxmd:-mt-60 overflow-hidden">
        <img
          src={R2}
          alt=""
          className="absolute -top-[40%] left-0 hidden midxmd:block"
        />
        <div className=" mx-auto p-3">
          <h2 className="font-Poppins font-semibold text-[30px] lmd:text-[48px] text-start midxmd:ml-20">
            Contact Us
          </h2>
          <div className="flex midxs:mt-32 gap-10">
            <div className="hidden midxmd:flex flex-col items-center justify-start w-[25%]">
              <div className="">
                <p className="text-sm text-center">You can email us at</p>
                <p className="text-lg text-center font-bold">
                  info@mappoptimist.com
                </p>
              </div>
              <div className="mt-5 flex items-center gap-6">
                <img src={image1} alt="" className="" />
                <div className="">
                  <p className="text-lg font-bold text-center">Arpit Dwivedi</p>
                  <p className="text-sm text-center">Position Name</p>
                </div>
              </div>
              <div className="mt-5 flex items-center gap-6">
                <img src={image1} alt="" className="" />
                <div className="">
                  <p className="text-lg font-bold text-center">Arpit Dwivedi</p>
                  <p className="text-sm text-center">Position Name</p>
                </div>
              </div>
            </div>
            <div className="relative hidden midxmd:block">
              <div className="w-1 bg-gradient-to-b from-transparent via-[rgb(0,0,0,0.2)] to-transparent absolute top-0 bottom-0" />
              <div className="w-1 bg-via-[rgb(0,0,0,0.6)] relative" />
            </div>
            <div>
              <div className="flex flex-col flex-wrap mt-8 midxmd:mt-0 w-full">
                <span className="font-bold midxmd:text-5xl">Hey there!</span>
                <div className="flex flex-wrap gap-1 items-baseline">
                  <span className="font-bold midxmd:text-5xl">
                    Do you have a{" "}
                  </span>
                  <span className="text-[#DF9507] font-bold lmd:text-[48px] -z-1 inline midxmd:text-5xl">
                    {text}
                    <Cursor cursorStyle="." />
                  </span>
                </div>
                <span className="font-bold midxmd:text-5xl">Let's Talk 👋</span>
              </div>

              <div className="flex flex-col gap-2 mt-10">
                <p className="text-sm sm:text-lg">What services you need?</p>
                <div className="h-fit flex flex-wrap justify-start items-center gap-2 midxmd:w-[90%]">
                  <span className="px-2 rounded-lg bg-[#F5F7FE] text-[10px] h-[25px] flex items-center sm:text-[17px] sm:h-[37px]">
                    Mobile App Development
                  </span>
                  <span className="px-2 rounded-lg bg-[#F5F7FE] text-[10px] h-[25px] flex items-center sm:text-[17px] sm:h-[37px]">
                    Website Development
                  </span>
                  <span className="px-2 rounded-lg bg-[#F5F7FE] text-[10px] h-[25px] flex items-center sm:text-[17px] sm:h-[37px]">
                    Website Design
                  </span>
                  <span className="px-2 rounded-lg bg-[#F5F7FE] text-[10px] h-[25px] flex items-center sm:text-[17px] sm:h-[37px]">
                    Mobile App Design
                  </span>
                  <span className="px-2 rounded-lg bg-[#F5F7FE] text-[10px] h-[25px] flex items-center sm:text-[17px] sm:h-[37px]">
                    Product strategy
                  </span>
                  <span className="px-2 rounded-lg bg-[#F5F7FE] text-[10px] h-[25px] flex items-center sm:text-[17px] sm:h-[37px]">
                    Others
                  </span>
                </div>
                <div className="w-[100%]">
                  <form action="" className="">
                    <div className="midxmd:grid midxmd:grid-cols-2">
                      <div className="flex flex-col mt-5">
                        <label
                          htmlFor="name"
                          className="text-sm mb-2 sm:text-lg"
                        >
                          Name
                        </label>
                        <input
                          required
                          type="text"
                          name="name"
                          id="name"
                          onChange={changeHandler}
                          value={formData.name}
                          className="w-[90%] border-2 border-gray-300 rounded-lg text-lg"
                        />
                      </div>
                      <div className="flex flex-col mt-5">
                        <label
                          htmlFor="email"
                          className="text-sm mb-2 sm:text-lg"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          onChange={changeHandler}
                          value={formData.email}
                          className="w-[90%] border-2 border-gray-300 rounded-lg text-lg"
                        />
                      </div>
                      <div className="flex flex-col mt-5">
                        <label
                          htmlFor="idea"
                          className="text-sm mb-2 sm:text-lg"
                        >
                          Tell Us About Your Idea
                        </label>
                        <input
                          type="text"
                          id="idea"
                          name="idea"
                          onChange={changeHandler}
                          value={formData.idea}
                          className="w-[90%] border-2 border-gray-300 rounded-lg text-lg"
                        />
                      </div>
                    </div>
                    <button className="text-sm w-[50%] bg-gradient-to-r from-[#000046] to-[#1CB5E0] rounded-lg text-white font-bold py-2 mt-8 sm:text-lg midxmd:mb-[20%]">
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
