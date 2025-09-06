"use client";

import React from "react";
import Image from "next/image";

import { TbPointFilled } from "react-icons/tb";
import Services from "@/components/servicesiconsummary";

const Page = () => {
  return (
    <div className="">
      <div className="flex bg-[#0f2434] flex-col pt-16 w-full p-6 md:p-16">
        <h1 className="text-[#7fa967] text-3xl font-bold mb-6">
          ENERGY YIELD ASSESSMENT
        </h1>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-[60%] p-4">
            <p className="text-white text-xl leading-relaxed">
              RENETRIC is able to provide an independent energy yield assessment
              on energy project. Solar energy yield assessment services play a
              crucial role in helping stakeholders assess the feasibility and
              potential of solar energy projects. By leveraging sophisticated
              modelling techniques and site-specific data, these services enable
              informed decision-making, optimize system design, and maximize the
              economic and environmental benefits of solar energy investments.
            </p>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-[40%] relative h-64 md:h-auto mt-6 md:mt-0">
            <div className="absolute inset-0 bg-black/50 z-10 rounded"></div>
            <div className="relative w-full h-full rounded-xl">
              <Image
                src="/images/energyyieldassessment.jpg"
                alt="energyyieldassessment"
                fill
                className="object-cover rounded"
              />
            </div>
          </div>
        </div>

        <div className="w-full justify-center items-center text-xl mt-12">
          <div className="w-full md:w-[60%] m-auto">
            <h1 className="mb-4 text-[#7fa967] text-2xl text-center">
              Our independent energy yield assessment offering allows us to:
            </h1>
            <div className="space-y-4">
              <div className="flex">
                <TbPointFilled size={20} className="text-[#7fa967] shrink-0" />
                <p className="text-xl text-white ml-2">
                  Analyze energy yield assessment through simulation with
                  various tool such as PV Syst / PV Sol and Homer
                </p>
              </div>
              <div className="flex">
                <TbPointFilled size={20} className="text-[#7fa967] shrink-0" />
                <p className="text-xl text-white ml-2">
                  Provide detail energy yield assessment which will indicate
                  expected annual generation, performance ratio of the system,
                  configuration and probabilities of exceedance P50,P90.
                </p>
              </div>
              <div className="flex">
                <TbPointFilled size={20} className="text-[#7fa967] shrink-0" />
                <p className="text-xl text-white ml-2">
                  System DC-AC ratio optimization for the inverter sizing
                  assessment.
                </p>
              </div>
              <div className="flex">
                <TbPointFilled size={20} className="text-[#7fa967] shrink-0" />
                <p className="text-xl text-white ml-2">
                  Shading analysis of potential obstructions such as buildings,
                  trees, or terrain features that may cast shadows on solar
                  panels and affect energy production.
                </p>
              </div>
              <div className="flex">
                <TbPointFilled size={20} className="text-[#7fa967] shrink-0" />
                <p className="text-xl text-white ml-2">
                  Solid understanding of the latest technology which enable us
                  to suggest best solution based on client needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Services />
    </div>
  );
};

export default Page;
