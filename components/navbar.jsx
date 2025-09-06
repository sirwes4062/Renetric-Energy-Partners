"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { MdPhoneAndroid } from "react-icons/md";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <div className="absolute top-0 left-0 w-full flex flex-col z-60">
      <div className="w-full flex flex-col sm:flex-row justify-between sm:justify-around px-4 py-4 sm:p-0">
        <div className="w-full flex flex-row justify-between sm:justify-around">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="logo"
              width={150}
              height={150}
              className="object-contain w-12 sm:w-14 lg:w-16"
            />
          </Link>

          {/* Desktop links */}
          <div className="relative text-white hidden sm:flex items-center space-x-12 text-xl">
            <div>
              <Link
                href="/"
                className="relative font-bold text-center cursor-pointer hover:text-[#89c468] 
               after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] 
               after:bg-[#89c468] after:w-0 after:transition-all after:duration-300 hover:after:w-full">
                Home
              </Link>
            </div>

            {/* Services with dropdown (Desktop) */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}>
              <span
                className="relative font-bold text-center cursor-pointer hover:text-[#89c468] 
               after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] 
               after:bg-[#89c468] after:w-0 after:transition-all after:duration-300 hover:after:w-full">
                Services
              </span>

              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scaleY: 0.8 }}
                    animate={{ opacity: 1, y: 0, scaleY: 1 }}
                    exit={{ opacity: 0, y: -10, scaleY: 0.8 }}
                    transition={{ duration: 0.3 }}
                    className="absolute left-0 mt-2 w-56 bg-[#8ac468e5] rounded-md shadow-lg z-50">
                    <div className="flex flex-col text-white font-bold">
                      <Link
                        href="/services/technicalfeasibilitystudy"
                        className="px-4 py-2 text-sm hover:bg-white hover:text-[#89c468]">
                        Technical Feasibility Study
                      </Link>
                      <Link
                        href="/services/solarpvdesign"
                        className="px-4 py-2 text-sm hover:bg-white hover:text-[#89c468]">
                        Solar PV Design
                      </Link>
                      <Link
                        href="/services/energyyieldassessment"
                        className="px-4 py-2 text-sm hover:bg-white hover:text-[#89c468]">
                        Energy Yield Assessment
                      </Link>
                      <Link
                        href="/services/batterylayoutdesign"
                        className="px-4 py-2 text-sm hover:bg-white hover:text-[#89c468]">
                        Battery Layout Design
                      </Link>
                      <Link
                        href="/services/duediligencestudy"
                        className="px-4 py-2 text-sm hover:bg-white hover:text-[#89c468]">
                        Due Diligence Study
                      </Link>
                      <Link
                        href="/services/dnogridconnectionadvisoryservice"
                        className="px-4 py-2 text-sm hover:bg-white hover:text-[#89c468]">
                        DNO Grid Connection Advisory Service
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
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

          {/* Phone number */}
          <div className="hidden sm:flex items-center space-x-2 cursor-pointer">
            <MdPhoneAndroid size={24} className="text-[#89c468] mr-2" />
            <p className="text-white hover:text-[#89c468] text-xl hover:underline hover:decoration-[#89c468] hover:underline-offset-4">
              +44 - 7782791953
            </p>
          </div>

          {/* Hamburger menu */}
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
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="z-50 w-full bg-[#8ac468e5] font-bold flex sm:hidden flex-col items-center justify-center"
              initial={{ scaleY: 0, transformOrigin: "top" }}
              animate={{
                scaleY: 1,
                transformOrigin: "top",
                transition: { duration: 0.5 },
              }}
              exit={{ scaleY: 0, transformOrigin: "top" }}>
              {/* Home */}
              <div className="flex w-full border-b border-[#CCCCCC] py-2">
                <Link
                  href="/"
                  className="text-white hover:text-[#0f2434] m-auto">
                  Home
                </Link>
              </div>

              {/* Services (Mobile toggle dropdown) */}
              <div className="flex flex-col w-full border-b border-[#CCCCCC]">
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="text-white hover:text-[#0f2434] py-2">
                  Services {isServicesOpen ? "▲" : "▼"}
                </button>
                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="flex flex-col justify-center items-center bg- text-white">
                      <Link
                        href="/services/technicalfeasibilitystudy"
                        className="px-4 py-2 text-sm hover:bg-white hover:text-[#89c468]">
                        Technical Feasibility Study
                      </Link>
                      <Link
                        href="/services/solarpvdesign"
                        className="px-4 py-2 text-sm hover:bg-white hover:text-[#89c468]">
                        Solar PV Design
                      </Link>
                      <Link
                        href="/services/energyyieldassessment"
                        className="px-4 py-2 text-sm hover:bg-white hover:text-[#89c468]">
                        Energy Yield Assessment
                      </Link>
                      <Link
                        href="/services/battery"
                        className="px-4 py-2 text-sm hover:bg-white hover:text-[#89c468]">
                        Battery Layout Design
                      </Link>
                      <Link
                        href="/services/duediligencestudy"
                        className="px-4 py-2 text-sm hover:bg-white hover:text-[#89c468]">
                        Due Diligence Study
                      </Link>
                      <Link
                        href="/services/dnogridconnectionadvisoryservice"
                        className="px-4 py-2 text-sm hover:bg-white hover:text-[#89c468]">
                        DNO Grid Connection Advisory Service
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* About */}
              <div className="flex w-full border-b border-[#CCCCCC] pb-2">
                <Link
                  href="/about"
                  className="text-white hover:text-[#0f2434] m-auto">
                  About
                </Link>
              </div>

              {/* Contact */}
              <div className="flex w-full pb-2">
                <Link
                  href="/contact"
                  className="text-white hover:text-[#0f2434] m-auto">
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
