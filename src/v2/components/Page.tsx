import { Box, Typography, useTheme } from "@mui/material";

export default function Page({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: theme.layout.titleGap,
      }}
    >
      <Typography
        variant="h1"
        sx={{ animation: `fadeUp 0.8s ${theme.motion.easing} both` }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: theme.layout.sectionGap,
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
