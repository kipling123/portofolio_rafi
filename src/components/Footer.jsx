import React, { useState } from "react";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import toast from "react-hot-toast";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email!");
      return;
    }

    toast.success("Thanks for subscribing!");
    setEmail("");
  };

  return (
    <footer className="bg-white text-gray-800 py-12 border-t border-gray-200">
      <div className="container mx-auto px-6 md:px-16 lg:px-24">
        {/* Branding & Subscribe */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-12">
          <div className="text-center md:text-left max-w-md">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-600">
              Rafi Ikbar Fahrezy
            </h3>
            <p className="text-gray-600 mt-3">
              Machine Learning Enthusiast based in Indonesia, specializing in AI systems and intelligent software development.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubscribe}
            className="flex w-full max-w-md bg-gray-100 border border-gray-300 rounded-full overflow-hidden shadow"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow px-5 py-3 text-gray-800 placeholder-gray-500 bg-transparent focus:outline-none"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-green-500 to-blue-600 px-6 text-white font-semibold hover:scale-105 transition-transform"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p className="mb-4 md:mb-0 text-center md:text-left">
            &copy; {new Date().getFullYear()} Rafi Ikbar Fahrezy. All rights reserved.
          </p>

          <div className="flex space-x-5 text-lg mb-4 md:mb-0">
            <a href="#" className="hover:text-blue-600 transition duration-300">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-sky-500 transition duration-300">
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/rafi-ikbar-fahrezy-509019314"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700 transition duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/kipling123"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition duration-300"
            >
              <FaGithub />
            </a>
          </div>

          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-800 transition">
              Privacy
            </a>
            <a href="#" className="hover:text-gray-800 transition">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
