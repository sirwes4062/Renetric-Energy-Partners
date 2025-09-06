import React from "react";

import { BiSolidZap } from "react-icons/bi";
import { PiCarBatteryFill } from "react-icons/pi";
import { IoBarChartSharp } from "react-icons/io5";
import { FaShieldHalved } from "react-icons/fa6";
import { BsCpuFill } from "react-icons/bs";
import { FaNetworkWired } from "react-icons/fa6";

const services = [
  {
    icon: <BiSolidZap size={48} className="text-[#89c468]" />,
    title: "Technical Feasibility",
    desc: "We evaluate location, solar irradiance, shading, and available space to determine project potential.",
  },
  {
    icon: <PiCarBatteryFill size={48} className="text-[#89c468]" />,
    title: "Battery Storage",
    desc: "Designing efficient BESS solutions tailored to energy demand, grid interaction, and cost savings.",
  },
  {
    icon: <IoBarChartSharp size={48} className="text-[#89c468]" />,
    title: "Financial Analysis",
    desc: "Forecasting P50/P90 energy yields, investment returns, and financial risks for clear decision making.",
  },
  {
    icon: <FaShieldHalved size={48} className="text-[#89c468]" />,
    title: "Regulatory Compliance",
    desc: "Navigating permits, grid rules, and regulations to ensure smooth approvals and compliance.",
  },
  {
    icon: <BsCpuFill size={48} className="text-[#89c468]" />,
    title: "System Optimization",
    desc: "Optimizing tilt, pitch, and energy storage configurations for maximum efficiency.",
  },
  {
    icon: <FaNetworkWired size={48} className="text-[#89c468]" />,
    title: "Grid Advisory",
    desc: "Advising on integration with the grid, DNO connections, and long-term operational strategy.",
  },
];

export default function Services() {
  return (
    <div className="bg-[#f8f9fa] py-16 px-8">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition flex flex-col items-center text-center">
              <div className="mb-4">{service.icon}</div>
              <h2 className="text-2xl font-semibold text-[#2d3748] mb-2">
                {service.title}
              </h2>
              <p className="text-xl text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
