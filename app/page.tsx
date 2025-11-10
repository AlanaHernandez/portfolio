import Hero from "@/components/Hero";
import Link from "next/link";
import { projects } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";
import { skills } from "@/lib/data";

export default function Home() {
  const featuredProjects = projects.slice(0, 2);
  const featuredSkills = skills.slice(0, 6);

  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            About Me
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              Hello! My name is Alana Hernandez Orellana, and I am a Master&apos;s in Business and Technology student 
              at Purdue University with a Bachelor&apos;s in Biological Engineering. I am seeking a full-time position 
              within the biotechnology industry, where I can apply my skills in bioprocess design, microbial research, 
              data analysis, and cross-functional team collaboration. I am eager to expand my experience in leading 
              projects and integrating technical problem-solving with strategic business thinking.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section id="projects-preview" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900">Featured Projects</h2>
            <Link 
              href="/projects" 
              className="text-primary-600 hover:text-primary-700 font-semibold transition-colors"
            >
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section id="skills-preview" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900">Technical Skills</h2>
            <Link 
              href="/skills" 
              className="text-primary-600 hover:text-primary-700 font-semibold transition-colors"
            >
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {featuredSkills.map((skill) => (
              <div 
                key={skill.id}
                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <p className="font-medium text-gray-900">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

