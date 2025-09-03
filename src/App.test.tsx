import React from "react";
import { render, screen } from "@testing-library/react";
import { AppRoutes } from "./App";
import userEvent from "@testing-library/user-event";

describe("App", () => {
	it("renders home page", () => {
		render(<AppRoutes />);

		const header = screen.getByRole("banner", { name: "appbar" });
		expect(header).toBeInTheDocument();

		expect(
			screen.getByRole("heading", { name: "Isabella Felaco" })
		).toBeInTheDocument();

		const headshot = screen.getByRole("img", { name: "headshot" });
		expect(headshot).toBeInTheDocument();
	});

	it("renders correct header", () => {
		render(<AppRoutes />);

		const aboutButton = screen.getByRole("link", { name: "About" });
		expect(aboutButton).toBeInTheDocument();

		const experienceButton = screen.getByRole("link", {
			name: "Experience",
		});
		expect(experienceButton).toBeInTheDocument();

		const projectsButton = screen.getByRole("link", {
			name: "Projects",
		});
		expect(projectsButton).toBeInTheDocument();

		const courseworkButton = screen.getByRole("link", {
			name: "Coursework",
		});
		expect(courseworkButton).toBeInTheDocument();
	});

	it("navigates pages", async () => {
		render(<AppRoutes />);

		const aboutButton = screen.getByRole("link", { name: "About" });
		await userEvent.click(aboutButton);

		expect(window.location.hash).toBe("#/about");

		expect(
			screen.getByRole("heading", { name: "Contact" })
		).toBeInTheDocument();
		expect(
			screen.getByRole("heading", { name: "Education" })
		).toBeInTheDocument();
	});
});
