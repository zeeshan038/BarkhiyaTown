import React from "react";
import { motion } from "framer-motion";
import about from '../assets/about.jpeg'
const AboutUs = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-start bg-[#183630] gap-10 p-10  md:p-20 text-white justify-center mt-32 md:mt-52">
      {/* Image Animation - Slides from Left */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }} // Animates every time it comes into view
      >
        <img
          src={about}
          alt="About Barkhiya"
          
          className="w-full rounded-md md:w-[600px] lg:w-[750px] xl:w-[750px]"
      
        />
      </motion.div>

      {/* Text Content Animation - Slides from Right */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: false }} 
      >
        <h1 className="text-5xl font-bold">Turning Dreams Into Reality</h1>
        <p className="max-w-2xl text-xl mt-2 space-y-2">
          Nestled in the heart of Charssada and Mardan, Barkhiya Town is a
          visionary housing project designed to transform the lives of its
          residents and the wider community. Our mission is to create a
          thriving, inclusive, and sustainable community that empowers its
          residents with access to quality education, economic opportunities,
          and modern amenities.
        </p>
      </motion.div>
    </div>
  );
};

export default AboutUs;
