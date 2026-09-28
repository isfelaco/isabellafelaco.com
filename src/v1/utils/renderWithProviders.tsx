import { ThemeProvider } from "@mui/material";
import { theme } from "../theme";
import { render } from "@testing-library/react";
import React from "react";
import { HashRouter as Router } from "react-router-dom";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <Router basename="/">{children}</Router>
    </ThemeProvider>
  );
}

export default function renderWithProviders(children: React.ReactNode) {
  return render(children, { wrapper: Providers });
}
