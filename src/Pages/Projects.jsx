import React from "react";
import { motion } from "framer-motion";
import horseRide from "../assets/horseRide.jpeg";
import horseRideicon from "../assets/horse-ridingIcon.png";
import school from "../assets/schooll.jpeg";
import schoolicon from "../assets/schoolicon.jpg";
import hospital from "../assets/hospital.jpeg";
import hospitalicon from "../assets/hospital.png";
import farmHouse from "../assets/farmHouse.jpeg";
import farmHouseicon from "../assets/farmHouse-icon.png";
import lakeView from "../assets/lake-view2.jpeg";
import lakeViewicon from "../assets/lakeview.png";
import adventure from "../assets/Arena2.jpeg";
import adventureicon from "../assets/adventure.png";
import logo from "../assets/logo.png";

const projects = [
    { title: "Horse Riding", image: horseRide, icon: horseRideicon },
    { title: "Barkhiya School", image: school, icon: schoolicon },
    { title: "Diabetes Centre", image: hospital, icon: hospitalicon },
    { title: "Farm Houses", image: farmHouse, icon: farmHouseicon },
    { title: "Lake View", image: lakeView, icon: lakeViewicon },
    { title: "Adventure Arena", image: adventure, icon: adventureicon },
];

const Projects = () => {
    return (
        <div className="mt-20 mx-auto flex flex-col gap-6 justify-center items-center px-4 md:px-10">
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
                Upcoming & Ongoing Project
            </motion.h1>

            {/* Paragraph Animation */}
            <motion.p
                className="max-w-7xl px-4 mt-6 text-lg text-center"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
            >
                At Barkhiya Town, we are committed to building a future where modern
                living meets comfort and convenience. Our ongoing and upcoming projects
                aim to enhance the lifestyle of residents by offering top-tier housing
                options, community amenities, and beautifully designed infrastructure.
            </motion.p>

            {/* Project Cards */}
            <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-2 mt-10">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="bg-white shadow-lg rounded-xl overflow-hidden p-4 flex flex-col items-center text-center"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
                        viewport={{ once: true }}
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="md:h-96 mt-5 w-full xl:w-[450px] 2xl:w-[520px] rounded-md transition-all duration-500 ease-in-out group-hover:scale-110"
                        />
                        <div className="flex items-center gap-3 mt-4">
                            <img src={project.icon} alt="icon" className="h-10 w-10" />
                            <h2 className="text-2xl font-semibold">{project.title}</h2>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
