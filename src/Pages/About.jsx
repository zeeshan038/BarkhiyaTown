
import React from "react"
import { motion } from "framer-motion";
import arena from '../../public/Arena.jpeg'
import location from '../../public/location-icon.webp'
const Page = () => {
  return (
    <div className="flex flex-col mx-4 sm:mx-6 lg:mx-12 gap-8 items-center justify-center mt-10 pb-20">
      <div className="flex flex-col lg:flex-row items-center gap-8 w-full max-w-7xl">
        {/* Animated Text from Right */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center lg:text-left"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#144f43]">
          &quot;A Name to Trust &amp; Modernity&quot;
          </h1>
          <p className="text-lg md:text-xl mt-6 max-w-3xl">
          Nestled in the heart of Charssada and Mardan, Barkhiya Town is a visionary housing project designed to transform the lives of its residents and the wider community. Our mission is to create a thriving, inclusive, and sustainable community that empowers its residents with access to quality education, economic opportunities, and modern amenities.

          </p>
        </motion.div>

        {/* Animated Image from Left */}  
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src={arena}
            alt="Arena"
          
            className="rounded-md w-full max-w-md lg:max-w-xl"
            priority={true}
          />
        </motion.div>
      </div>

      {/* Location */}
      <div className="flex mt-16 flex-col items-center justify-center gap-6 text-center max-w-7xl">
        <img src={location} alt="Location Icon"  />
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#144f43]">
          MINUTES TO BARKHIYA TOWN
        </h1>
        <div className="flex flex-wrap justify-center gap-6 w-full px-4">
          <div className="border shadow-lg p-6 md:p-8 rounded-md w-full sm:w-auto">
            <h1 className="text-xl md:text-2xl xl:text-3xl">5 minutes from Charsadda interchange</h1>
          </div>
          <div className="border shadow-lg p-6 md:p-8 rounded-md w-full sm:w-auto">
            <h1 className="text-xl md:text-2xl xl:text-3xl">15 minutes from Peshawar</h1>
          </div>
        </div>
      </div>

      {/* Vision */}
      <div className="flex flex-col mt-10 lg:flex-row items-center gap-8 w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#144f43]">Our Vision</h1>
          <p className="text-lg md:text-xl mt-6 max-w-3xl">
          Barkhiya Town envisions a vibrant, inclusive, and sustainable community in Charsadda and Mardan, where residents thrive in harmony with nature. We are committed to fostering a green, clean, and eco-friendly environment that enhances quality of life. By providing access to quality education, economic opportunities, and modern amenities, we aim to empower our residents and contribute to the region's growth and prosperity, creating a model community for future generations.


          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img src={arena} alt="Arena"  className="rounded-md w-full max-w-xl" />
        </motion.div>
      </div>

      {/* Mission */}
      <div className="flex flex-col lg:flex-row-reverse mt-10 items-center gap-8 w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#144f43]">Our Mission</h1>
          <p className="text-lg md:text-xl mt-6 max-w-3xl">
          At Barkhiya Town, our mission is to lead the way in sustainable and innovative living. We are dedicated to creating a secure, well-planned, and technologically advanced community set within a lush, green, and eco-friendly environment. By minimizing our carbon footprint, promoting renewable energy, and encouraging environmental stewardship, we strive to deliver an exceptional quality of life. Our goal is to provide our residents with access to top-tier education, economic opportunities, and modern amenities, while positively impacting the wider community and setting a benchmark for sustainable development.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img src={arena} alt="Arena"  className="rounded-md w-full max-w-xl" />
        </motion.div>
      </div>
    </div>
  );
};

export default Page;
