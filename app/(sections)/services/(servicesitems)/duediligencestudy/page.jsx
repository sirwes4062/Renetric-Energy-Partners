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
          Due Diligence Study
        </h1>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-[60%] p-4">
            <p className="text-white text-xl leading-relaxed">
              RENETRIC is able to provide due diligence study on solar PV and
              BESS project. We offer an independent service that is aimed at
              evaluating the financial, technical, legal, and regulatory aspects
              of solar energy and BESS projects. It involves a thorough
              examination of project documentation, site conditions, financial
              models, and regulatory compliance to assess the risks and
              opportunities associated with energy investments.
            </p>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-[40%] relative h-64 md:h-auto mt-6 md:mt-0">
            <div className="absolute inset-0 bg-black/50 z-10 rounded"></div>
            <div className="relative w-full h-full rounded-xl">
              <Image
                src="/images/duedeligence.jpg"
                alt="duedeligence"
                fill
                className="object-cover rounded"
              />
            </div>
          </div>
        </div>

        <div className="w-full justify-center items-center text-xl mt-12">
          <div className="w-full md:w-[60%] m-auto">
            <h1 className="mb-4 text-[#7fa967] text-2xl text-center">
              Our due diligence offering allows us to:
            </h1>

            <div className="space-y-4">
              <div className="flex">
                <TbPointFilled size={20} className="text-[#7fa967] shrink-0" />
                <p className="text-xl text-white ml-2">
                  Identify technical constraints and potential risk in the early
                  stage of project and suggest appropriate mitigation actions.
                </p>
              </div>
              <div className="flex">
                <TbPointFilled size={20} className="text-[#7fa967] shrink-0" />
                <p className="text-xl text-white ml-2">
                  Analyzing solar PV system design, including panel orientation,
                  tilt angles, mounting structures, and electrical
                  configurations, to optimize energy production.
                </p>
              </div>
              <div className="flex">
                <TbPointFilled size={20} className="text-[#7fa967] shrink-0" />
                <p className="text-xl text-white ml-2">
                  Provide performance analysis of the energy production data,
                  performance guarantees, and simulation models to validate
                  energy yield estimates and system performance expectations.
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
