import { motion } from "framer-motion";

export default function Stats() {
  const stats = [
    { value: "71", label: "BESS Projects Designed" },
    { value: "10.314GW", label: "Total BESS Designed" },
    { value: "160", label: "Solar Projects designed" },
    { value: "8.901GW", label: "Total Solar designed" },
  ];

  // Green background fill animation
  const bgVariants = {
    hidden: { scaleX: 0 },
    visible: { scaleX: 1, transition: { duration: 1, ease: "easeInOut" } },
  };

  // Text fade-in animation
  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.5 } },
  };

  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          className="h-36 flex flex-col justify-center items-center relative overflow-hidden bg-transparent rounded-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}>
          {/* Animated green background fill */}
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-[#89c468]"
            style={{ transformOrigin: "left" }}
            variants={bgVariants}
          />

          {/* Content */}
          <motion.h1
            className="text-white font-bold text-2xl sm:text-4xl relative z-10"
            variants={textVariants}>
            {stat.value}
          </motion.h1>
          <motion.p
            className="text-white text-sm sm:text-base relative z-10 text-center px-2"
            variants={textVariants}>
            {stat.label}
          </motion.p>
        </motion.div>
      ))}
    </div>
  );
}
