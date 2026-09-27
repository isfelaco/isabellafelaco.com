import { Box, Typography, TypographyProps, useTheme } from "@mui/material";
import Reveal from "./Reveal";

export default function PageSection({
  title,
  titleVariant = "h3",
  children,
}: {
  title?: string;
  titleVariant?: TypographyProps["variant"];
  children: React.ReactNode;
}) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: theme.layout.headingGap,
      }}
    >
      {title && (
        <Reveal>
          <Typography variant={titleVariant} component="h2">
            {title}
          </Typography>
        </Reveal>
      )}
      <Box>{children}</Box>
    </Box>
  );
}
