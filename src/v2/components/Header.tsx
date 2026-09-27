import {
  Typography,
  Box,
  Container,
  styled,
  alpha,
  useTheme,
} from "@mui/material";
import SocialLinks from "./SocialLinks";
import hero1200 from "../../images/GoldenGate-1200.jpg";
import hero2000 from "../../images/GoldenGate-2000.jpg";
import hero3000 from "../../images/GoldenGate-3000.jpg";
import hero4284 from "../../images/GoldenGate-4284.jpg";

const NAME = "Isabella Felaco";

const heroSrcSet = [
  `${hero1200} 1200w`,
  `${hero2000} 2000w`,
  `${hero3000} 3000w`,
  `${hero4284} 4284w`,
].join(", ");

// The photo is portrait (3:4) and uses object-fit: cover, so on tall/narrow
// viewports its rendered width follows the hero height rather than the
// viewport width.
const heroSizes = "(max-aspect-ratio: 3/4) 75vh, 100vw";

const HeroImage = styled("img")(({ theme }) => ({
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  // Keep the bridge in frame and leave open sky above it for the marquee
  objectPosition: "center 58%",
  animation: `heroZoom 2.4s ${theme.motion.easing} both`,
}));

// Fades the photo into the page background so the hero text stays legible
const Scrim = styled("div")(({ theme }) => {
  const bg = theme.palette.background.default;
  return {
    position: "absolute",
    inset: 0,
    background: `linear-gradient(180deg, ${alpha(bg, 0.35)} 0%, ${alpha(bg, 0)} 30%, ${alpha(bg, 0)} 55%, ${alpha(bg, 0.75)} 85%, ${bg} 100%)`,
  };
});

const MarqueeTrack = styled("div")({
  display: "flex",
  width: "max-content",
  animation: "marquee 28s linear infinite",
  "@media (prefers-reduced-motion: reduce)": {
    animation: "none",
  },
});

const MarqueeText = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.h1.fontFamily,
  fontWeight: 700,
  fontSize: "clamp(3.5rem, 11vw, 10rem)",
  lineHeight: 1,
  letterSpacing: "-0.01em",
  textTransform: "uppercase",
  whiteSpace: "nowrap",
  color: theme.palette.text.primary,
  textShadow: theme.elevation.text,
  paddingRight: "0.5em",
}));

const Subtitle = styled(Typography)(({ theme }) => ({
  letterSpacing: "0.28em",
  textTransform: "uppercase",
  fontWeight: 500,
  color: theme.palette.primary.light,
  animation: `growSpacingSmall 1.1s ${theme.motion.easing} 0.6s both`,
  fontSize: "0.8rem",
}));

const AccentLine = styled("span")(({ theme }) => ({
  display: "block",
  width: 72,
  height: 2,
  background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${alpha(theme.palette.primary.main, 0.15)} 100%)`,
  transformOrigin: "left",
  animation: `drawUnderline 0.8s ${theme.motion.easing} 0.9s both`,
}));

export default function Header() {
  const theme = useTheme();

  return (
    <Box
      component="header"
      sx={{
        position: "relative",
        height: theme.layout.heroHeight,
        minHeight: 520,
        overflow: "hidden",
        backgroundColor: "background.default",
      }}
    >
      <HeroImage src={hero2000} srcSet={heroSrcSet} sizes={heroSizes} alt="" />
      <Scrim />

      <Box
        sx={{
          position: "absolute",
          top: `calc(${theme.spacing(theme.layout.navHeight)} + 5%)`,
          left: 0,
          right: 0,
          overflow: "hidden",
          animation: `fadeUp 1.1s ${theme.motion.easing} 0.2s both`,
        }}
      >
        <Typography component="h1" sx={theme.mixins.visuallyHidden}>
          {NAME}
        </Typography>
        <MarqueeTrack aria-hidden>
          {/* Two identical halves so translating -50% loops seamlessly */}
          {[0, 1].map((half) => (
            <Box key={half} sx={{ display: "flex" }}>
              {[0, 1, 2].map((i) => (
                <MarqueeText key={i}>{NAME}</MarqueeText>
              ))}
            </Box>
          ))}
        </MarqueeTrack>
      </Box>

      <Container
        sx={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: theme.spacing(theme.layout.heroInset),
          // The icons wrap below the text when the two don't fit side by side
          display: "flex",
          flexWrap: "wrap",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
          <Subtitle>Software Engineer</Subtitle>
          <AccentLine />
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              animation: `fadeUp 0.9s ${theme.motion.easing} 0.8s both`,
            }}
          >
            Specializing in Frontend Development
          </Typography>
        </Box>
        <SocialLinks
          sx={{
            animation: `iconPop 0.7s ${theme.motion.easing} 1s both`,
          }}
        />
      </Container>
    </Box>
  );
}
