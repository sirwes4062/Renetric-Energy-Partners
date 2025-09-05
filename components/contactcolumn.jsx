"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const images = [
  "/images/contactbackground.jpg",
  "/images/contactbackground2.jpg",
  "/images/contactbackground3.jpg",
];

const ContactColumn = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000); // change image every 2 seconds for slower transitions
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[80vh] flex items-center justify-center p-8 overflow-hidden">
      {/* Background images with fade effect */}
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-2000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}>
          <Image
            src={src}
            alt={`Contact ${index}`}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center w-full h-full z-20">
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center  p-4 sm:p-0">
          <h1 className="text-white text-2xl sm:text-4xl font-bold text-center mb-4">
            Let’s Talk About Your Next Project
          </h1>

          <p className="text-gray-300 text-center mb-8 text-xl">
            Need support with your upcoming design project? Whether you’re
            seeking expert guidance or a reliable design partner, our team is
            here to help. Get in touch today, and we’ll explore your
            requirements in detail before providing a tailored, competitive
            quote.
          </p>
        </div>
        <Link href="/contact">
          <button className="px-8 py-3 bg-[#89c468] text-white font-bold rounded-lg shadow hover:bg-[#6fa04e] transition">
            <span className="text-lg">Let's Talk</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ContactColumn;
