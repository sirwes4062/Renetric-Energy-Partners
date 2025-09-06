// import React from "react";

// const page = () => {
//   return (
//     <div>
//       <h1>this is the solar pv design page</h1>
//     </div>
//   );
// };

// export default page;

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
          Solar PV Design
        </h1>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-[60%] p-4">
            <p className="text-white text-xl leading-relaxed">
              RENETRIC is able to provide detailed and optimise layout that can
              be taken into planning stage Solar PV design is a multifaceted
              process that requires careful analysis, planning, and
              implementation to achieve optimal performance and efficiency. By
              considering factors such as site characteristics, system sizing,
              component selection, electrical design, and regulatory
              requirements, solar PV designers can develop robust and reliable
              solar energy systems that deliver long-term economic and
              environmental benefits.
            </p>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-[40%] relative h-64 md:h-auto mt-6 md:mt-0">
            <div className="absolute inset-0 bg-black/50 z-10 rounded"></div>
            <div className="relative w-full h-full rounded-xl">
              <Image
                src="/images/solardesign.jpg"
                alt="solardesign"
                fill
                className="object-cover rounded"
              />
            </div>
          </div>
        </div>

        <div className="w-full justify-center items-center text-xl mt-12">
          <div className="w-full md:w-[60%] m-auto">
            <h1 className="mb-4 text-[#7fa967] text-2xl text-center">
              Our solar PV design offering allows us to:
            </h1>

            <div className="space-y-4">
              <div className="flex">
                <TbPointFilled size={20} className="text-[#7fa967] shrink-0" />
                <p className="text-xl text-white ml-2">
                  Design and develop from small scale to large scale Solar PV
                  plant.
                </p>
              </div>
              <div className="flex">
                <TbPointFilled size={20} className="text-[#7fa967] shrink-0" />
                <p className="text-xl text-white ml-2">
                  Design based on industry standards and such as BS7671, IET
                  Code of Practice, MCS etc.
                </p>
              </div>
              <div className="flex">
                <TbPointFilled size={20} className="text-[#7fa967] shrink-0" />
                <p className="text-xl text-white ml-2">
                  Use of industry specialized software to design our PV system
                  such as AutoCAD, PV Case, PV Sol, PV Syst.
                </p>
              </div>
              <div className="flex">
                <TbPointFilled size={20} className="text-[#7fa967] shrink-0" />
                <p className="text-xl text-white ml-2">
                  Details electrical calculation for the system.
                </p>
              </div>
              <div className="flex">
                <TbPointFilled size={20} className="text-[#7fa967] shrink-0" />
                <p className="text-xl text-white ml-2">
                  Provide necessary layout drawings as required such planning
                  drawing
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
