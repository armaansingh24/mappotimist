import { useTypewriter,Cursor } from "react-simple-typewriter";  

const ContactSection = () => {

  const [ text ] = useTypewriter({
    words: ['Project?','Idea?'],
    loop:{},
    typeSpeed: 200,
    delaySpeed: 200,
  });
  return (
    <>
      <div className="relative z-30 w-full -mt-10">
        <div className=" mx-auto p-3">
          <h2 className="font-Poppins font-semibold text-[30px] lmd:text-[48px] text-start">
            Contact Us
          </h2>
          <div className="flex flex-col">
            <span>Hey there!</span>
            <div>
              <span>Do you have a {' '}</span>
              <span className="text-[#DF9507] font-bold lmd:text-[48px] -z-1 inline">
                {text}
                <Cursor cursorStyle="." />
              </span>
            </div>
            <span className="">Let's Talk 👋</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactSection;