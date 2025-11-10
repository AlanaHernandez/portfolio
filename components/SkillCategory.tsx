"use client";

import { motion } from "framer-motion";
import { Skill } from "@/lib/data";
import { fadeInUp } from "./animations";

interface SkillCategoryProps {
  category: string;
  skills: Skill[];
}

const proficiencyColors = {
  Beginner: "bg-gray-200 text-gray-700",
  Intermediate: "bg-blue-100 text-blue-700",
  Advanced: "bg-green-100 text-green-700",
  Expert: "bg-primary-200 text-primary-800",
};

const proficiencyWidths = {
  Beginner: "25%",
  Intermediate: "50%",
  Advanced: "75%",
  Expert: "100%",
};

export default function SkillCategory({ category, skills }: SkillCategoryProps) {
  return (
    <motion.div
      initial={fadeInUp.initial}
      whileInView={fadeInUp.animate}
      viewport={{ once: true, margin: "-100px" }}
      transition={fadeInUp.transition}
      className="bg-white rounded-xl shadow-lg p-8"
    >
      <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b-2 border-primary-200 pb-4">
        {category}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skill) => (
          <div key={skill.id} className="space-y-2">
            <div className="flex justify-between items-center mb-1">
              <span className="font-semibold text-gray-900">{skill.name}</span>
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  proficiencyColors[skill.proficiency]
                }`}
              >
                {skill.proficiency}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: proficiencyWidths[skill.proficiency] }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`h-full ${
                  skill.proficiency === "Expert"
                    ? "bg-primary-600"
                    : skill.proficiency === "Advanced"
                    ? "bg-green-500"
                    : skill.proficiency === "Intermediate"
                    ? "bg-blue-500"
                    : "bg-gray-400"
                }`}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

