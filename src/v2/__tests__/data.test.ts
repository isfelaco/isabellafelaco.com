import projectsData from "../../data/projects";
import {
  educationExperience,
  experiences,
  getProjectYears,
  projectGroups,
  researchProjects,
  workExperience,
} from "../data";

describe("getProjectYears", () => {
  it("extracts a single year", () => {
    expect(
      getProjectYears({
        title: "",
        description: "",
        subtitle: "Created in 2023",
      }),
    ).toBe("2023");
  });

  it("extracts a year range", () => {
    expect(
      getProjectYears({
        title: "",
        description: "",
        subtitle: "Contributed to for OpenGov in 2024/2025",
      }),
    ).toBe("2024/2025");
  });

  it("returns undefined without a subtitle or a year", () => {
    expect(getProjectYears({ title: "", description: "" })).toBeUndefined();
    expect(
      getProjectYears({ title: "", description: "", subtitle: "Side project" }),
    ).toBeUndefined();
  });
});

describe("experience groups", () => {
  it("splits every experience into work or education, keeping order", () => {
    expect(workExperience.every((e) => e.category === "work")).toBe(true);
    expect(educationExperience.every((e) => e.category === "education")).toBe(
      true,
    );
    expect(workExperience.length + educationExperience.length).toBe(
      experiences.length,
    );
    expect(workExperience).toEqual(
      experiences.filter((e) => e.category === "work"),
    );
  });

  it("gives every experience a unique id", () => {
    const ids = experiences.map((e) => e.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});

describe("project groups", () => {
  it("moves research out of Projects", () => {
    expect(projectGroups.map((group) => group.id)).not.toContain("other");
    expect(researchProjects).toEqual(projectsData.other ?? []);
  });

  it("labels every group with a readable name, not its data key", () => {
    for (const group of projectGroups) {
      expect(group.label).not.toBe(group.id);
    }
  });

  it("keeps every project from the source data", () => {
    const shown = projectGroups.flatMap((group) => group.projects);
    const expected = Object.entries(projectsData)
      .filter(([id]) => id !== "other")
      .flatMap(([, projects]) => projects);
    expect(shown).toEqual(expected);
  });
});
