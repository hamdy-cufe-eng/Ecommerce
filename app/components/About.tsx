import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaDiscord } from "react-icons/fa";
import { motion } from "framer-motion";

const AboutContact = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-10">
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="text-4xl font-bold text-center">
        About Us
      </motion.h1>
      <p className="text-center text-gray-400 mt-3 max-w-3xl mx-auto">
        Welcome to our store! We are committed to providing the best products with top-notch customer service.
      </p>
      <div className="flex flex-wrap justify-center gap-10 mt-10">
        <div className="bg-gray-800 p-6 rounded-lg shadow-md max-w-sm text-center">
          <h3 className="text-2xl font-semibold">Our Mission</h3>
          <p className="text-gray-300 mt-2">Delivering high-quality products with a seamless shopping experience.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md max-w-sm text-center">
          <h3 className="text-2xl font-semibold">About Me</h3>
          <p className="text-gray-300 mt-2">A passionate developer , undergraduate in cairo university faculty of engineering.</p>
        </div>
      </div>
      
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="text-4xl font-bold text-center mt-20">
        Contact Us
      </motion.h1>
      <p className="text-gray-400 mt-3 max-w-3xl text-center mx-auto">Have questions? Reach out to us through any of the channels below.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 max-w-4xl mx-auto">
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold">Get in Touch</h3>
          <p className="text-gray-300 mt-2 flex items-center gap-2"><FaPhone /> 01016080971</p>
          <p className="text-gray-300 mt-2 flex items-center gap-2"><FaEnvelope /> hamdyfathi2@gmail.com</p>
          <p className="text-gray-300 mt-2 flex items-center gap-2"><FaMapMarkerAlt />Cairo</p>
          <div className="flex gap-4 mt-4">
            <a href="https://www.facebook.com/share/18XGq34x2u/?mibextid=wwXIfr">

         
            <FaFacebook className="text-2xl cursor-pointer hover:text-blue-500" />
            </a>
            <a href="https://discord.gg/GUzmfnSP"> 
            <FaDiscord className="text-2xl cursor-pointer hover:text-blue-400" />
            </a>
          </div>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold">Send a Message</h3>
          <input type="text" placeholder="Your Name" className="w-full p-2 rounded mt-2 bg-gray-700 border-none text-white" />
          <input type="email" placeholder="Your Email" className="w-full p-2 rounded mt-2 bg-gray-700 border-none text-white" />
          <textarea placeholder="Your Message" className="w-full p-2 rounded mt-2 bg-gray-700 border-none text-white h-24"></textarea>
          <button className="w-full mt-4 bg-green-600 text-white py-2 rounded-lg text-lg font-medium hover:bg-green-500">Send</button>
        </div>
      </div>
    </div>
  );
};

export default AboutContact;