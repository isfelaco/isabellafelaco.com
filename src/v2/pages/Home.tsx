import Header from "../components/Header";
import { Box, Container, Typography, useTheme } from "@mui/material";
import Reveal from "../components/Reveal";
import { summary } from "../data";

function Summary() {
  const theme = useTheme();

  return (
    <Box
      component="section"
      aria-label="Summary"
      sx={{
        maxWidth: theme.layout.readingMaxWidth,
        mx: "auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Reveal delay={120}>
        <Typography>{summary}</Typography>
      </Reveal>
    </Box>
  );
}

export default function Home() {
  const theme = useTheme();

  return (
    <>
      <Header />
      <Container
        component="main"
        sx={{ pt: theme.layout.sectionGap, pb: theme.layout.pageEnd }}
      >
        <Summary />
      </Container>
    </>
  );
}
