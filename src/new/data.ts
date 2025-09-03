import projectsData, { Project } from "../data/projects";
export type { Project };

export interface ExperienceType {
	id: number;
	company: string;
	position: string;
	duration: string;
	location: string;
	description?: string;
}

export const experiences = [
	{
		id: 1,
		company: "OpenGov",
		position: "Software Engineer I",
		duration: "June 2024 - present",
		location: "Boston, MA (Hybrid)",
		description:
			"Software Engineer at OpenGov on the Permitting and Licensing (PLC) team, specializing in frontend development with a focus on building accessible, user-friendly interfaces. Experienced in writing well-structured tests to ensure code quality and platform reliability. Developed expertise in accessibility best practices and committed to expanding backend skills in API and service development. Currently advancing knowledge of contract testing (PACT) and end-to-end (E2E) testing to strengthen application reliability and deployment efficiency.",
	},
	{
		id: 2,
		company: "OpenGov",
		position: "Software Engineer Intern",
		duration: "May 2022 - May 2024",
		location: "Remote",
		description:
			"Software Engineer Intern at OpenGov on the Permitting and Licensing (PLC) team, focused on developing custom UI components with React, TypeScript, and CSS. Gained practical experience with Git and SQLPro while contributing in an Agile environment under the mentorship of senior engineers. Worked full-time during summers and part-time during the academic year, building a strong foundation in frontend development and collaborative software engineering practices.",
	},
	{
		id: 3,
		company: "UVA School of Engineering",
		position: "Tutor",
		duration: "Sept 2021 - May 2022",
		location: "Charlottesville, VA",
		description:
			"Tutor at the University of Virginia’s School of Engineering, initially teaching Chemistry and later four different Computer Science courses. Developed the ability to explain complex concepts clearly and effectively, while building strong problem-solving and debugging skills. Gained experience guiding students through challenging material and troubleshooting code efficiently, strengthening both technical knowledge and communication skills.",
	},
	{
		id: 4,
		company: "UVA School of Education, America Reads",
		position: "Tutor",
		duration: "Sept 2021 - May 2022",
		location: "Charlottesville, VA",
		description:
			"Classroom Assistant at Walker Upper Elementary School in Charlottesville, VA, supporting a 5th-grade class with students of diverse learning levels. Worked one-on-one with non-native English speakers to provide targeted assistance, enabling the lead teacher to manage the broader classroom. Developed leadership skills and the ability to adapt teaching approaches to meet individual student needs effectively.",
	},
];

export const projects = Object.entries(projectsData).flatMap(
	([_, project]) => project
);
