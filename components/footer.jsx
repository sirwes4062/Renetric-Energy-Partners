"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { IoIosArrowDropupCircle } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    margin: "-100px 0px -100px 0px",
  });

  return (
    <div className="h-[50vh] sm:h-[80vh] relative flex flex-col justify-center items-center bg-[#0f2434] sm:p-16">
      <motion.div
        ref={ref}
        className="flex flex-col justify-center items-center p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 2, ease: "easeOut" }} // slower fade
      >
        <div className="flex space-x-4 mb-8">
          <div className="w-12 h-12 rounded-full flex justify-center items-center bg-white hover:text-[#1877F2] hover:opacity-80">
            <a href="#">
              <FaFacebookF />
            </a>
          </div>
          <div className="w-12 h-12 rounded-full flex justify-center items-center bg-white hover:text-[#E4405F] hover:opacity-80">
            <a href="#">
              <RiInstagramLine />
            </a>
          </div>
          <div className="w-12 h-12 rounded-full flex justify-center items-center bg-white hover:text-[#0A66C2] hover:opacity-80">
            <a href="#">
              <FaLinkedinIn />
            </a>
          </div>
          <div className="w-12 h-12 rounded-full flex justify-center items-center bg-white hover:text-[#FF0000] hover:opacity-80">
            <a href="#">
              <IoLogoYoutube />
            </a>
          </div>
        </div>

        <Image src="/images/logo.png" alt="logo" width={100} height={100} />

        <h1 className="text-[#89c468] font-bold text-2xl mt-4">
          Renetric Energy Partners.
        </h1>
        <p className="text-gray-200 mt-2 text-center">
          © 2025 Renetric Energy Partners. All rights reserved.
        </p>
      </motion.div>

      <Link href="#top">
        <motion.div
          className="absolute cursor-pointer bottom-4 right-4"
          animate={{ y: [0, -15, 0] }} // move up 15px and back
          transition={{
            duration: 1, // 1 second per bounce
            repeat: Infinity, // repeat forever
            ease: "easeInOut", // smooth bounce
          }}>
          <IoIosArrowDropupCircle className="text-6xl text-[#89c468] w-12 h-12 sm:w-16 sm:h-16" />
        </motion.div>
      </Link>
    </div>
  );
};

export default Footer;
