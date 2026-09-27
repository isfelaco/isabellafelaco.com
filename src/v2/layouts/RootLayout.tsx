import { Outlet, ScrollRestoration } from "react-router-dom";
import { Box } from "@mui/material";
import Nav from "../components/Nav";

export default function RootLayout() {
  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Nav />
      <Outlet />
      <ScrollRestoration />
    </Box>
  );
}
