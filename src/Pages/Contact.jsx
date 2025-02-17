import React from 'react';
import { FaPhone } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

const Contact = () => {
    return (
        <div className='flex items-center justify-center flex-col mt-20'>
            <h1 className='text-3xl lg:text-4xl xl:text-6xl font-bold'>
                Contact <span className='text-[#276a5c]'>Us</span>
            </h1>

            <div className="flex w-full xl:w-[1200px] flex-col lg:flex-row justify-center items-center lg:items-start lg:justify-between mx-auto mt-10 gap-10 px-4 lg:px-20">

                {/* Contact Form */}
                <div className="w-full p-4">
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
                                placeholder="Your Email"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Message</label>
                            <textarea
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
                                rows={4}
                                placeholder="Your Message"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-[#19443b] text-white p-2 rounded-md shadow-md hover:bg-[#45a18f]"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Address, Phone, and Map */}
                <div className="w-full lg:w-1/2 p-4 mt-10 lg:mt-0">
                    <h2 className="text-2xl font-bold mb-4">Our Address</h2>
                    <p className="text-lg mb-4">
                        DHQ Hospital Rd, Chārsadda, Charsadda, Khyber Pakhtunkhwa 24451
                    </p>

                    <div>
                        <h2 className="text-2xl font-bold mb-4">Phone Number</h2>
                        <p className="text-lg flex items-center gap-2">
                            <FaPhone />
                            <a href="https://wa.me/923116203188" target="_blank" rel="noopener noreferrer">
                                0311 6203188
                            </a>
                        </p>
                        <p className="text-lg flex items-center gap-2">
                            <FaPhone />
                            <a href="https://wa.me/923116203187" target="_blank" rel="noopener noreferrer">
                                0311 6203187
                            </a>
                        </p>
                        <p className="text-lg flex items-center gap-2">
                            <FaPhone />
                            <a href="tel:+92916570111">
                                (091) 6570111
                            </a>
                        </p>

                    </div>
                    <div>
                        <h2 className="text-2xl font-bold mt-3 mb-2">Email Adress</h2>

                        <p className="text-lg flex items-center gap-2">
                            <MdEmail />
                            <a href="mailto:Barkhiyacharsadda@gmail.com" className=" hover:underline">
                                Barkhiyacharsadda@gmail.com
                            </a>
                        </p>


                    </div>
                </div>
            </div>

            {/* Map  */}
            <div className="w-full mt-10 pb-10">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.7860502647814!2d71.8451954!3d34.0749984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d93915034ba309%3A0xf34a2b6c31967a7a!2sBarkhiya%20Town%20Charsadda!5e0!3m2!1sen!2s!4v1739793904045!5m2!1sen!2s"
                    width="100%"
                    height="450"
                    allowFullScreen=""
                    loading="lazy"
                    className="border-0"
                ></iframe>
            </div>

        </div>
    );
};

export default Contact;
