import { render } from "@testing-library/react";
import { ThemeProvider } from "@mui/material";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { theme } from "./theme";
import { routes } from "./routing/router";

export function renderWithTheme(ui: React.ReactElement) {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
}

export function renderRoute(path: string) {
  const router = createMemoryRouter(routes, { initialEntries: [path] });
  const result = render(
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>,
  );
  return { ...result, router };
}
