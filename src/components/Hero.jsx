import React from 'react';
import HeroImage from '../assets/poto diri.jpg';
import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="bg-white text-gray-900 text-center py-20 px-6 md:px-16">
      <motion.img
        src={HeroImage}
        alt="Rafi Ikbar Fahrezy"
        className="mx-auto mb-8 w-40 h-40 md:w-48 md:h-48 rounded-full object-cover shadow-xl ring-4 ring-blue-300 hover:scale-105 transition"
        whileHover={{ scale: 1.1, rotate: 3 }}
        transition={{ duration: 0.4 }}
      />

      <motion.h1
        className="text-4xl md:text-5xl font-extrabold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        I'm{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
          Rafi Ikbar Fahrezy
        </span>
        ,<br className="block md:hidden" /> Machine Learning & AI Agent Enthusiast.
      </motion.h1>

      <motion.p
        className="mt-5 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        I specialize in building modern and adaptive Machine Learning systems using cutting-edge technology to solve real-world problems.
      </motion.p>

      <motion.div
        className="mt-10 flex flex-wrap justify-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <a
          href="#contact"
          className="flex items-center gap-2 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:scale-105 transition"
        >
          <FaEnvelope className="text-lg" />
          Contact Me
        </a>

        <a
          href="https://www.linkedin.com/in/rafi-ikbar-fahrezy" // Ganti dengan LinkedIn kamu atau file CV di /public
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:scale-105 transition"
        >
          <FaLinkedin className="text-lg" />
          Resume
        </a>
      </motion.div>
    </div>
  );
};

export default Hero;
