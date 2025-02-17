import React from 'react';

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
          <p className="text-lg">
          03116203188
          </p>  
          <p className="text-lg">
          03116203187
          </p>  
          <p className="text-lg">
        (091) 6570111
          </p>  
       </div>
       <div>
       <h2 className="text-2xl font-bold mt-3 mb-2">Email Adress</h2>
          <p className="text-lg">
         Barkhiyacharsadda@gmail.com
          </p>  
      
       </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
