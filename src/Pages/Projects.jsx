import React from "react";
import { motion } from "framer-motion";
import horseRide from "../../public/horseRide.jpeg"
import horseRideicon from '../../public/horse-ridingIcon.png'
import school from '../../public/schooll.jpeg'
import schoolicon from '../../public/schoolicon.jpg'
import hospital from '../../public/hospital.jpeg'
import hospitalicon from '../../public/hospital.png'
import farmHouse from '../../public/FarmHouse.jpeg'
import farmHouseicon from '../../public/farmHouse-icon.png'
import lakeView from '../../public/lake-view2.jpeg'
import lakeViewicon from '../../public/lakeView.png'
import adventure from '../../public/Arena2.jpeg'
import adventureicon from '../../public/adventure.png'
import logo from '../../public/logo.png'
const Projects = () => {
    return (
        <div className="mt-20 mx-auto flex flex-col gap-3 justify-center items-center">
            {/* Heading Animation */}
            <motion.h1
                className="text-3xl lg:text-5xl text-center font-bold relative"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <img
                    src={logo}
                    alt="Logo"
                    className="h-16 absolute hidden lg:block lg:bottom-10 -left-6 lg:-left-16 -rotate-12"
                />
                Upcoming & Ongoing Projects
            </motion.h1>

            {/* Paragraph Animation */}
            <motion.p
                className="max-w-7xl px-4 mt-8 text-lg text-center"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
            >
                At Barkhiya Town, we are committed to building a future where modern
                living meets comfort and convenience. Our ongoing and upcoming projects
                aim to enhance the lifestyle of residents by offering top-tier housing
                options, community amenities, and beautifully designed infrastructure.
                Located in the heart of Peshawar, Barkhiya Town is set to become a prime
                residential hub, blending luxury with practicality. Stay tuned as we
                continue to shape the future of our vibrant community, with more
                projects on the horizon to serve your needs and elevate your living
                experience.
            </motion.p>

            {/* Project Cards */}
           <div className="flex flex-col-reverse md:flex-row items-start gap-10 p-10  md:p-20 justify-center mt-32 md:mt-52">
                 {/* Image Animation - Slides from Left */}
                 <motion.div
                   initial={{ opacity: 0, x: -100 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   transition={{ duration: 0.8, ease: "easeOut" }}
                   viewport={{ once: false }} // Animates every time it comes into view
                 >
                   <img
                     src={school}
                     alt="About Barkhiya"
                     
                     className="w-full "
                 
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

        </div>
    );
};

// Project Data
const projects = [
    {
        title: "Horse Riding",
        image: horseRide,
        icon: horseRideicon,
    },
    {
        title: "Barkhiya School",
        image: school,
        icon: schoolicon,
    },
    {
        title: "Diabetes Centre",
        image: hospital,
        icon: hospitalicon,
    },
    {
        title: "Farm Houses",
        image: farmHouse,
        icon: farmHouseicon,
    },
    {
        title: "Lake View",
        image: lakeView,
        icon: lakeViewicon,
    },
    {
        title: "Adventure Arena",
        image: adventure,
        icon: adventureicon,
    },
];

export default Projects;
