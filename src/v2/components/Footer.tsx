import { Box, Container, Typography, useTheme } from "@mui/material";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  const theme = useTheme();

  return (
    <Container component="footer">
      <Box
        sx={{
          py: theme.layout.rowPaddingY,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
          borderTop: 1,
          borderColor: "divider",
        }}
      >
        <Typography variant="body2" sx={{ color: "text.muted" }}>
          © {new Date().getFullYear()} Isabella Felaco
        </Typography>
        <SocialLinks edge="end" />
      </Box>
    </Container>
  );
}
