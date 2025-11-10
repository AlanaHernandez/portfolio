export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
}

export interface Skill {
  id: string;
  name: string;
  category: "Technical" | "Programming" | "Laboratory";
  proficiency: "Beginner" | "Intermediate" | "Advanced" | "Expert";
}

export interface ContactInfo {
  email: string;
  linkedin: string;
  github?: string;
}

export interface PersonalInfo {
  name: string;
  headline: string;
  bio: string;
  headshot?: string;
}

// Personal Information - UPDATE THESE VALUES
export const personalInfo: PersonalInfo = {
  name: "Alana Hernandez Orellana",
  headline: "M.S. Business & Technology Student at Purdue Daniels School of Business | B.S. Biological Engineering",
  bio: "Motivated M.S. Business and Technology student with a B.S. in Biological Engineering from Purdue University. Experienced in bioprocess design, fermentation, and biotechnology research — combining technical engineering skills with business strategy to drive innovation from lab to scale-up.",
  headshot: "/headshot.jpg", // Place image in public/headshot.jpg
};

// Projects - UPDATE WITH YOUR ACTUAL PROJECTS
export const projects: Project[] = [
  {
    id: "1",
    title: "Fermentation Process Optimization",
    description: "Designed a continuous bioprocess integrating homogenization, pasteurization, fermentation, and freeze-drying to evaluate scale-up feasibility. Led fermentation design and optimization, implementing inoculation, pH, and temperature control strategies. Developed a process flow diagram with mass and energy balances and conducted an economic analysis to evaluate industrial viability. Authored technical reports and presented recommendations to faculty, bridging engineering analysis with business strategy.",
    technologies: ["Python", "SuperPro Designer", "Bioprocess Design", "Data Analysis"],
    image: "/projects/fermentation.jpg", // Add image path when available
  },
  {
    id: "2",
    title: "Annotating Genes 149-226 of Bacteriophage SrishMeg2525",
    description: "Isolated and purified a unique bacteriophage, supporting the SEAPHAGES research initiative. Drove a project to annotate 80 genes, uncovering 15 discrepancies in DNA Master and improving annotation processes. Updated genome annotation software programs, improving efficiency and accuracy for future research. Presented findings to faculty and peers at Purdue's Undergraduate Research Conference.",
    technologies: ["DNA Master", "Genome Annotation", "Bioinformatics", "Research"],
    image: "/projects/bioprocess.jpg", // Add image path when available
  },
  {
    id: "3",
    title: "Antibiotic Resistance & Chemostat Research",
    description: "Prepared bacterial growth media and antibiotic stock solutions under sterile conditions using aseptic technique. Operated chemostats and conducted PCR, electrophoresis, and Kirby-Bauer testing to evaluate antibiotic resistance. Led daily microbiology lab activities and provided technical guidance to a group of 30 students, ensuring consistent laboratory operations.",
    technologies: ["Laboratory Techniques", "Data Analysis", "Excel", "PCR", "Electrophoresis", "Aseptic Technique"],
  },
];

// Skills - UPDATE WITH YOUR ACTUAL SKILLS
export const skills: Skill[] = [
  // Programming Skills
  { id: "1", name: "Python", category: "Programming", proficiency: "Beginner" },
  { id: "2", name: "Excel", category: "Programming", proficiency: "Advanced" },
  { id: "3", name: "JMP", category: "Programming", proficiency: "Intermediate"},
    
  // Technical Skills
  { id: "4", name: "Bioprocess Modeling", category: "Technical", proficiency: "Intermediate" },
  { id: "5", name: "Fermentation Operations", category: "Technical", proficiency: "Intermediate" },
  { id: "6", name: "Process Design", category: "Technical", proficiency: "Intermediate" },
  { id: "7", name: "Cell Culture", category: "Technical", proficiency: "Intermediate" },
  { id: "8", name: "Aseptic Technique", category: "Technical", proficiency: "Advanced" },
  { id: "9", name: "Process Flow Diagrams & P&IDs", category: "Technical", proficiency: "Intermediate" },
  
  // Laboratory Skills
  { id: "10", name: "PCR & Electrophoresis", category: "Laboratory", proficiency: "Advanced" },
  { id: "11", name: "Spectrophotometry", category: "Laboratory", proficiency: "Intermediate" },
  { id: "12", name: "Bacterial Media & Buffer Preparation", category: "Laboratory", proficiency: "Intermediate" },
];

// Contact Information - UPDATE WITH YOUR ACTUAL CONTACT INFO
export const contactInfo: ContactInfo = {
  email: "hernanan@purdue.edu",
  linkedin: "https://www.linkedin.com/in/alana-hernandez-orellana10",
  github: "https://github.com/AlanaHernandez",
};

