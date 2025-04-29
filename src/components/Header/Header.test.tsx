import { render, screen } from "@testing-library/react";
import Header from ".";
import React from "react";
import { AppProvider } from "../../App";
import userEvent from "@testing-library/user-event";

const renderWithProviders = (children: React.ReactNode) => {
	return render(<AppProvider>{children}</AppProvider>);
};

describe("renders header", () => {
	it("renders header", () => {
		renderWithProviders(
			<Header
				pages={{
					page0: { path: "/", element: <div>Page 0</div> },
					page1: { path: "/", element: <div>Page 1</div> },
					page2: { path: "/", element: <div>Page 2</div> },
				}}
			/>
		);
		const appBar = screen.getByRole("banner", { name: "appbar" });
		expect(appBar).toBeInTheDocument();

		const header = screen.getByRole("link", {
			name: "Isabella Felaco's Portfolio",
		});
		expect(header).toBeInTheDocument();

		const button0 = screen.getByRole("link", { name: "page0" });
		expect(button0).toBeInTheDocument();

		const button1 = screen.getByRole("link", { name: "page1" });
		expect(button1).toBeInTheDocument();

		const button2 = screen.getByRole("link", { name: "page2" });
		expect(button2).toBeInTheDocument();
	});

	it("navigates", async () => {
		renderWithProviders(
			<Header
				pages={{ page0: { path: "/page0", element: <div>Page 0</div> } }}
			/>
		);

		expect(window.location.pathname).toBe("/");
		const button0 = screen.getByRole("link", { name: "page0" });
		await userEvent.click(button0);

		expect(window.location.pathname).toBe("/page0");
	});
});
