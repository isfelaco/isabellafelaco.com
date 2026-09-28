import { Box, IconButton, SxProps, Theme } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SimCardDownloadIcon from "@mui/icons-material/SimCardDownload";

// `edge` pulls the first or last icon's padding in so its glyph lines up with
// the container edge (MUI's IconButton edge prop)
export default function SocialLinks({
  edge,
  sx,
}: {
  edge?: "start" | "end";
  sx?: SxProps<Theme>;
}) {
  return (
    <Box sx={{ display: "flex", gap: 1, ...sx }}>
      <IconButton
        edge={edge === "start" ? "start" : false}
        href="https://github.com/isfelaco"
        target="_blank"
        aria-label="GitHub"
      >
        <GitHubIcon color="primary" />
      </IconButton>
      <IconButton
        href="https://linkedin.com/in/isabella-felaco"
        target="_blank"
        aria-label="LinkedIn"
      >
        <LinkedInIcon color="primary" />
      </IconButton>
      <IconButton
        edge={edge === "end" ? "end" : false}
        href="/Isabella Felaco Resume.pdf"
        target="_blank"
        aria-label="Download resume"
      >
        <SimCardDownloadIcon color="primary" />
      </IconButton>
    </Box>
  );
}
