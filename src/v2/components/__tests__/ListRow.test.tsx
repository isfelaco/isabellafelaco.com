import { renderWithTheme } from "../../test-utils";
import ListRow from "../ListRow";

// Each child is wrapped in its own flex column
const columnsOf = (container: HTMLElement) =>
  Array.from((container.firstElementChild as HTMLElement).children);

describe("ListRow", () => {
  it("wraps each child in its own column", () => {
    const { container } = renderWithTheme(
      <ListRow>
        <span>Date</span>
        <span>Content</span>
      </ListRow>,
    );

    const columns = columnsOf(container);
    expect(columns).toHaveLength(2);
    expect(columns[0]).toHaveTextContent("Date");
    expect(columns[1]).toHaveTextContent("Content");
  });

  it("applies each column's flex value", () => {
    const { container } = renderWithTheme(
      <ListRow columns={["5 1 18rem", "7 1 22rem"]}>
        <span>Text</span>
        <span>Media</span>
      </ListRow>,
    );

    const [text, media] = columnsOf(container);
    expect(text).toHaveStyle({ flex: "5 1 18rem" });
    expect(media).toHaveStyle({ flex: "7 1 22rem" });
  });

  it("skips children that render nothing", () => {
    const hasMedia = false;
    const { container } = renderWithTheme(
      <ListRow>
        <span>Text</span>
        {hasMedia && <span>Media</span>}
      </ListRow>,
    );

    expect(columnsOf(container)).toHaveLength(1);
  });
});
