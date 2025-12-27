
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="py-12 px-[12vw] md:px-[7vw] lg:px-[20vw] text-white">
      <div className="flex flex-col items-center space-y-6">
        {/* Name */}
        <h2 className="text-xl font-semibold text-purple-500">Let’s Connect</h2>
      
        {/* Social Links Box */}
        <div
          className="flex space-x-6 px-6 py-4 rounded-2xl 
                        bg-white/10 backdrop-blur-md 
                        border border-white/20 shadow-lg"
        >
          <a
            href="https://github.com/Abhay167746"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-purple-500 transition-transform hover:scale-110"
          >
            <FaGithub />
          </a>

          <a
            href="https://leetcode.com/u/Abhay_Swapnil/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-purple-500 transition-transform hover:scale-110"
          >
            <SiLeetcode />
          </a>

          <a
            href="https://in.linkedin.com/in/abhay-tiwari-298040269"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-purple-500 transition-transform hover:scale-110"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:tiwari.abhay7978@gmail.com"
            className="text-2xl hover:text-purple-500 transition hover:scale-110"
          >
            <MdEmail />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Abhay Tiwari
        </p>
      </div>
    </footer>
  );
};

export default Footer;
