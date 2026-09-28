import projectsData, { Project } from "../data/projects";
import distylLogo from "../images/Distyl-logo.png";
import openGovLogo from "../images/OpenGov-logo.png";
export type { Project };

export interface ExperienceType {
  id: number;
  company: string;
  position: string;
  duration: string;
  location?: string;
  category: "work" | "education";
  description?: string;
  skills?: string[];
  logo?: string;
}

export const summary =
  "Software engineer specializing in TypeScript and React, with experience owning critical frontend systems end-to-end. At OpenGov, led the redesign of core form-rendering infrastructure and shipped high-impact features supporting multi-product workflows and large customer contracts. Currently engineering seamless, high-impact AI-native interface experiences at Distyl AI. Focused on building scalable, reliable user-facing systems.";

export const experiences: ExperienceType[] = [
  {
    id: 6,
    company: "Distyl AI",
    logo: distylLogo,
    position: "Frontend Product Engineer",
    category: "work",
    duration: "May 2026 - present",
    location: "San Francisco, CA",
    description:
      "Turn client-provided mocks into polished, production-ready UI, including a demo for a ~$3M Fortune 50 contract pitch built around a single-screen workflow, bulk operations, and pre-written escalation emails. Reimagine feedback UX to collect ground-truth data on 300+ contracts, used to iterate on and improve a contract extraction system.",
    skills: ["FDE", "React", "TypeScript", "Tailwind", "Lucide"],
  },
  {
    id: 1,
    company: "OpenGov",
    logo: openGovLogo,
    position: "Software Engineer II",
    category: "work",
    duration: "March 2026 - May 2026",
    location: "Boston, MA",
    description:
      "Served as the subject matter expert for the forms system, leading its redesign to private preview with 5 customers through org transitions. Implemented performance optimizations, including lazy loading and virtualization, to scale the system for general availability, and improved the accessibility of core features to meet A11y compliance standards.",
    skills: [
      "React",
      "TypeScript",
      "MUI",
      "react-hook-form",
      "Accessibility",
      "Performance",
    ],
  },
  {
    id: 2,
    company: "OpenGov",
    logo: openGovLogo,
    position: "Software Engineer I",
    category: "work",
    duration: "June 2024 - March 2026",
    location: "Boston, MA",
    description:
      "Led the frontend redesign of the application’s form-rendering system as primary frontend engineer, authoring architectural documentation the team adopted. Delivered a critical security feature under a one-month deadline to support a $5.9M contract with the City of San Francisco, and contributed to the form builder’s redesign, including a new AI-powered feature. Maintained and extended a shared frontend library used across multiple products and teams, introduced contract testing (PACT) to improve integration reliability, and resolved 30+ customer-reported defects across multiple services. Partnered with customer success teams to validate feature parity, and wrote onboarding documentation and READMEs to streamline developer onboarding.",
    skills: ["React", "TypeScript", "MUI", "GraphQL", "PACT", "Git"],
  },
  {
    id: 3,
    company: "OpenGov",
    logo: openGovLogo,
    position: "Software Engineer Intern",
    category: "work",
    duration: "May 2022 - May 2024",
    location: "Remote",
    description:
      "Built React components and backend APIs, fixed production bugs, and improved system performance, collaborating with senior engineers through code reviews and sprint planning.",
    skills: ["React", "TypeScript", "CSS", "Git", "SQLPro"],
  },
  {
    id: 4,
    company: "UVA School of Engineering",
    position: "Tutor",
    category: "education",
    duration: "Sept 2021 - May 2022",
    location: "Charlottesville, VA",
    description:
      "Tutor at the University of Virginia’s School of Engineering, initially teaching Chemistry and later four different Computer Science courses. Developed the ability to explain complex concepts clearly and effectively, while building strong problem-solving and debugging skills. Gained experience guiding students through challenging material and troubleshooting code efficiently, strengthening both technical knowledge and communication skills.",
  },
  {
    id: 5,
    company: "UVA School of Education, America Reads",
    position: "Tutor",
    category: "education",
    duration: "Sept 2021 - May 2022",
    location: "Charlottesville, VA",
    description:
      "Classroom Assistant at Walker Upper Elementary School in Charlottesville, VA, supporting a 5th-grade class with students of diverse learning levels. Worked one-on-one with non-native English speakers to provide targeted assistance, enabling the lead teacher to manage the broader classroom. Developed leadership skills and the ability to adapt teaching approaches to meet individual student needs effectively.",
  },
];

export const workExperience = experiences.filter(
  (experience) => experience.category === "work",
);

export const educationExperience = experiences.filter(
  (experience) => experience.category === "education",
);

export const degree = {
  school: "University of Virginia",
  college: "School of Engineering",
  degree: "Bachelor of Science in Computer Science",
  duration: "2020 - 2024",
  location: "Charlottesville, VA",
};

// Subtitles read like "Contributed to for OpenGov in 2024/2025"; V2 only
// shows the years
export const getProjectYears = (project: Project) =>
  project.subtitle?.match(/\d{4}(?:\/\d{4})?/)?.[0];

const projectGroupLabels: Record<string, string> = {
  opengov: "At OpenGov",
  uva: "At UVA",
};

// Research lives on the Education page rather than under Projects
const { other: research, ...projectsByGroup } = projectsData;

export const researchProjects = research ?? [];

export const projectGroups = Object.entries(projectsByGroup).map(
  ([id, projects]) => ({
    id,
    label: projectGroupLabels[id] ?? id,
    projects,
  }),
);
