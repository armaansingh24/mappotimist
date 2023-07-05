import React from "react";
import { agencies } from "../constants/index";
import "../index.css";
import wave1 from "../assets/agencies/wave1.webp";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const Agencies = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);
  return (
    <>
      <div className=" relative object-contain bg-no-repeat w-screen agencies bg-[url('https://img.freepik.com/free-photo/abstract-blue-geometric-shapes-background_24972-1841.jpg?w=1060&t=st=1684932147~exp=1684932747~hmac=d2625ef7bd40079dd5e0f224a61318a2cf6f7efd69ba12f788fa28c8a6900f9f')] agencies overflow-hidden z-10">
        <img
          src={wave1}
          alt=""
          className="absolute top-[-30rem] left-[7rem] h-full scale-[2] hidden xxmd:block z-0 select-none"
        />
        <div className="block midxs:hidden text-[30px] mt-20 mb-12 ml-10 w-[80%] font-poppins500 ">
          Available On Top Rated Agencies
        </div>
        <motion.div
          className="hidden midxs:block w-[79%] mx-auto  mt-10 h-auto z-30 relative"
          ref={ref}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 1.6 }}
        >
          <h2 className="font-Poppins font-poppins500 text-[30px] lmd:text-[48px] flex gap-2 flex-wrap h-[10rem] z-10 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary xxmd:text-5xl xxmd:w-[40%] select-none">
            Available On Top Rated Agencies
          </h2>
        </motion.div>
        <div className="w-[70%]  mx-auto  xxmd:mt-12 z-0 ">
          <motion.div
            className="grid grid-cols-2 gap-12 midFM:h-[20rem] midlg:h-[30rem] shadow-[10px_20px_50px_-10px_rgba(0,0,0,0.6)] rounded-md  justify-between  p-8 mb-16 xxmd:grid-cols-4"
            ref={ref}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 1.6 }}
          >
            {agencies.map((agency) => (
              <div
                className="flex items-center justify-center w-full "
                key={agency.id}
              >
                <img
                  src={agency.image}
                  alt=""
                  key={agency.id}
                  className="sm:w-[50%] xsm:w-[70%] xxmd:w-[90%] midxmd:w-[70%]"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Agencies;
