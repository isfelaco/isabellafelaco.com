import { Box, Typography, useTheme } from "@mui/material";
import Reveal from "./Reveal";
import ListRow from "./ListRow";
import { ExperienceType } from "../data";

// A list row with the date and location in the left column
export function DatedRow({
  duration,
  location,
  children,
}: {
  duration: string;
  location?: string;
  children: React.ReactNode;
}) {
  const theme = useTheme();

  return (
    <ListRow>
      <Box>
        <Typography variant="subtitle2" component="p">
          {duration}
        </Typography>
        {location && (
          <Typography
            variant="caption"
            component="p"
            sx={{ color: "text.muted" }}
          >
            {location}
          </Typography>
        )}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: theme.layout.headingGap,
        }}
      >
        {children}
      </Box>
    </ListRow>
  );
}

export default function Timeline({ items }: { items: ExperienceType[] }) {
  const theme = useTheme();

  return (
    <>
      {items.map((experience, i) => (
        <Reveal key={experience.id} delay={i * 80}>
          <DatedRow
            duration={experience.duration}
            location={experience.location}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: theme.layout.headingGap,
              }}
            >
              {experience.logo && (
                <Box
                  component="img"
                  src={experience.logo}
                  alt=""
                  sx={{
                    height: theme.spacing(theme.layout.logoSize),
                    width: "auto",
                    flexShrink: 0,
                  }}
                />
              )}
              <Typography variant="h5" component="h3">
                {experience.position} • {experience.company}
              </Typography>
            </Box>
            {experience.description && (
              <Typography sx={{ color: "text.secondary" }}>
                {experience.description}
              </Typography>
            )}
            {experience.skills && (
              <Typography variant="body2" sx={{ color: "primary.main" }}>
                {experience.skills.join(" • ")}
              </Typography>
            )}
          </DatedRow>
        </Reveal>
      ))}
    </>
  );
}
