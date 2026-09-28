import { screen } from "@testing-library/react";
import { renderWithTheme } from "../../test-utils";
import Reveal from "../Reveal";

describe("Reveal", () => {
  const RealObserver = window.IntersectionObserver;
  afterEach(() => {
    window.IntersectionObserver = RealObserver;
  });

  it("stays hidden until it scrolls into view", () => {
    // An observer that never reports an intersection
    window.IntersectionObserver = class {
      observe() {}
      unobserve() {}
      disconnect() {}
      takeRecords() {
        return [];
      }
    } as unknown as typeof IntersectionObserver;

    renderWithTheme(<Reveal>Content</Reveal>);

    const wrapper = screen.getByText("Content");
    expect(wrapper).not.toHaveClass("is-revealed");
    expect(wrapper).toHaveStyle({ opacity: "0" });
  });

  it("shows its content once it intersects the viewport", () => {
    // The test setup's observer reports every element as visible
    renderWithTheme(<Reveal>Content</Reveal>);

    const wrapper = screen.getByText("Content");
    expect(wrapper).toHaveClass("is-revealed");
    expect(wrapper).toHaveStyle({ opacity: "1" });
  });
});
