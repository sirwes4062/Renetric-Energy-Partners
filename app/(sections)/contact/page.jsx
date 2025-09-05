"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiPhoneCall } from "react-icons/fi";
import { FaRegEnvelope } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import WhyChooseUs from "@/components/whychooseus";

// ✅ Zod validation schema
const schema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  phoneNumber: z.string().regex(/^\+?\d{7,15}$/, "Enter a valid phone number"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Include an @ in the email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const Page = () => {
  const [submissionStatus, setSubmissionStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    setSubmissionStatus("Sending...");

    const serviceId = "service_7h0k02s";
    const templateId = "template_nb607pm";
    const publicKey = "_pAvXiv8KMCViKGog";

    // email js template parameters
    emailjs.send(serviceId, templateId, data, publicKey).then(
      () => {
        setSubmissionStatus("Message sent successfully!");
        reset();
        setIsLoading(false);
      },
      () => {
        setSubmissionStatus("Failed to send message.");
        setIsLoading(false);
      }
    );
  };

  return (
    <div>
      {/* Video section */}
      <div className="relative w-full h-[60vh] overflow-hidden">
        <video
          className="w-full h-[60vh] object-cover"
          autoPlay
          muted
          loop
          playsInline>
          <source src="/videos/contactuspagevideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-8">
          <h1 className="text-4xl sm:text-6xl font-bold text-[#89c468]">
            Contact Us
          </h1>
          <p className="text-xl sm:text-2xl font-bold text-white text-center">
            We’re always happy to chat with great people.
          </p>
        </div>
      </div>

      {/* Bottom section */}
      <div className="w-full min-h-[50vh] bg-[#0f2434e8] py-16 md:py-24">
        <div
          id="contact"
          className="message-container flex flex-col lg:flex-row w-full px-4 md:px-24">
          {/* messaging section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="message w-full lg:w-2/3 shadow-lg hover:shadow-2xl transition-shadow duration-300 p-2 md:p-12 rounded-lg">
            <h1 className="message-header text-5xl text-[white] m-8">
              Let's Work together!
            </h1>

            {/* form field with Zod validation */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col p-4 sm:p-0">
              {/* First + Last name */}
              <div className="input-container w-full flex flex-col sm:flex-row justify-between">
                <div className="flex flex-col w-full md:w-80 mb-4 sm:mr-6">
                  <label className="text-white mb-1">
                    First Name (required)
                  </label>
                  <input
                    type="text"
                    {...register("firstName")}
                    className="w-full h-14 bg-[#0f2434] rounded-lg placeholder:text-gray-400 text-white border-[#22272c] p-5"
                    placeholder="Oliver"
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>

                <div className="flex flex-col w-full md:w-80 mb-4">
                  <label className="text-white mb-1">
                    Last Name (required)
                  </label>
                  <input
                    type="text"
                    {...register("lastName")}
                    className="w-full h-14 bg-[#0f2434] rounded-lg placeholder:text-gray-400 text-white border-[#22272c] p-5"
                    placeholder="Harrington"
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Phone + Email */}
              <div className="w-full flex flex-col sm:flex-row justify-between">
                <div className="flex flex-col w-full md:w-80 mb-4 sm:mr-6">
                  <label className="text-white mb-1">
                    Phone Number (required)
                  </label>
                  <input
                    type="tel"
                    {...register("phoneNumber")}
                    className="w-full h-14 bg-[#0f2434] rounded-lg placeholder:text-gray-400 text-white border-[#22272c] p-5"
                    placeholder="+44 7911 123456"
                  />
                  {errors.phoneNumber && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.phoneNumber.message}
                    </p>
                  )}
                </div>

                <div className="flex flex-col w-full md:w-80 mb-4">
                  <label className="text-white mb-1">
                    Email Address (required)
                  </label>
                  <input
                    type="text"
                    {...register("email")}
                    className="w-full h-14 bg-[#0f2434] rounded-lg placeholder:text-gray-400 text-white border-[#22272c] p-5"
                    placeholder="oliver.h@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col mb-4">
                <label className="text-white mb-1">Message (required)</label>
                <textarea
                  {...register("message")}
                  placeholder="Enter your message here"
                  className="text-white bg-[#0f2434] w-full placeholder:text-gray-400 h-40 p-5 rounded-lg"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button type="submit" disabled={isLoading}>
                <div className="send-button cursor-pointer w-40 h-14 flex justify-center items-center text-[#ffffff] font-bold bg-[#0f2434] rounded-full">
                  {isLoading && <div className="loader"></div>}
                  {isLoading ? "Sending..." : "Send Message"}
                </div>
              </button>

              {/* Status message */}
              {submissionStatus && !isLoading && (
                <p className="text-white mt-2">{submissionStatus}</p>
              )}
            </form>
          </motion.div>

          {/* contact section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="contact-info w-full md:p-6 flex flex-col justify-center mt-8 md:mt-0">
            <div className="logo-phone-no mb-4 flex">
              <div className="logo w-12 h-12 rounded-full bg-[#89c468] flex justify-center items-center mr-4">
                <FiPhoneCall className="text-white text-2xl" />
              </div>
              <div className="label-and-phone">
                <h1 className="text-[#89c468] font-bold">Phone</h1>
                <h1 className="text-white text-xl font-bold">
                  +44 - 7782791953
                </h1>
              </div>
            </div>

            <div className="logo-phone-no mb-4 flex">
              <div className="logo w-12 h-12 rounded-full bg-[#89c468] flex justify-center items-center mr-4">
                <FaRegEnvelope className="text-white text-2xl" />
              </div>
              <div className="label-and-phone">
                <h1 className="text-[#89c468] font-bold">Email</h1>
                <h1 className=" text-white text-xl font-bold">
                  info@renetric.com
                </h1>
              </div>
            </div>
          </motion.div>

          {/* loader style */}
          <style>
            {`
              .loader {
                border: 3px solid #f3f3f3;
                border-top: 4px solid #3498db;
                border-radius: 50%;
                width: 15px;
                height: 15px;
                animation: spin 2s linear infinite;
                margin-right: 4px;
              }
              @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
            `}
          </style>
        </div>

        <WhyChooseUs />
      </div>
    </div>
  );
};

export default Page;
