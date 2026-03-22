import React from "react";
import { render, screen } from "@testing-library/react";
import MuiTabs, { Tabs, Tab, Panel } from ".";
import userEvent from "@testing-library/user-event";

const renderTabs = () => {
	return render(
		<MuiTabs>
			<Tabs ariaLabel="test tabs">
				<Tab label="Tab 1" index={0} />
				<Tab label="Tab 2" index={1} />
				<Tab label="Tab 3" index={2} />
			</Tabs>
			<Panel index={0}>
				<div>Tab 1 Panel</div>
			</Panel>
			<Panel index={1}>
				<div>Tab 2 Panel</div>
			</Panel>
			<Panel index={2}>
				<div>Tab 3 Panel</div>
			</Panel>
		</MuiTabs>
	);
};

describe("Tabs", () => {
	it("renders", () => {
		renderTabs();

		const tabs = screen.getByLabelText("test tabs");
		expect(tabs).toBeInTheDocument();

		const tab1 = screen.getByRole("tab", { name: "Tab 1" });
		expect(tab1).toBeInTheDocument();
		const tab2 = screen.getByRole("tab", { name: "Tab 2" });
		expect(tab2).toBeInTheDocument();
		const tab3 = screen.getByRole("tab", { name: "Tab 3" });
		expect(tab3).toBeInTheDocument();
	});

	it("renders panels", async () => {
		renderTabs();

		const tab1Panel = screen.getByRole("tabpanel", { name: "Tab 1" });
		expect(tab1Panel).toBeInTheDocument();
		expect(tab1Panel).toHaveTextContent("Tab 1 Panel");

		const tab2 = screen.getByRole("tab", { name: "Tab 2" });
		await userEvent.click(tab2);
		const tab2Panel = screen.getByRole("tabpanel", { name: "Tab 2" });
		expect(tab2Panel).toBeInTheDocument();
		expect(tab2Panel).toHaveTextContent("Tab 2 Panel");

		const tab3 = screen.getByRole("tab", { name: "Tab 3" });
		await userEvent.click(tab3);
		const tab3Panel = screen.getByRole("tabpanel", { name: "Tab 3" });
		expect(tab3Panel).toBeInTheDocument();
		expect(tab3Panel).toHaveTextContent("Tab 3 Panel");
	});
});
