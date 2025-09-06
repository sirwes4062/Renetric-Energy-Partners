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
          BATTERY LAYOUT DESIGN
        </h1>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-[60%] p-4">
            <p className="text-white text-xl leading-relaxed">
              At RENETRIC, we unlock the potential of solar energy and battery
              storage through detailed feasibility studies. From site analysis
              to financial forecasting, we give you the confidence to invest
              wisely. We assess your location, including solar irradiance,
              shading, and space availability, while also studying energy usage
              patterns to ensure your system meets real demand and reduces grid
              dependence. We navigate regulatory requirements and grid rules,
              use P50/P90 forecasts with tilt and pitch optimization, and
              deliver a financial analysis of costs, risks, and returns. The
              result? A clear roadmap showing whether your project is both
              possible and profitable. With RENETRIC, you gain more than a
              study—you gain a partner committed to your success.
            </p>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-[40%] relative h-64 md:h-auto mt-6 md:mt-0">
            <div className="absolute inset-0 bg-black/50 z-10 rounded"></div>
            <div className="relative w-full h-full rounded-xl">
              <Image
                src="/images/batterylayout.jpg"
                alt="batterylayout"
                fill
                className="object-cover rounded"
              />
            </div>
          </div>
        </div>

        <div className="w-full justify-center items-center text-xl mt-12">
          <div className="w-full md:w-[60%] m-auto">
            <h1 className="mb-4 text-[#7fa967] text-2xl text-center">
              Our BESS design offering allows us to:
            </h1>

            <div className="space-y-4">
              <div className="flex">
                <TbPointFilled size={20} className="text-[#7fa967] shrink-0" />
                <p className="text-xl text-white ml-2">
                  Our BESS design considers latest technology, e.g battery type,
                  fire safety consideration etc.
                </p>
              </div>
              <div className="flex">
                <TbPointFilled size={20} className="text-[#7fa967] shrink-0" />
                <p className="text-xl text-white ml-2">
                  Provide BESS layout suitable for Planning submission.
                </p>
              </div>
              <div className="flex">
                <TbPointFilled size={20} className="text-[#7fa967] shrink-0" />
                <p className="text-xl text-white ml-2">
                  Load analysis and BESS design to meet demand of user
                </p>
              </div>
              <div className="flex">
                <TbPointFilled size={20} className="text-[#7fa967] shrink-0" />
                <p className="text-xl text-white ml-2">
                  Identify potential risks and mitigate them at the early stage
                  of the project.
                </p>
              </div>
              <div className="flex">
                <TbPointFilled size={20} className="text-[#7fa967] shrink-0" />
                <p className="text-xl text-white ml-2">
                  We are able to design hybrid, off grid and Mini grid system.
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
