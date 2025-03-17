import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { RiUserCommunityFill } from "react-icons/ri";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 text-center md:text-left">

        <div>
          <h2 className="text-3xl font-bold text-white flex items-center gap-2 justify-center sm:justify-normal"><RiUserCommunityFill size={40} />Communion</h2>
          <p className="text-gray-400 mt-2 text-sm">
            Empowering businesses with cutting-edge web solutions.
            We specialize in modern web development and digital transformation.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3 text-gray-300">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white transition">Home</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">Events</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">About</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3 text-gray-300">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-4">
            <a href="#" className="text-gray-400 hover:text-white transition text-xl">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition text-xl">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition text-xl">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition text-xl">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

      </div>

      <div className="text-center text-gray-500 text-sm mt-8 border-t border-gray-800 pt-4">
        &copy; {new Date().getFullYear()} Communion. All rights reserved.
      </div>
    </footer>
  );
}
