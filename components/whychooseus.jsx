"use client";

import { motion } from "framer-motion";
import { FaRegLightbulb } from "react-icons/fa6";
import { FaRegHandshake } from "react-icons/fa";
import { IoRocketOutline } from "react-icons/io5";
import { FiClock } from "react-icons/fi";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <FaRegLightbulb className="text-6xl text-[#89c468] mb-4" />,
      title: "Expertise You Can Trust",
      description:
        "We bring years of hands-on experience and proven knowledge to deliver top-notch solutions tailored to your needs. Our team stays updated with the latest technologies, ensuring you always get modern, reliable, and scalable results.",
    },
    {
      icon: <FaRegHandshake className="text-6xl text-[#89c468] mb-4" />,
      title: "Client-Centered Approach",
      description:
        "We listen, adapt, and collaborate closely with you to bring your vision to life. Every project is a partnership, and your satisfaction is at the core of everything we build.",
    },
    {
      icon: <IoRocketOutline className="text-6xl text-[#89c468] mb-4" />,
      title: "Innovative & Creative Solutions",
      description:
        "We don’t just follow trends—we create unique, impactful designs and solutions that stand out. Innovation is at the heart of our process, helping you stay ahead of the competition.",
    },
    {
      icon: <FiClock className="text-6xl text-[#89c468] mb-4" />,
      title: "Reliable & Timely Delivery",
      description:
        "We respect your time and deadlines, ensuring projects are delivered efficiently without compromising quality. You can count on us for consistency, transparency, and results that exceed expectations.",
    },
  ];

  return (
    <motion.section
      className="w-full text-white py-16 px-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.2 }} // 👈 triggers when 20% is visible
    >
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Why Choose Us</h2>
        <p className="mt-2 text-lg text-gray-300">
          Here’s why we’re the right partner for your next project.
        </p>
      </div>

      {/* Responsive grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            className="text-3xl p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: false, amount: 0.2 }} // 👈 each card animates when in view
          >
            {reason.icon}
            <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
            <p className="text-gray-300 text-sm">{reason.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default WhyChooseUs;
