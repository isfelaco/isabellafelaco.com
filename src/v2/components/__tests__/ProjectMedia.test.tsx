import { screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithTheme } from "../../test-utils";
import ProjectMedia from "../ProjectMedia";

describe("ProjectMedia", () => {
  it("opens an image full size in a dialog and closes it", async () => {
    const user = userEvent.setup();
    renderWithTheme(
      <ProjectMedia
        title="Form Builder"
        media={{ kind: "image", src: "builder.png" }}
      />,
    );

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    await user.click(
      screen.getByRole("button", { name: "View Form Builder full size" }),
    );

    const dialog = screen.getByRole("dialog", { name: "Form Builder" });
    expect(dialog).toBeInTheDocument();
    expect(screen.getByRole("img", { name: "Form Builder" })).toHaveAttribute(
      "src",
      "builder.png",
    );

    await user.click(screen.getByRole("button", { name: "Close" }));
    await waitFor(() =>
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument(),
    );
  });

  it("closes the dialog with Escape", async () => {
    const user = userEvent.setup();
    renderWithTheme(
      <ProjectMedia
        title="Form Builder"
        media={{ kind: "image", src: "a.png" }}
      />,
    );

    await user.click(screen.getByRole("button", { name: /full size/ }));
    expect(screen.getByRole("dialog")).toBeInTheDocument();

    await user.keyboard("{Escape}");
    await waitFor(() =>
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument(),
    );
  });

  it("plays a video with controls only in the dialog", async () => {
    const user = userEvent.setup();
    renderWithTheme(
      <ProjectMedia
        title="Date Picker"
        media={{ kind: "video", src: "picker.mov" }}
      />,
    );

    // The inline preview is part of the button, not a player of its own
    expect(screen.queryByLabelText("Date Picker")).not.toBeInTheDocument();

    await user.click(
      screen.getByRole("button", { name: "View Date Picker full size" }),
    );

    // The dialog shares the title as its name, so look inside it
    const player = within(screen.getByRole("dialog")).getByLabelText(
      "Date Picker",
    );
    expect(player).toHaveAttribute("controls");
    expect(player).toHaveAttribute("src", "picker.mov");
  });
});
