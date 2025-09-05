"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { useState, useEffect } from "react";
import Link from "next/link";

import Stats from "./statcontainer";

// react icons
import { FaArrowRight } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const services = [
  {
    title: "Technical Feasibility Study",
    description:
      "A Technical Feasibility Study assesses the technical, financial, and regulatory viability of solar and BESS projects to optimize design, maximize yield, and mitigate risks.",
    image: "/images/technicalfeasibility.jpg",
  },
  {
    title: "Solar PV Design",
    description:
      "We provide optimized, standards-compliant solar PV system layouts and detailed electrical designs, from small to large-scale projects, using advanced industry software and tools.",
    image: "/images/solardesign.jpg",
  },
  {
    title: "Energy Yield Assessment",
    description:
      "We deliver accurate, simulation-based energy yield analyses (P50/P90), shading studies, and system optimization to help clients evaluate, design, and maximize the performance of their solar projects.",
    image: "/images/energyyieldassessment.jpg",
  },
  {
    title: "Battery Layout Design",
    description:
      "We provide optimized Battery Energy Storage System (BESS) layout designs for standalone, hybrid, or co-located projects, ensuring safety, reliability, and efficient integration with renewable energy systems.",
    image: "/images/batterylayout.jpg",
  },
  {
    title: "Due Diligence Study",
    description:
      "We deliver independent due diligence studies for solar PV and BESS projects, assessing financial, technical, legal, and regulatory aspects to identify risks, validate performance, and ensure informed investment decisions.",
    image: "/images/duedeligence.jpg",
  },
  {
    title: "DNO Grid Connection Advisory Service",
    description:
      "We deliver independent due diligence studies for solar PV and BESS projects, assessing financial, technical, legal, and regulatory aspects to identify risks, validate performance, and ensure informed investment decisions.",
    image: "/images/solarfarm.png",
  },
];

const ServicesContainer = () => {
  const [showSliderImageOverlay, setShowSliderImageOverlay] = useState(false);
  console.log(showSliderImageOverlay);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleOpenOverlay = (index) => {
    setCurrentImageIndex(index); // start with clicked image
    setShowSliderImageOverlay(true);
  };

  useEffect(() => {
    if (showSliderImageOverlay) {
      document.body.style.overflow = "hidden"; // disable scroll
    } else {
      document.body.style.overflow = "auto"; // enable scroll again
    }

    return () => {
      document.body.style.overflow = "auto"; // cleanup
    };
  }, [showSliderImageOverlay]);

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleCloseOverlay = () => {
    setShowSliderImageOverlay(false);
  };

  // array of three images
  const images = [
    { src: "/images/BESS-Site-layout-plan.jpg", alt: "BESS-Site-layout-plan" },
    { src: "/images/PV-Solar-layout-plan.jpg", alt: "PV-Solar-layout-plan" },
    { src: "/images/switchroom-elevation.jpg", alt: "switchroom-elevation" },
  ];

  return (
    <>
      <div
        className="bg-[#0f2434] px-8 md:px-20 py-8 flex flex-col justify-center items-center"
        id="services">
        <motion.div
          className=""
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.3 }} // 👈 ensures it triggers when in view
        >
          <h1 className="flex justify-center items-center text-3xl text-[#89c468] mb-8 font-bold">
            What We do
          </h1>

          {/* start */}
          <div className="text-white space-y-2">
            <h1 className="text-xl sm:text-5xl font-bold text-center">
              Design Services: Energy Sector
            </h1>
            <p className="text-gray-300 text-center sm:text-xl font-bold">
              Providing comprehensive design support for utility-scale solar PV
              and Battery Energy Storage (BESS) systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-4 text-white my-20">
            <div className="flex items-center justify-center font-bold text-xl sm:text-5xl h-auto md:h-64 w-full text-center">
              Powering projects with smart energy design
            </div>

            <div className="h-auto md:h-64 w-full">
              <p className="sm:text-xl text-center">
                RENETRIC Energy Partners provides businesses worldwide with
                Renewables Design, Utility Grid-Scale PV Solar Design, Battery
                Energy Storage (BESS) Design, 2D/3D Visualization, and BIM
                services
              </p>
            </div>

            <div className="h-auto md:h-64 w-full">
              <p className="sm:text-xl text-center">
                We have a strong connection to local clients in Cheltenham &
                Gloucester and have been serving these areas for over 10 years.
                We’ve designed over 230 Renewables Projects for planning
                application, totalling 19.215GW. That’s enough to power
                13,450,500 homes!
              </p>
            </div>
          </div>
        </motion.div>

        {/* start of the stat */}
        <Stats />
        {/* end of the stat */}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-10 mt-8 mx-auto max-w-6xl w-full">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="w-full max-w-sm shadow mb-8 rounded overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.5 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}>
              {/* Image container */}
              <div className="relative w-full h-[200px] mb-2 rounded overflow-hidden group">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover rounded transform transition duration-500 group-hover:scale-105 group-hover:brightness-75"
                />
              </div>

              {/* Content */}
              <div className="w-full space-y-3">
                <h1 className="font-bold text-2xl text-[#89c468]">
                  {service.title}
                </h1>
                <p className="text-white">{service.description}</p>
                <div className="flex items-center text-white hover:text-[#89c468] transition-colors duration-500 cursor-pointer">
                  <h1 className="mr-2">Find out more</h1>
                  <FaArrowRight />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* to add the what we offer section in a white backgound */}
      {/* beginning */}
      <motion.div
        className="relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 1.5 }}>
        <div
          className="w-full flex flex-col md:flex-row bg-[#e7ecef]"
          id="what-we-offer">
          {/* Images container */}
          <div className="w-full md:w-1/2 flex flex-col items-center py-8 md:py-16">
            <Link
              href="#what-we-offer"
              className="w-[90%] relative flex flex-col"
              onClick={() => setShowSliderImageOverlay(true)}>
              {/* First Image */}
              <motion.div
                initial={{ scale: 1.2, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ amount: 0.3 }}
                transition={{ duration: 1 }}>
                <Image
                  src="/images/BESS-Site-layout-plan.jpg"
                  alt="BESS-Site-layout-plan"
                  width={300}
                  height={300}
                  onClick={() => handleOpenOverlay(0)}
                />
              </motion.div>

              {/* Second Image */}
              <motion.div
                className="relative -mt-20 ml-12 z-10"
                initial={{ scale: 1.2, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ amount: 0.3 }}
                transition={{ duration: 1, delay: 0.2 }}>
                <Image
                  src="/images/PV-Solar-layout-plan.jpg"
                  alt="PV-Solar-layout-plan"
                  width={400}
                  height={400}
                  onClick={() => handleOpenOverlay(1)}
                />
              </motion.div>

              {/* Third Image */}
              <motion.div
                className="relative -mt-20 ml-auto z-20"
                initial={{ scale: 1.2, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ amount: 0.3 }}
                transition={{ duration: 1, delay: 0.4 }}>
                <Image
                  src="/images/switchroom-elevation.jpg"
                  alt="switchroom-elevation"
                  width={250}
                  height={250}
                  onClick={() => handleOpenOverlay(2)}
                />
              </motion.div>
            </Link>
          </div>

          {/* Text container */}
          <motion.div
            className="w-full md:w-1/2 p-6 md:p-20"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 1, delay: 0.5 }}>
            <h1 className="text-2xl md:text-4xl text-[#0f2434] font-bold mb-4">
              RENETRIC: What can we provide?
            </h1>

            <div className="text-[#0f2434] text-xl space-y-8">
              <p>
                <span className="text-2xl font-bold">
                  01. Technical Feasibility Study
                </span>
                <br />
                We assess project viability by analyzing solar resources, site
                conditions, regulations, and financial suitability.
              </p>
              <p>
                <span className="text-2xl font-bold">02. Solar PV Design </span>
                <br />
                We deliver efficient PV system designs using industry standards
                and advanced software tools.
              </p>
              <p>
                <span className="text-2xl font-bold">
                  03. Energy Yield Assessment
                </span>
                <br />
                We forecast project generation potential through simulations,
                shading analysis, and inverter optimization.
              </p>
              <p>
                <span className="text-2xl font-bold">
                  04. Battery Layout Design (BESS){" "}
                </span>
                <br />
                We design safe, efficient BESS layouts tailored for grid,
                off-grid, or hybrid systems.
              </p>
              <p>
                <span className="text-2xl font-bold">
                  05. Due Diligence Study
                </span>
                <br />
                We evaluate technical, financial, and regulatory aspects to
                identify risks and validate energy models.
              </p>
              <p>
                <span className="text-2xl font-bold">
                  06. DNO Grid Connection Advisory Service{" "}
                </span>
                <br />
                We support clients in preparing plans, schematics, and
                applications for grid connections.
              </p>
            </div>
          </motion.div>
        </div>

        {showSliderImageOverlay && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-white z-50"
              onClick={handleCloseOverlay}>
              <FaTimes className="size-8 hover:text-[#89c468]" />
            </button>

            {/* Left arrow */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white z-50"
              onClick={handlePrev}>
              <IoIosArrowDropleftCircle className="text-[#89c468] size-12" />
            </button>

            {/* Image container */}
            <div className="relative w-full max-w-4xl px-4">
              <Image
                src={images[currentImageIndex].src}
                alt={images[currentImageIndex].alt}
                width={1200}
                height={800}
                className="w-full h-auto max-h-[80vh] object-contain rounded-md"
              />
            </div>

            {/* Right arrow */}
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white z-50"
              onClick={handleNext}>
              <IoIosArrowDroprightCircle className="text-[#89c468] size-12" />
            </button>
          </div>
        )}
      </motion.div>
    </>
  );
};

export default ServicesContainer;
