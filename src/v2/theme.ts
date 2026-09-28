import { createTheme } from "@mui/material";
import { alpha } from "@mui/material/styles";
import type { CSSObject, PaletteOptions } from "@mui/material/styles";

const paletteOptions = {
  primary: {
    main: "#d4a373",
    light: "#faedcd",
    contrastText: "#ffffff",
  },
  secondary: {
    main: "#faedcd",
  },
  background: { default: "#1B263B" },
} satisfies PaletteOptions;

const base = createTheme({ palette: paletteOptions });
const { palette } = base;
const { white, black } = palette.common;

const displayFont = '"Fraunces", "Georgia", serif';
const bodyFont = '"Outfit", "Helvetica Neue", sans-serif';

const motion = {
  easing: "cubic-bezier(0.22, 1, 0.36, 1)",
  duration: {
    short: "0.25s",
    medium: "0.35s",
    long: "0.5s",
    enter: "0.75s",
  },
  reduceMotion: {
    "@media (prefers-reduced-motion: reduce)": {
      transition: "none",
      animation: "none",
      "&:hover": {
        transform: "none",
      },
    },
  } satisfies CSSObject,
};

// Layout tokens in theme spacing units. With cssVariables enabled, all
// spacing is `n * var(--mui-spacing)`, and that unit is the one value that
// changes by screen size (see MuiCssBaseline below), so these tokens and every
// sx padding, margin, and gap scale together without per-component breakpoints.
const spacingUnit = { base: 6, md: 8 };

const layout = {
  navHeight: 8,
  gutter: 3,
  titleGap: 7, // Nav to page title, and page title to content
  sectionGap: 8, // Between sections on a page
  headingGap: 2, // Section heading to its rows
  rowPaddingY: 4, // Vertical padding inside every bordered list row
  rowColumnGap: 4, // Between a list row's columns
  rowLineGap: 2, // Between them once they wrap onto separate lines
  pageEnd: 14, // Space after the last content on a page
  heroInset: 7,
  tabGap: 4,
  dateColumnWidth: 28,
  // Not spacing
  heroHeight: "100svh", // Fills the first screen, so the page below starts past the fold
  contentMaxWidth: 1000,
  readingMaxWidth: 720,
  logoSize: 4,
};

const elevation = {
  media: `0 16px 40px ${alpha(black, 0.3)}`,
  text: `0 6px 30px ${alpha(black, 0.25)}`,
};

declare module "@mui/material/styles" {
  interface TypeBackground {
    translucent: string;
    inset: string;
  }

  interface TypeText {
    muted: string;
  }

  interface Mixins {
    mediaZoom: CSSObject;
    visuallyHidden: CSSObject;
  }

  interface Theme {
    motion: typeof motion;
    layout: typeof layout;
    elevation: typeof elevation;
  }

  interface ThemeOptions {
    motion?: typeof motion;
    layout?: typeof layout;
    elevation?: typeof elevation;
  }
}

const mediaZoom: CSSObject = {
  "& img, & video": {
    transition: `transform ${motion.duration.long} ${motion.easing}`,
  },
  "&:hover img, &:hover video": {
    transform: "scale(1.03)",
  },
  "@media (prefers-reduced-motion: reduce)": {
    "& img, & video": { transition: "none" },
    "&:hover img, &:hover video": { transform: "none" },
  },
};

// Hides content visually while keeping it available to screen readers
const visuallyHidden: CSSObject = {
  position: "absolute",
  width: 1,
  height: 1,
  margin: -1,
  padding: 0,
  border: 0,
  overflow: "hidden",
  clip: "rect(0 0 0 0)",
  whiteSpace: "nowrap",
};

export const theme = createTheme({
  cssVariables: true,
  spacing: spacingUnit.base,
  palette: {
    ...paletteOptions,
    background: {
      ...paletteOptions.background,
      // Dialogs and other surfaces sit on the page color, not MUI's white
      paper: palette.background.default,
      translucent: alpha(palette.background.default, 0.82),
      inset: alpha(black, 0.2),
    },
    text: {
      primary: white,
      secondary: alpha(white, 0.78),
      muted: alpha(white, 0.55),
    },
    divider: alpha(palette.primary.main, 0.25),
  },
  motion,
  layout,
  elevation,
  mixins: {
    mediaZoom,
    visuallyHidden,
  },
  typography: {
    allVariants: {
      color: white,
    },
    fontFamily: bodyFont,
    h1: {
      fontFamily: displayFont,
      fontSize: "3.15rem",
      fontWeight: 600,
      lineHeight: 1.05,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontFamily: displayFont,
      fontSize: "2.25rem",
      fontWeight: 600,
      letterSpacing: "-0.02em",
    },
    h3: {
      fontFamily: displayFont,
      fontSize: "1.75rem",
      fontWeight: 600,
      letterSpacing: "-0.015em",
    },
    h4: {
      fontFamily: displayFont,
      fontSize: "1.25rem",
      fontWeight: 600,
    },
    // Role titles, e.g. "SOFTWARE ENGINEER • OPENGOV"
    h5: {
      fontSize: "1rem",
      fontWeight: 600,
      lineHeight: 1.4,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
    },
    // Dates beside list rows; kept on one line so a date never breaks
    // mid-range when the date column is narrow
    subtitle2: {
      fontSize: "0.95rem",
      fontWeight: 700,
      lineHeight: 1.4,
      letterSpacing: "0.02em",
      whiteSpace: "nowrap",
    },
    body1: {
      fontSize: "1.05rem",
      lineHeight: 1.7,
      fontWeight: 400,
    },
    body2: {
      fontSize: "0.95rem",
      lineHeight: 1.65,
      fontWeight: 400,
    },
    caption: {
      fontSize: "0.85rem",
      lineHeight: 1.5,
    },
    overline: {
      fontSize: "0.75rem",
      fontWeight: 500,
      lineHeight: 1.6,
      letterSpacing: "0.18em",
      color: palette.primary.main,
    },
    button: {
      fontFamily: bodyFont,
      fontWeight: 500,
      letterSpacing: "0.02em",
      textTransform: "none",
    },
  },
  components: {
    // The spacing unit is the only responsive value; everything built on
    // theme.spacing follows it
    // Set on body, not :root: MUI emits its own :root --mui-spacing after
    // these styles, and the nearest definition wins for everything inside body
    MuiCssBaseline: {
      styleOverrides: (theme) => ({
        body: {
          [theme.breakpoints.up("md")]: {
            "--mui-spacing": `${spacingUnit.md}px`,
          },
        },
        "::selection": {
          background: alpha(palette.primary.main, 0.35),
          color: white,
        },
      }),
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: false,
      },
      styleOverrides: {
        root: ({ theme }) => ({
          maxWidth: layout.contentMaxWidth,
          paddingLeft: theme.spacing(layout.gutter),
          paddingRight: theme.spacing(layout.gutter),
        }),
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          transition: `background-color ${motion.duration.short} ease, color ${motion.duration.short} ease, border-color ${motion.duration.short} ease, transform ${motion.duration.short} ease, box-shadow ${motion.duration.short} ease`,
          "&:hover": {
            backgroundColor: white,
            color: palette.primary.main,
            borderColor: palette.primary.main,
            transform: "translateY(-1px)",
            boxShadow: `0 8px 18px ${alpha(palette.primary.main, 0.18)}`,
          },
          ...motion.reduceMotion,
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          padding: theme.spacing(1),
          transition: `transform ${motion.duration.short} ease, background-color ${motion.duration.short} ease`,
          "&:hover": {
            backgroundColor: alpha(palette.primary.main, 0.12),
            transform: "translateY(-2px) scale(1.08)",
          },
          ...motion.reduceMotion,
        }),
        // Pull an edge icon in by exactly its padding so the glyph lines up
        // with the container edge (MUI's default overshoots)
        edgeStart: ({ theme }) => ({ marginLeft: theme.spacing(-1) }),
        edgeEnd: ({ theme }) => ({ marginRight: theme.spacing(-1) }),
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: ({ theme }) => ({
          minHeight: theme.spacing(layout.navHeight),
        }),
        // Tabs are spaced with a gap rather than padding, so the first and
        // last labels sit flush with the content edges
        list: ({ theme }) => ({
          gap: theme.spacing(layout.tabGap),
        }),
        indicator: {
          height: 2,
          backgroundColor: palette.primary.main,
          transition: `all ${motion.duration.medium} ${motion.easing}`,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: ({ theme }) => ({
          minHeight: theme.spacing(layout.navHeight),
          minWidth: 0,
          paddingLeft: 0,
          paddingRight: 0,
          fontSize: "0.85rem",
          color: theme.palette.text.secondary,
          transition: `color ${motion.duration.short} ease`,
          [theme.breakpoints.up("sm")]: {
            fontSize: "0.95rem",
          },
          "&:hover, &.Mui-selected": {
            color: theme.palette.primary.light,
          },
          ...motion.reduceMotion,
        }),
      },
    },
  },
});
