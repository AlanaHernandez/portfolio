"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { Project } from "@/lib/data";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { fadeInUp } from "./animations";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div
      initial={fadeInUp.initial}
      whileInView={fadeInUp.animate}
      viewport={{ once: true, margin: "-100px" }}
      transition={fadeInUp.transition}
      className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow overflow-hidden group"
    >
      {/* Project Image */}
      <Link href={`/projects/${project.id}`} className="block">
        <div className="relative h-48 w-full bg-gradient-to-br from-primary-100 to-accent-blue/20 overflow-hidden cursor-pointer">
          {project.image ? (
            <>
              {!imageError && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={() => {
                    setImageError(true);
                  }}
                  onLoad={() => {
                    setImageLoaded(true);
                  }}
                />
              )}
              {imageError && (
                <div className="absolute inset-0 w-full h-full flex items-center justify-center text-primary-600 text-4xl font-bold bg-gradient-to-br from-primary-100 to-accent-blue/20">
                  {project.title[0]}
                </div>
              )}
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center text-primary-600 text-4xl font-bold">
              {project.title[0]}
            </div>
          )}
        </div>
      </Link>

      {/* Project Content */}
      <div className="p-6">
        <Link href={`/projects/${project.id}`} className="block">
          <h3 className="text-2xl font-bold text-gray-900 mb-2 hover:text-primary-600 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
        </Link>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-primary-50 text-primary-700 text-sm font-medium rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4">
          <Link
            href={`/projects/${project.id}`}
            className="flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors font-medium"
          >
            Read More →
          </Link>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              <FaGithub /> Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

