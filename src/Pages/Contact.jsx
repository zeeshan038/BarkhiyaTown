import React from 'react';

const Contact = () => {
  return (
  <div className='flex items-center justify-center flex-col mt-20'>
    <h1 className='text-3xl lg:text-4xl xl:text-6xl font-bold'>Contact <span className='text-[#276a5c]'>Us</span> </h1>
      <div className="flex w-full xl:w-[1200px] flex-col lg:flex-row justify-center items-center lg:items-start lg:justify-between mx-auto mt-10 gap-10
       px-4 lg:px-20">
      {/* Contact Form */}
    
      <div className="w-full  p-4">
     
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

      {/* Address and Phone Number */}
      <div className="w-full lg:w-1/2 p-4 mt-10 lg:mt-0">
        <h2 className="text-3xl font-bold mb-4">Our Address</h2>
        <p className="text-lg mb-4">
          123 Barkhiya Town, Peshawar, Pakistan
        </p>
        <h2 className="text-3xl font-bold mb-4">Phone Number</h2>
        <p className="text-lg">
          +92 123 456 7890
        </p>
      </div>
    </div>
  </div>
  );
};

export default Contact;