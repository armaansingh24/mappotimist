import React from "react";
import PortfolioNavbar from "../components/PortfolioNavbar";
import First from "../assets/OcrIcr/First.webp";
import second from "../assets/OcrIcr/second.webp";
import third from "../assets/OcrIcr/third.webp";
import { Ai } from "../constants/index";
import { useEffect, useState } from "react";
import arrow from "../assets/OcrIcr/arrow.webp";
import ai from "../assets/OcrIcr/ai.webp";
import { Link } from "react-scroll";
import R1 from "../assets/OcrIcr/R1.webp";
import R2 from "../assets/OcrIcr/R2.webp";
import R3 from "../assets/OcrIcr/R3.webp";
import ellips1 from "../assets/OcrIcr/ellips1.webp";
import ellips2 from "../assets/OcrIcr/ellips2.webp";
import ellips3 from "../assets/OcrIcr/ellips3.webp";
import ellips4 from "../assets/OcrIcr/ellips4.webp";
import ellips5 from "../assets/OcrIcr/ellips5.webp";

const OcrIcr = () => {
  const data = Ai;
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [data.length]);
  return (
    <>
        <div className="">
          <PortfolioNavbar />
        </div>
      <div className="bg-white relative z-10">
        <div className="bg-white w-screen relative z-10">
          <img
            src={R1}
            alt=""
            className="absolute w-[50%] -top-7 -left-[30%] z-30 hidden midFM:block"
          />
          <div className="w-[90%] mt-44  mx-auto sm:mt-0">
            {/* First Section */}
            <div className="flex flex-col gap-6 justify-center items-center midxmd:flex-row midxmd:gap-20 midlg:h-screen">
              <div className="midxmd:order-2 midxmd:w-full ocr">
                <img src={First} alt="" className="midxmd:w-full" />
              </div>
              <div className="flex flex-col gap-2 midxmd:w-full">
                <div>
                  <h2 className="text-2xl midxmd:text-4xl font-poppins500 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                    OCR & ICR(Handwritten)
                  </h2>
                  <p className="text-sm midxmd:text-lg font-poppins mt-1">
                    Utilizing OCR/ICR technology to elevate the process
                    experience.
                  </p>
                </div>
                <div>
                  <p className="text-sm midxmd:text-lg font-poppins">
                    Use our OCR/ICR technology to enhance the efficiency,
                    accuracy, and accessibility of document processing, data
                    extraction, and information management across various
                    industries and domains.
                  </p>
                </div>
              </div>
            </div>

            {/* Second Section */}
            <div className="mt-10 grid grid-cols-1 gap-3 midFM:grid-cols-2 items-center justify-center mb-10">
              <div className="order1 midFM:order-3 ocr  ">
                <img src={second} alt="" className="mx-auto" />
              </div>
              <div className="midFM:order-1 col-span-2">
                <h2 className="text-2xl midxmd:text-4xl font-poppins500 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Key Features of OCR/ICR (Handwritten)
                </h2>
                <p className="text-sm midxmd:text-lg font-poppins mt-1">
                  Our platform offers the opportunity for insurance, banking,
                  and finance companies to transform their documents, including
                  PDFs, scans, images, and handwritten notes, into a digital
                  format. We have created an AI model tailored explicitly for
                  Indian eKYC identification and verification. With an
                  impressive accuracy rate of 90% or above, our model's greatest
                  advantage is its ability to adapt effectively.
                </p>
              </div>
              <div className="midFM:order-2 flex flex-col items-center justify-between gap-5">
                <ul>
                  <li className="flex gap-1 items-center justify-center">
                    <p className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-secondary via-secondary to-primary">
                      ✔
                    </p>
                    <p className="text-sm midxmd:text-lg font-poppins mt-1">
                      Our OCR and ICR technologies recognise printed or
                      handwritten text in digital images of physical documents.
                      They convert scanned paper documents, PDFs, and images
                      into editable and searchable data.
                    </p>
                  </li>
                  <li className="flex gap-1 items-center justify-center">
                    <p className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-secondary via-secondary to-primary">
                      ✔
                    </p>
                    <p className="text-sm midxmd:text-lg font-poppins mt-1">
                      Our OCR/ICR systems use machine learning and AI to enhance
                      accuracy and adapt to various handwriting styles or fonts.
                      They learn from errors, improving reliability and
                      efficiency.
                    </p>
                  </li>
                  <li className="flex gap-1 items-center justify-center">
                    <p className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-secondary via-secondary to-primary">
                      ✔
                    </p>
                    <p className="text-sm midxmd:text-lg font-poppins mt-1">
                      Our OCR/ICR technologies are versatile for global
                      businesses, supporting multiple languages. They recognize
                      and convert the text into various languages, aiding
                      international communication and document management.
                    </p>
                  </li>
                  <li className="flex gap-1 items-center justify-center">
                    <p className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-secondary via-secondary to-primary">
                      ✔
                    </p>
                    <p className="text-sm midxmd:text-lg font-poppins mt-1">
                      In industries like finance and healthcare, our OCR/ICR
                      technologies can excel at extracting specific data from
                      forms or documents. The extracted data can be processed,
                      analyzed, or stored in a database, enhancing efficiency
                      and accuracy.
                    </p>
                  </li>
                  <li className="flex gap-1 items-center justify-center">
                    <p className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-secondary via-secondary to-primary">
                      ✔
                    </p>
                    <p className="text-sm midxmd:text-lg font-poppins mt-1">
                      Our OCR/ICR technologies seamlessly integrate with
                      document management, ERP, or CRM systems, enabling
                      efficient data flow and reducing manual data entry
                      requirements.
                    </p>
                  </li>
                </ul>
                <Link
                  to="demo"
                  // spy={true}
                  smooth={true}
                  offset={-20}
                  duration={1000}
                >
                  <button className="mx-auto bg-gradient-to-r from-primary to-secondary rounded-lg text-white font-poppins text-lg px-6 py-1">
                    View a Demo
                  </button>
                </Link>
              </div>
            </div>

            {/* Third Section */}
            <div className="midFM:mt-64 relative w-screen">
              <img
                src={R2}
                alt=""
                className="absolute -top-[80%] w-screen -left-20"
              />
              <div className="w-[90%]">
                <img src={ellips1} alt="" className="absolute right-0" />
                <img
                  src={ellips2}
                  alt=""
                  className="absolute top-44 -left-20"
                />
                <img
                  src={ellips3}
                  alt=""
                  className="absolute top-[30%] right-[30%]"
                />
                <img
                  src={ellips3}
                  alt=""
                  className="absolute bottom-[10%] left-[20%]"
                />
                <img
                  src={ellips4}
                  alt=""
                  className="absolute bottom-0 right-0"
                />
                <div>
                  <h2 className="text-2xl midxmd:text-4xl font-poppins500 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                    Difference between OCR & ICR
                  </h2>
                </div>

                <div className="mt-10 flex flex-col gap-10">
                  <div className="text-sm midFM:text-lg font-poppins">
                    <p>
                      OCR (Optical Character Recognition) and ICR (Intelligent
                      Character Recognition) are both technologies used to
                      convert different types of documents into editable and
                      searchable data. However, they are designed to handle
                      different types of text and have different levels of
                      complexity in their operation.
                    </p>
                  </div>
                  <div className="text-sm midFM:text-lg font-poppins">
                    <p>
                      OCR is primarily used for reading printed text. It works
                      by analyzing the shapes and patterns of the letters in the
                      scanned image of a document. The OCR software compares
                      these shapes and patterns with those in its database
                      (which contains the shapes and patterns of each character
                      in a particular font). When it finds a match, it converts
                      the image of the character into an editable text
                      character. OCR is highly accurate when used to read
                      printed text, but its accuracy decreases significantly
                      when used to read handwriting.
                    </p>
                  </div>
                  <div className="text-sm midFM:text-lg font-poppins">
                    <p>
                      ICR, on the other hand, is a more advanced version of OCR
                      that is designed to read and learn from handwriting. ICR
                      uses artificial intelligence and machine learning to
                      recognize and learn different handwriting styles. It works
                      by analyzing the unique features of each character in a
                      piece of handwriting, such as the curves, slants, and
                      proportions. Over time, as the ICR software processes more
                      handwriting samples, it learns to recognize a wider
                      variety of handwriting styles, and its accuracy improves.
                    </p>
                  </div>
                  <div className="text-sm midFM:text-lg font-poppins">
                    <p>
                      Both OCR and ICR technologies utilize image processing
                      techniques to enhance the quality and clarity of the input
                      images. They can handle various formats such as scanned
                      paper documents, PDF files, or images captured by cameras.
                      Moreover, at MappOptimist Technologies, our OCR and ICR
                      systems leverage machine learning and AI to enhance
                      accuracy and adaptability to varying handwriting styles
                      and fonts.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/*Fourth Section*/}
            <div className="mt-10 midFM:mt-32 relative">
              <img src={ellips3} alt="" className="absolute -left-16" />
              <img src={ellips5} alt="" className="absolute top-64 -left-28" />
              <div>
                <h2 className="text-2xl midxmd:text-4xl font-poppins500 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Document Recognition & Data Extraction
                </h2>
              </div>
              <div className="mt-5 grid grid-cols-1 gap-5 items-center justify-center midFM:grid-cols-2">
                <div className="order-1 midFM:col-span-2">
                  <p className="font-poppins500 text-lg">
                    At MappOptimist Technologies, We have developed a
                    specialized AI model specifically designed for Indian eKYC
                    identification and verification. Boasting an accuracy rate
                    of 90% or higher, our model's key strength lies in its
                    adaptiveness. It effortlessly processes text regardless of
                    orientation or format changes, consistently producing
                    accurate results. The model proficiently identifies the
                    following types:
                  </p>
                </div>
                <div className="text-lg order-2 midFM:order-2">
                  <ul>
                    <li className="flex gap-1 items-center justify-start font-poppins500">
                      <span>1.</span>
                      <span>Full Aadhaar Card</span>
                    </li>
                    <li className="flex gap-1 items-center justify-start font-poppins500">
                      <span>2.</span>
                      <span>Half Aadhaar Card</span>
                    </li>
                    <li className="flex gap-1 items-center justify-start font-poppins500">
                      <span>3.</span>
                      <span>Pan Card</span>
                    </li>
                    <li className="flex gap-1 items-center justify-start font-poppins500">
                      <span>4.</span>
                      <span>Passport</span>
                    </li>
                    <li className="flex gap-1 items-center justify-start font-poppins500">
                      <span>5.</span>
                      <span>Driving License</span>
                    </li>
                    <li className="flex gap-1 items-center justify-start font-poppins500">
                      <span>6.</span>
                      <span>Voter Id Card</span>
                    </li>
                  </ul>
                </div>
                <div className="order-3 midFM:order-4 midFM:col-span-2">
                  <p className="font-poppins500 text-lg">
                    Post document recognition, the software tool ensures that
                    field detection is done before Optical Character Recognition
                    (OCR). This is directly opposite to other lending process
                    management tools that apply OCR on the entire document image
                    and then count, during post-processing, to identify the
                    required fields in a document.
                  </p>
                </div>
                <div className="order-4 midFM:order-3">
                  <img src={third} alt="" className="mx-auto" />
                </div>
              </div>
            </div>

            {/*Fifth Section*/}
            <div className="mt-10 midFM:mt-72 relative w-screen">
              <img
                src={R3}
                alt=""
                className="absolute -top-[100%] -left-32 w-screen scale-[1.2] hidden midFM:block"
              />
              <div className="w-[90%]">
                <h2 className="text-2xl midxmd:text-4xl font-poppins500 text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  watch a demo video
                </h2>
              </div>
              <div className="order-3 w-[90%] midFM:order-4 midFM:col-span-2 mt-5">
                <p className="font-poppins500 text-lg text-center mx-auto">
                  OCR/ICR helps businesses in extracting, classifying and
                  automating documents for all processes starting from customer
                  on-boarding, sales, finance, bills, medical reports, forms,
                  investigation reports, invoices, KYCs etc.
                </p>
              </div>
              <div
                className="bg-gradient-to-r from-primary to-secondary h-[15rem]  sm:h-[40rem] mx-auto mt-10 mb-32 w-[80%] ml-4 midFM:ml-20 "
                id="demo"
              >
                {data.map((item, index) => (
                  <div
                    key={index}
                    style={{
                      display: activeIndex === index ? "block" : "none",
                    }}
                  >
                    <div className="flex items-center justify-between px-2 py-20 sm:p-10 sm:py-44">
                      <div className="w-[30%]">
                        <img src={item.image} alt="" />
                      </div>
                      <div className="h-[10%] w-[15%]">
                        {" "}
                        <img
                          src={arrow}
                          alt=""
                          className="translate-x-3 midlg:translate-x-9"
                        />
                      </div>
                      <div className="w-[30%]">
                        <img src={ai} alt="" />
                      </div>
                      <div className="h-[10%] w-[15%]">
                        <img src={arrow} alt="" className="-translate-x-4" />
                      </div>
                      <div className="w-[25%]">
                        <img src={item.json} alt="" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OcrIcr;
