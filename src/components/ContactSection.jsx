import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useState } from "react";

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
    idea:""
  });

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }
  {
    console.log(formData);
  }
  return (
    <>
      <div className="relative z-30 w-full -mt-10">
        <div className=" mx-auto p-3">
          <h2 className="font-Poppins font-semibold text-[30px] lmd:text-[48px] text-start">
            Contact Us
          </h2>
          <div className="flex flex-col flex-wrap mt-8">
            <span>Hey there!</span>
            <div className="flex flex-wrap gap-1">
              <span>Do you have a </span>
              <span className="text-[#DF9507] font-bold lmd:text-[48px] -z-1 inline">
                {text}
                <Cursor cursorStyle="." />
              </span>
            </div>
            <span className="">Let's Talk 👋</span>
          </div>

          <div className="flex flex-col gap-2 mt-10">
            <p className="text-sm">What services you need?</p>
            <div className="h-fit flex flex-wrap justify-start items-center gap-2">
              <span className="px-2 rounded-lg bg-[#F5F7FE] text-[10px] h-[25px] flex items-center">
                Mobile App Development
              </span>
              <span className="px-2 rounded-lg bg-[#F5F7FE] text-[10px] h-[25px] flex items-center">
                Website Development
              </span>
              <span className="px-2 rounded-lg bg-[#F5F7FE] text-[10px] h-[25px] flex items-center">
                Website Design
              </span>
              <span className="px-2 rounded-lg bg-[#F5F7FE] text-[10px] h-[25px] flex items-center">
                Mobile App Design
              </span>
              <span className="px-2 rounded-lg bg-[#F5F7FE] text-[10px] h-[25px] flex items-center">
                Product strategy
              </span>
              <span className="px-2 rounded-lg bg-[#F5F7FE] text-[10px] h-[25px] flex items-center">
                Others
              </span>
            </div>
            <div className="w-[100%]">
              <form action="" className="">
                <div className="flex flex-col mt-5">
                  <label htmlFor="name" className="text-sm">
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
                  <label htmlFor="email" className="text-sm">
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    onChange={changeHandler}
                    value={formData.email}
                    className="w-[90%] border-2 border-gray-300 rounded-lg text-lg"
                  />
                </div>
                <div className="flex flex-col mt-5">
                  <label htmlFor="idea" className="text-sm">
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
                <button className="text-sm w-[50%] bg-gradient-to-r from-[#000046] to-[#1CB5E0] rounded-lg text-white font-bold py-2 mt-8 ">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactSection;
