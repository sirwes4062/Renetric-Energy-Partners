"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import ContactColumn from "@/components/contactcolumn";

import { Typewriter } from "react-simple-typewriter";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const serviceContent = {
    "/services/technicalfeasibilitystudy": {
      title: "Technical Feasibility Study",
      description:
        "We assess the practicality of your project with detailed site evaluations, energy potential, and technical requirements.",
    },
    "/services/solarpvdesign": {
      title: "Solar PV Design",
      description:
        "Our team designs efficient and sustainable solar PV systems tailored to maximize performance and energy savings.",
    },
    "/services/energyyieldassessment": {
      title: "Energy Yield Assessment",
      description:
        "We provide accurate yield predictions, helping you forecast energy output and optimize your return on investment.",
    },
    "/services/batterylayoutdesign": {
      title: "Battery Layout Design",
      description:
        "We design advanced battery storage systems that ensure reliability, efficiency, and long-term performance.",
    },
    "/services/duediligencestudy": {
      title: "Due Diligence Study",
      description:
        "Thorough evaluation of project risks, financials, and compliance to help you make informed investment decisions.",
    },
    "/services/dnogridconnectionadvisoryservice": {
      title: "DNO Grid Connection Advisory",
      description:
        "Expert guidance for smooth and compliant connections to the distribution grid, minimizing delays and costs.",
    },
  };

  const content = serviceContent[pathname] || {
    title: "Our Services",
    description:
      "Explore our range of energy solutions designed to power a sustainable future.",
  };

  const parts = pathname.split("/").filter(Boolean);

  return (
    <div className="">
      <div className="bg-red-200"></div>
      <video className="w-full h-full object-cover" autoPlay muted loop>
        <source src="/videos/servicespagevideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-[#89c468]  mb-4">
          <Typewriter
            words={[content.title]}
            loop={1}
            cursor
            cursorStyle=""
            typeSpeed={50}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
          <Typewriter
            words={[content.description]}
            loop={1}
            cursor
            cursorStyle=""
            typeSpeed={50}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </p>
      </div>
      <div className="absolute bottom-4 left-4 text-sm md:text-base text-white flex space-x-2">
        <Link href="/" className="hover:text-[#89c468] font-bold">
          Home
        </Link>
        <span>&gt;&gt;</span>
        <Link href="/services" className="hover:text-[#89c468] font-bold">
          Services
        </Link>
        {parts[1] && (
          <>
            <span>&gt;&gt;</span>
            <span className="text-[#89c468] text-bold">{content.title}</span>
          </>
        )}
      </div>
      {children}
      <ContactColumn />
    </div>
  );
}
