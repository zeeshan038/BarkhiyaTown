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
            <div className="flex flex-wrap mx-3 items-center mt-10 justify-center gap-6 pb-16">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="relative group rounded-lg overflow-hidden cursor-pointer"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
                        viewport={{ once: false }}
                        whileHover={{ scale: 1.05 }}
                    >
                        {/* Image */}
                        <div className="w-full mt-6 h-[250px] sm:h-[300px] md:h-[350px] xl:h-[400px] relative">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="md:h-96 mt-5 w-full xl:w-[450px] 2xl:w-[520px] rounded-md transition-all duration-500 ease-in-out group-hover:scale-110"
                            />
                        </div>

                        {/* ✅ Fixed Overlay (Now positioned correctly below image) */}
                        <div className="absolute -bottom-3 translate-y-1/2 w-full flex justify-center">
                            <div className="w-[90%] max-w-[320px] bg-white shadow-xl rounded-md p-3 flex items-center justify-center gap-3 text-center">
                                <img src={project.icon} alt={project.title} className="w-10 h-10" />
                                <h1 className="text-lg font-semibold">{project.title}</h1>
                            </div>
                        </div>
                    </motion.div>
                ))}
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
