import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
  <section className="bg-gray-50 min-h-screen flex items-center px-4">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-center">
      {/* Left Side - Text Content */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-6xl font-bold text-blue-900">
          Connecting People Across Faiths & Interests
        </h1>
        <p className="mt-4 text-lg text-gray-900">
          Join a diverse community where people from different faiths and 
          interests come together to connect, share, and grow. Discover 
          meaningful conversations and build strong relationships.
        </p>
        <Link to='/event'>
          <button className="mt-6 px-6 cursor-pointer flex items-center justify-center gap-3 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-700">
            Explore Events
            <span><FaArrowRightLong/></span>
          </button>
        </Link>      
      </div>

      {/* Right Side - Animated Images */}
      <div className="md:w-1/2 flex justify-center mt-10 md:mt-0 relative">
        <motion.img
          src="https://images.pexels.com/photos/3280130/pexels-photo-3280130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Community"
          className="w-80 h-60 rounded-xl shadow-lg absolute top-3 left-0"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        />
        <motion.img
          src="https://images.pexels.com/photos/7551764/pexels-photo-7551764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Discussion"
          className="w-70 h-44 rounded-xl shadow-lg absolute top-10 right-0"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 0.5 }}
        />
        <motion.img
          src="https://images.pexels.com/photos/109919/pexels-photo-109919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Connection"
          className="w-100 h-52 rounded-xl shadow-lg absolute bottom-2 left-28"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 1 }}
        />
      </div>
    </div>
  </section>

  );
}
