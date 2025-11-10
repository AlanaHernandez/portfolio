import { skills } from "@/lib/data";
import SkillCategory from "@/components/SkillCategory";

export default function SkillsPage() {
  const categories = Array.from(new Set(skills.map(skill => skill.category)));
  
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Skills & Expertise</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Technical skills and proficiencies in biological engineering, programming, and laboratory operations.
          </p>
        </div>
        
        <div className="space-y-12">
          {categories.map((category) => {
            const categorySkills = skills.filter(skill => skill.category === category);
            return (
              <SkillCategory 
                key={category} 
                category={category} 
                skills={categorySkills} 
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

