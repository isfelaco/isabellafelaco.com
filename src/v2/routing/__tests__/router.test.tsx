import { screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderRoute } from "../../test-utils";
import { educationExperience, summary, workExperience } from "../../data";
import { paths } from "../paths";

const nav = () => screen.getByRole("navigation", { name: "Main" });
const selectedTab = () =>
  within(nav())
    .getAllByRole("tab")
    .find((tab) => tab.getAttribute("aria-selected") === "true");

describe("routing", () => {
  it("renders the home page at /", () => {
    renderRoute(paths.home);

    expect(
      screen.getByRole("heading", { level: 1, name: "Isabella Felaco" }),
    ).toBeInTheDocument();
    expect(screen.getByText(summary)).toBeInTheDocument();
    expect(selectedTab()).toBeUndefined();
  });

  it.each([
    [paths.experience, "Experience"],
    [paths.education, "Education"],
    [paths.projects, "Projects"],
  ])("renders %s with its title and selected tab", (path, title) => {
    renderRoute(path);

    expect(
      screen.getByRole("heading", { level: 1, name: title }),
    ).toBeInTheDocument();
    expect(selectedTab()).toHaveTextContent(title);
  });

  it("selects the tab even with a trailing slash", () => {
    renderRoute(`${paths.education}/`);

    expect(
      screen.getByRole("heading", { level: 1, name: "Education" }),
    ).toBeInTheDocument();
    expect(selectedTab()).toHaveTextContent("Education");
  });

  it("redirects unknown paths home", () => {
    const { router } = renderRoute("/not-a-page");

    expect(router.state.location.pathname).toBe(paths.home);
    expect(screen.getByText(summary)).toBeInTheDocument();
  });

  it("navigates between pages from the nav", async () => {
    const user = userEvent.setup();
    const { router } = renderRoute(paths.home);

    await user.click(within(nav()).getByRole("tab", { name: "Projects" }));
    expect(router.state.location.pathname).toBe(paths.projects);
    expect(
      screen.getByRole("heading", { level: 1, name: "Projects" }),
    ).toBeInTheDocument();

    await user.click(
      within(nav()).getByRole("link", { name: "Isabella Felaco, home" }),
    );
    expect(router.state.location.pathname).toBe(paths.home);
  });

  it("lists only work roles on Experience", () => {
    renderRoute(paths.experience);

    const roles = screen
      .getAllByRole("heading", { level: 3 })
      .map((heading) => heading.textContent);
    expect(roles).toEqual(
      workExperience.map((e) => `${e.position} • ${e.company}`),
    );
  });

  it("lists the campus roles on Education", () => {
    renderRoute(paths.education);

    for (const role of educationExperience) {
      expect(
        screen.getByRole("heading", {
          level: 3,
          name: `${role.position} • ${role.company}`,
        }),
      ).toBeInTheDocument();
    }
  });

  it("shows the site footer on tab pages but not on home", () => {
    const { unmount } = renderRoute(paths.experience);
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
    unmount();

    renderRoute(paths.home);
    expect(screen.queryByRole("contentinfo")).not.toBeInTheDocument();
  });
});
