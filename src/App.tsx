import React, { ReactElement, ReactNode } from "react";
import "./index.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Coursework from "./pages/Coursework";
import { theme } from "./theme";
import { Box, ThemeProvider } from "@mui/material";
import Header from "./components/Header";
import Index from "./new";

export const pages: { [id: string]: { path: string; element: ReactElement } } =
	{
		About: { path: "/about", element: <About /> },
		Experience: { path: "/experience", element: <Experience /> },
		Projects: { path: "/projects", element: <Projects /> },
		Coursework: { path: "/coursework", element: <Coursework /> },
	};

export function AppProvider({ children }: { children: ReactNode }) {
	return (
		<ThemeProvider theme={theme}>
			<Router basename="/">{children}</Router>
		</ThemeProvider>
	);
}

export function AppRoutes() {
	return (
		<AppProvider>
			<Box
				sx={{
					backgroundColor: "background.default",
					display: "flex",
					flexDirection: "column",
					minHeight: "100vh",
				}}
			>
				<Header pages={pages} />
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						flexGrow: 1,
						p: { xs: 0, sm: 5 },
					}}
				>
					<Routes>
						<Route path="/" element={<Home />} />
						{Object.entries(pages).map(([_, page], i) => (
							<Route {...page} key={i} />
						))}
					</Routes>
				</Box>
			</Box>
		</AppProvider>
	);
}

export default function App() {
	return (
		<AppProvider>
			<Index />
		</AppProvider>
	);
}
