import projectsData, { Project } from "../data/projects";
export type { Project };

export interface ExperienceType {
  id: number;
  company: string;
  position: string;
  duration: string;
  location: string;
  category: "work" | "education";
  description?: string;
}

export const experiences: ExperienceType[] = [
  {
    id: 1,
    company: "OpenGov",
    position: "Software Engineer I",
    category: "work",
    duration: "June 2024 - present",
    location: "Boston, MA (Hybrid)",
    description:
      "Software Engineer at OpenGov on the Permitting and Licensing (PLC) team, specializing in frontend development with a focus on building accessible, user-friendly interfaces. Experienced in writing well-structured tests to ensure code quality and platform reliability. Developed expertise in accessibility best practices and committed to expanding backend skills in API and service development. Currently advancing knowledge of contract testing (PACT) and end-to-end (E2E) testing to strengthen application reliability and deployment efficiency.",
  },
  {
    id: 2,
    company: "OpenGov",
    position: "Software Engineer Intern",
    category: "work",
    duration: "May 2022 - May 2024",
    location: "Remote",
    description:
      "Software Engineer Intern at OpenGov on the Permitting and Licensing (PLC) team, focused on developing custom UI components with React, TypeScript, and CSS. Gained practical experience with Git and SQLPro while contributing in an Agile environment under the mentorship of senior engineers. Worked full-time during summers and part-time during the academic year, building a strong foundation in frontend development and collaborative software engineering practices.",
  },
  {
    id: 3,
    company: "UVA School of Engineering",
    position: "Tutor",
    category: "education",
    duration: "Sept 2021 - May 2022",
    location: "Charlottesville, VA",
    description:
      "Tutor at the University of Virginia’s School of Engineering, initially teaching Chemistry and later four different Computer Science courses. Developed the ability to explain complex concepts clearly and effectively, while building strong problem-solving and debugging skills. Gained experience guiding students through challenging material and troubleshooting code efficiently, strengthening both technical knowledge and communication skills.",
  },
  {
    id: 4,
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
  independent: "Independent",
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
