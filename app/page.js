"use client";

import Link from "next/link";

import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

import { IoIosArrowDropdownCircle } from "react-icons/io";

import ServicesContainer from "@/components/servicescontainer";
import ContactColumn from "@/components/contactcolumn";

export default function Home() {
  return (
    // add a loading spinner before the component
    <div className="w-full overflow-x-hidden" id="top">
      <div className="relative w-full h-screen">
        <div className="absolute inset-0 flex flex-col z-50 py-12 px-4 sm:px-8">
          {/* Top-aligned content */}
          <div className=" h-[60vh] sm:h-[70vh] mt-24 flex flex-col items-center">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl text-[#89c468] font-bold text-center">
              <Typewriter
                words={["Renetric Energy Partners"]}
                loop={1}
                cursor
                cursorStyle=""
                typeSpeed={50}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </h1>

            <div className="mt-6 space-y-2">
              <p className="font-bold text-center text-white md:text-xl sm:text-2xl">
                <Typewriter
                  words={[
                    "We deliver tailored clean energy solutions that cut costs and reduce risks",
                  ]}
                  loop={1}
                  cursor
                  typeSpeed={50}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </p>
              <p className="font-bold text-center text-white md:text-xl sm:text-2xl">
                <Typewriter
                  words={[
                    "Expert consultancy in solar, storage, and grid integration.",
                  ]}
                  loop={1}
                  cursor
                  typeSpeed={50}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </p>
            </div>

            <div className="flex-1 flex items-end justify-center mt-24">
              <Link href="#services" scroll={true}>
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}>
                  <IoIosArrowDropdownCircle className="text-6xl text-[#89c468] cursor-pointer" />
                </motion.div>
              </Link>
            </div>
          </div>
        </div>

        <video className="w-full h-full object-cover" autoPlay muted loop>
          <source src="/videos/hd-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <ServicesContainer />
      <ContactColumn />
    </div>
  );
}
