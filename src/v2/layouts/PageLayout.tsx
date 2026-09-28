import { Outlet } from "react-router-dom";
import { Container, useTheme } from "@mui/material";
import Footer from "../components/Footer";

export default function PageLayout() {
  const theme = useTheme();

  return (
    <>
      <Container
        component="main"
        sx={{
          flexGrow: 1,
          // Clear the fixed nav, then match the gap below the title
          pt: theme.layout.navHeight + theme.layout.titleGap,
          pb: theme.layout.pageEnd,
        }}
      >
        <Outlet />
      </Container>
      <Footer />
    </>
  );
}
