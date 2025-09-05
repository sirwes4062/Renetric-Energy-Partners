"use client";

import React from "react";
import { useState } from "react";
import Link from "next/link";

import { motion, AnimatePresence } from "framer-motion";

import Image from "next/image";

import { MdPhoneAndroid } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="absolute top-0 left-0 w-full flex flex-col z-60">
      <div className="w-full flex flex-col sm:flex-row justify-between sm:justify-around px-4 py-4 sm:p-0">
        <div className="w-full flex flex-row justify-between sm:justify-around">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="logo"
              width={150}
              height={150}
              className="object-contain w-12 sm:w-14 lg:w-16"
            />
          </Link>

          {/* add the properties of the repeated classes to tailwind */}
          <div className="text-white hidden sm:flex items-center space-x-6 text-xl">
            <div>
              <Link
                href="/"
                className="relative font-bold text-center cursor-pointer hover:text-[#89c468] 
               after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] 
               after:bg-[#89c468] after:w-0 after:transition-all after:duration-300 hover:after:w-full">
                Home
              </Link>
            </div>

            <div>
              <Link
                href="/services"
                className="relative font-bold text-center cursor-pointer hover:text-[#89c468] 
               after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] 
               after:bg-[#89c468] after:w-0 after:transition-all after:duration-300 hover:after:w-full">
                Services
              </Link>
            </div>
            <div>
              <Link
                href="/about"
                className="relative font-bold text-center cursor-pointer hover:text-[#89c468] 
               after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] 
               after:bg-[#89c468] after:w-0 after:transition-all after:duration-300 hover:after:w-full">
                About
              </Link>
            </div>
            <div>
              <Link
                href="/contact"
                className="relative font-bold text-center cursor-pointer hover:text-[#89c468] 
               after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] 
               after:bg-[#89c468] after:w-0 after:transition-all after:duration-300 hover:after:w-full">
                Contact
              </Link>
            </div>
          </div>
          <div className="hidden sm:flex items-center space-x-2 cursor-pointer -950">
            <MdPhoneAndroid size={24} className="text-[#89c468] mr-2" />
            <p className="text-white hover:text-[#89c468] text-xl hover:underline hover:decoration-[#89c468] hover:underline-offset-4">
              +44 - 7782791953
            </p>
          </div>

          {/* hamburger menu */}
          <div className="flex items-center sm:hidden">
            {!isOpen ? (
              <RxHamburgerMenu
                className="size-8 text-white cursor-pointer"
                onClick={() => setIsOpen(true)}
              />
            ) : (
              <RxCross2
                className="size-8 text-white cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
            )}
          </div>
          {/* end of hamburger menu */}
        </div>

        {/* navbar drop down for smaller screen sizes */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="z-50 w-full bg-[#8ac468e5] font-bold flex sm:hidden flex-col items-center justify-center space-y-4"
              initial={{
                scaleY: 0,
                transformOrigin: "top",
              }}
              animate={{
                scaleY: 1,
                transformOrigin: "top",
                transition: {
                  duration: 0.5,
                },
              }}
              exit={{
                scaleY: 0,
                transformOrigin: "top",
              }}>
              <div className="flex w-full border-b border-[#CCCCCC] py-2">
                <Link
                  href="/"
                  className="text-white hover:text-[#89c468] m-auto">
                  Home
                </Link>
              </div>

              <div className="flex w-full border-b border-[#CCCCCC] pb-2">
                <Link
                  href="/services"
                  className="text-white hover:text-[#89c468] m-auto">
                  Services
                </Link>
              </div>
              <div className="flex w-full border-b border-[#CCCCCC]  pb-2">
                <Link
                  href="/about"
                  className="text-white hover:text-[#89c468] m-auto">
                  About
                </Link>
              </div>
              <div className="flex w-full pb-2">
                <Link
                  href="/contact"
                  className="text-white hover:text-[#89c468] m-auto">
                  Contact
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Navbar;
<h1>This is the Navbar</h1>;
