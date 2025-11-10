"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { personalInfo, contactInfo } from "@/lib/data";
import { fadeInUp, fadeIn } from "./animations";
import { FaArrowDown, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 bg-gradient-to-br from-primary-50 via-white to-accent-blue/5 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={fadeInUp.initial}
            animate={fadeInUp.animate}
            transition={fadeInUp.transition}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4"
            >
              {personalInfo.name || "Your Name"}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-xl md:text-2xl text-primary-600 font-semibold mb-6"
            >
              {personalInfo.headline}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              {personalInfo.bio}
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <Link
                href="/projects"
                className="px-8 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
              >
                View Projects
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 bg-white text-primary-600 border-2 border-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
              >
                Get In Touch
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              {contactInfo.github && (
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow text-gray-700 hover:text-primary-600"
                >
                  <FaGithub size={24} />
                </a>
              )}
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow text-blue-600 hover:text-blue-700"
              >
                <FaLinkedin size={24} />
              </a>
            </motion.div>
          </motion.div>

          {/* Headshot Image */}
          <motion.div
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-accent-teal rounded-full blur-2xl opacity-30"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl border-4 border-white">
                {personalInfo.headshot && !imageError ? (
                  <img
                    src={personalInfo.headshot}
                    alt={personalInfo.name || "Profile Picture"}
                    className="w-full h-full object-cover"
                    onError={() => {
                      setImageError(true);
                    }}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary-400 to-accent-teal flex items-center justify-center text-white text-6xl font-bold">
                    {(personalInfo.name || "N")[0].toUpperCase()}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
      >
        <a href="#about" className="animate-bounce">
          <FaArrowDown className="text-gray-400 text-2xl" />
        </a>
      </motion.div>
    </section>
  );
}

