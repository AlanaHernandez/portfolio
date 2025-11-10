import { personalInfo, contactInfo } from "@/lib/data";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">About</h3>
            <p className="text-gray-400">
              {personalInfo.headline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/projects" className="hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="/skills" className="hover:text-white transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex gap-4">
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-primary-600 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              {contactInfo.github && (
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 rounded-full hover:bg-primary-600 transition-colors"
                  aria-label="GitHub"
                >
                  <FaGithub size={20} />
                </a>
              )}
              <a
                href={`mailto:${contactInfo.email}?subject=Portfolio Inquiry`}
                className="p-3 bg-gray-800 rounded-full hover:bg-primary-600 transition-colors"
                aria-label="Email"
              >
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>
            © {currentYear} {personalInfo.name || "Your Name"}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

