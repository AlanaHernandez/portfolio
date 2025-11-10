"use client";

import { useState } from "react";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";
import ImageModal from "@/components/ImageModal";
import { Project } from "@/lib/data";

interface ClientProjectPageProps {
  project: Project;
}

export default function ClientProjectPage({ project }: ClientProjectPageProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium mb-8 transition-colors"
          >
            <FaArrowLeft /> Back to Projects
          </Link>

          {/* Project Image */}
          {project.image && (
            <div
              className="w-full h-64 md:h-96 mb-8 rounded-xl overflow-hidden shadow-lg cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => setIsModalOpen(true)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Project Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {project.title}
          </h1>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-primary-50 text-primary-700 text-sm font-medium rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Full Description */}
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
              {project.description}
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-4 pt-8 border-t border-gray-200">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                <FaGithub /> View Code on GitHub
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                <FaExternalLinkAlt /> View Live Demo
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {project.image && (
        <ImageModal
          src={project.image}
          alt={project.title}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}

