import { useEffect, useState } from "react";
import { Link, matchPath, useLocation } from "react-router-dom";
import { Box, Container, Tab, Tabs, Typography, useTheme } from "@mui/material";
import { paths } from "../routing/paths";

const TABS = [
  { path: paths.experience, label: "Experience" },
  { path: paths.education, label: "Education" },
  { path: paths.projects, label: "Projects" },
];

export default function Nav() {
  const theme = useTheme();
  const { pathname } = useLocation();
  const active =
    TABS.find((tab) => matchPath(tab.path, pathname))?.path ?? null;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Over the hero photo the bar stays transparent until the page scrolls
  const solid = scrolled || active !== null;

  return (
    <Box
      component="nav"
      aria-label="Main"
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: theme.zIndex.appBar,
        backgroundColor: solid ? "background.translucent" : "transparent",
        backdropFilter: solid ? "blur(12px)" : "none",
        borderBottom: 1,
        borderColor: solid ? "divider" : "transparent",
        transition: `background-color ${theme.motion.duration.long} ease, border-color ${theme.motion.duration.long} ease`,
        animation: `fadeIn 0.8s ${theme.motion.easing} both`,
      }}
    >
      <Container
        sx={{
          height: theme.spacing(theme.layout.navHeight),
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 1,
        }}
      >
        <Typography
          component={Link}
          to={paths.home}
          aria-label="Isabella Felaco, home"
          sx={{
            fontFamily: theme.typography.h1.fontFamily,
            fontWeight: 600,
            fontSize: "1.15rem",
            color: "primary.light",
            textDecoration: "none",
            whiteSpace: "nowrap",
            transition: `color ${theme.motion.duration.short} ease`,
            "&:hover": { color: "primary.main" },
          }}
        >
          <Box component="span" sx={{ display: { xs: "none", sm: "inline" } }}>
            Isabella Felaco
          </Box>
          <Box component="span" sx={{ display: { xs: "inline", sm: "none" } }}>
            IF
          </Box>
        </Typography>
        <Tabs value={active ?? false} aria-label="Sections">
          {TABS.map((tab) => (
            <Tab
              key={tab.path}
              value={tab.path}
              label={tab.label}
              component={Link}
              to={tab.path}
            />
          ))}
        </Tabs>
      </Container>
    </Box>
  );
}
