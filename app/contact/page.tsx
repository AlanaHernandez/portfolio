import ContactForm from "@/components/ContactForm";
import { contactInfo } from "@/lib/data";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import EmailLink from "@/components/EmailLink";

export default function ContactPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Get In Touch</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I&apos;m always open to discussing new opportunities, collaborations, or answering questions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
            <div className="space-y-6">
              <EmailLink email={contactInfo.email} showCopyButton={true} />

              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-700 hover:text-primary-600 transition-colors group"
              >
                <div className="p-3 bg-primary-100 rounded-lg group-hover:bg-primary-200 transition-colors">
                  <FaLinkedin className="text-primary-600 text-xl" />
                </div>
                <div>
                  <p className="font-medium">LinkedIn</p>
                  <p className="text-sm text-gray-600">Connect with me</p>
                </div>
              </a>

              {contactInfo.github && (
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-700 hover:text-primary-600 transition-colors group"
                >
                  <div className="p-3 bg-primary-100 rounded-lg group-hover:bg-primary-200 transition-colors">
                    <FaGithub className="text-primary-600 text-xl" />
                  </div>
                  <div>
                    <p className="font-medium">GitHub</p>
                    <p className="text-sm text-gray-600">View my code</p>
                  </div>
                </a>
              )}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

