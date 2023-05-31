import React from "react";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const PortfolioSlider = ({ image, index, currentSlideIndex }) => {
  const ref = useRef(null);
  const mainControls = useAnimation();

  const handleHover = () => {
    mainControls.start("visible");
  };

  useEffect(() => {
    mainControls.start("hidden"); // Start with the hidden state

    return () => {
      mainControls.stop(); // Clean up the animation when the component unmounts
    };
  }, [mainControls, index, currentSlideIndex]);
  return (
    <>
      <div
        className="group w-full h-auto z-9 mt-4 cursor-pointer "
        onMouseEnter={handleHover}
        onMouseLeave={() => mainControls.start("hidden")}
      >
        <img
          src={image}
          alt="slide_image"
          className={`z-[-10] ${
            index === currentSlideIndex ? "group-hover:scale-[1.06]" : ""
          } transition-all delay-500 ease-in-out`}
        />
        <div
          className={`opacity-0 ${
            index === currentSlideIndex
              ? "group-hover:opacity-[1] group-hover:bg-[rgb(0,0,0,0.6)]"
              : ""
          } xxmd:h-auto absolute top-[1.09rem] bottom-[3.8rem] md:bottom-[5.4rem] xxmd:bottom-[5rem] left-[-0.001rem]  right-0 group-hover:scale-[1.06] transition-all delay-500 ease-in-out rounded-2xl`}
        >
          <div className="w-[90%] xxmd:w-[89%] h-[90%] md:h-auto flex items-center justify-center flex-col mx-auto md:p-[3.4rem] xxmd:p-10 border-white border-2 rounded-2xl mt-[3%] md:mt-[15%] xxmd:mt-[14%] gap-4">
            <motion.div
              ref={ref}
              variants={{
                hidden: { opacity: 0, y: -150 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-lg xxmd:text-3xl font-bold text-white transition delay-1000 ease-in-out ">
                John Cooper
              </p>
            </motion.div>
            <motion.div
              ref={ref}
              variants={{
                hidden: { opacity: 0, y: 150 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col items-center justify-center gap-4 w-full"
            >
              <p className="hidden xxmd:block text-lg font-bold text-white w-full">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
                id magni a facilis fugiat tempore error deleniti accusamus
                numquam. Enim?
              </p>
              <button className="sm:text-base xxmd:text-xl text-white font-light border-[1px] p-1 xxmd:p-2 rounded-lg border-white">
                Read More
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioSlider;

// const PortfolioSider = ({ image, index, currentSlideIndex }) => {
//   const ref = useRef(null);
//   const mainControls = useAnimation();
//   const [isHovered, setIsHovered] = useState(false);

//   const handleHover = () => {
//     setIsHovered(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//   };

//   useEffect(() => {
//     const controls = mainControls.start({
//       opacity: isHovered && index === currentSlideIndex ? 1 : 0,
//       y: isHovered && index === currentSlideIndex ? 0 : -150,
//       transition: { duration: 0.5, delay: 0.2 },
//     });

//     return () => mainControls.stop();
//   }, [isHovered, mainControls, index, currentSlideIndex]);

//   return (
//     <div
//       className={`group w-full h-auto z-9 mt-4 cursor-pointer ${
//         isHovered && index === currentSlideIndex ? "scale-[1.06]" : ""
//       }`}
//       onMouseEnter={handleHover}
//       onMouseLeave={handleMouseLeave}
//     >
//       <img
//         src={image}
//         alt="slide_image"
//         className="z-[-10] transition-all delay-500 ease-in-out"
//       />
//       <motion.div
//         className={`opacity-0 ${
//           isHovered && index === currentSlideIndex
//             ? "opacity-[1] bg-[rgb(0,0,0,0.7)]"
//             : ""
//         } xxmd:h-auto absolute top-[1rem] bottom-[3.8rem] md:bottom-[5.4rem] xxmd:bottom-[4.84rem] left-[-.2rem] right-0 ${
//           isHovered && index === currentSlideIndex
//             ? "scale-[1.06] transition-all delay-500 ease-in-out"
//             : ""
//         } rounded-lg`}
//       >
//         <div className="w-[90%] xxmd:w-[90%] h-auto flex items-center justify-center flex-col mx-auto p-[3.4rem] xxmd:p-10 border-white border-2 rounded-2xl mt-[3%] md:mt-[18%] xxmd:mt-[14%] gap-4">
//           <motion.div
//             ref={ref}
//             initial={{ opacity: 0, y: -150 }}
//             animate={mainControls}
//           >
//             <p className="text-lg xxmd:text-3xl font-bold text-white transition delay-1000 ease-in-out ">
//               John Cooper
//             </p>
//           </motion.div>
//           <motion.div
//             initial={{ opacity: 0, y: 150 }}
//             animate={mainControls}
//             className={`flex flex-col items-center justify-center gap-4 w-full ${
//               isHovered && index === currentSlideIndex ? "visible" : "hidden"
//             }`}
//           >
//             <p className="hidden xxmd:block text-lg font-bold text-white w-full">
//               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa id
//               magni a facilis fugiat tempore error deleniti accusamus numquam.
//               Enim?
//             </p>
//             <button className="sm:text-base xxmd:text-xl text-white font-light border-[1px] p-1 xxmd:p-2 rounded-lg border-white">
//               Read More
//             </button>
//           </motion.div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default PortfolioSlider;
