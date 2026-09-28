import { screen } from "@testing-library/react";
import { renderWithTheme } from "../../test-utils";
import Timeline from "../Timeline";
import { ExperienceType } from "../../data";

const withEverything: ExperienceType = {
  id: 1,
  company: "Acme",
  position: "Engineer",
  category: "work",
  duration: "2020 - 2022",
  location: "Boston, MA",
  description: "Built things.",
  skills: ["React", "TypeScript", "MUI"],
  logo: "acme-logo.png",
};

const minimal: ExperienceType = {
  id: 2,
  company: "Beta",
  position: "Intern",
  category: "work",
  duration: "2019",
};

describe("Timeline", () => {
  it("renders each role's title, dates, location, description, and skills", () => {
    renderWithTheme(<Timeline items={[withEverything]} />);

    expect(
      screen.getByRole("heading", { level: 3, name: "Engineer • Acme" }),
    ).toBeInTheDocument();
    expect(screen.getByText("2020 - 2022")).toBeInTheDocument();
    expect(screen.getByText("Boston, MA")).toBeInTheDocument();
    expect(screen.getByText("Built things.")).toBeInTheDocument();
    expect(screen.getByText("React • TypeScript • MUI")).toBeInTheDocument();
  });

  it("shows the logo as a decorative image beside the title", () => {
    renderWithTheme(<Timeline items={[withEverything]} />);

    // Empty alt marks it decorative: the company name is already in the title
    expect(screen.getByAltText("")).toHaveAttribute("src", "acme-logo.png");
  });

  it("omits the optional parts when a role doesn't have them", () => {
    renderWithTheme(<Timeline items={[minimal]} />);

    expect(screen.queryByAltText("")).not.toBeInTheDocument();
    // Only the date and title render: no location, description, or skills
    expect(document.body).toHaveTextContent(/^2019Intern • Beta$/);
  });

  it("doesn't render dates as headings", () => {
    renderWithTheme(<Timeline items={[withEverything]} />);

    expect(
      screen.getAllByRole("heading").map((heading) => heading.textContent),
    ).toEqual(["Engineer • Acme"]);
  });

  it("renders roles in the order given", () => {
    renderWithTheme(<Timeline items={[withEverything, minimal]} />);

    expect(
      screen.getAllByRole("heading", { level: 3 }).map((h) => h.textContent),
    ).toEqual(["Engineer • Acme", "Intern • Beta"]);
  });
});
