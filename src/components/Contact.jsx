import React from 'react';
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="bg-white text-gray-900 py-20" id="contact">
      <div className="container mx-auto px-6 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
          Contact Me
        </h2>

        <div className="flex flex-col md:flex-row items-start gap-12">
          {/* Left Info Section */}
          <div className="flex-1 space-y-6" data-aos="fade-right">
            <h3 className="text-3xl font-bold text-gradient bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-4">
              Let's Talk
            </h3>
            <p className="text-gray-600 leading-relaxed">
              I'm open to discussing web development projects, machine learning ideas, freelance work, or potential collaboration.
            </p>

            <div className="space-y-5 text-gray-800 text-base">
              <div className="flex items-center hover:text-blue-600 transition">
                <FaEnvelope className="text-blue-500 mr-3 animate-pulse" />
                <a href="mailto:kiplingikbar@gmail.com" className="hover:underline">
                  kiplingikbar@gmail.com
                </a>
              </div>
              <div className="flex items-center hover:text-blue-600 transition">
                <FaPhone className="text-blue-500 mr-3 animate-bounce" />
                <span>+62 1213 900 489</span>
              </div>
              <div className="flex items-center hover:text-blue-600 transition">
                <FaMapMarkedAlt className="text-blue-500 mr-3 animate-pulse" />
                <span>Buah Batu, Bandung, Jawa Barat, Indonesia</span>
              </div>
            </div>
          </div>

          {/* Right Form Section */}
          <div className="flex-1 w-full bg-gray-100 rounded-2xl shadow-xl p-8" data-aos="fade-left">
            <form
              action="https://formsubmit.co/kiplingikbar@gmail.com"
              method="POST"
              className="space-y-6"
            >
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-semibold text-gray-700">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full p-3 rounded bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-semibold text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full p-3 rounded bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-semibold text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  className="w-full p-3 rounded bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Type your message here"
                ></textarea>
              </div>

              {/* Hidden formsubmit field */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              <div className="text-right">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium px-6 py-3 rounded-full shadow-md hover:scale-105 transition-all duration-300"
                >
                  🚀 Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
