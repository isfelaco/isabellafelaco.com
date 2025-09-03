import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import Header from "./components/Header";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import { theme } from "../theme";

function Container({ children }: { children: React.ReactNode }) {
	const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

	return (
		<Box
			sx={{
				backgroundColor: "background.default",
				height: "100vh",
				width: "100vw",
				display: "flex",
				justifyContent: isMobile ? "flex-start" : "center",
				overflow: "hidden",
			}}
		>
			<Box
				sx={{
					maxWidth: isMobile ? "100%" : "1000px",
					height: "100%",
					display: "flex",
					flexDirection: isMobile ? "column" : "row",
					gap: 2,
					animation: "fadeIn 2s",
				}}
			>
				{children}
			</Box>
		</Box>
	);
}

export default function Index() {
	const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

	return (
		<Container>
			<Header />
			<Box
				sx={{
					width: isMobile ? "90%" : "67%",
					display: "flex",
					flexDirection: "column",
					gap: 4,
					overflowY: "auto",
					p: isMobile ? 2 : 0,
				}}
			>
				<Typography sx={{ mt: isMobile ? 0 : 20 }}>
					I recently graduated from the <b>University of Virginia</b> with a
					degree in Computer Science, where I focused on building scalable
					applications, web development, and database systems. Through my
					coursework, I gained hands-on experience with performance engineering,
					security, and large-scale software design, as well as proficiency in
					languages like TypeScript, JavaScript, C/C++, Python, PHP, and SQL.
					I&apos;ve also worked extensively with frameworks and tools such as
					React, Django, Express, Next.js, Docker, Kubernetes, and Git, which
					has given me a well-rounded technical foundation.
				</Typography>
				<Typography>
					Professionally, I&apos;ve grown through my experience at{" "}
					<b>OpenGov</b>, first as a Software Engineer Intern and now as a
					Software Engineer I. In these roles, I&apos;ve developed end-to-end
					features across the stack, including extending GraphQL schemas,
					building custom UI components, and integrating them into production
					applications. I also led a redesign of our product&apos;s form
					rendering capabilities, where I authored a comprehensive frontend
					design document and introduced reusable patterns for more scalable
					development. I enjoy collaborating with designers, project managers,
					and other engineers to deliver solutions that are both technically
					sound and user-friendly, and I&apos;m always looking for ways to
					improve performance, scalability, and usability in the products I
					build.
				</Typography>
				<Experience />
				<Projects />
				<Box sx={{ mt: 20 }} />
			</Box>
		</Container>
	);
}
