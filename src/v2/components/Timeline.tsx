import { Box, Typography } from "@mui/material";
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
  location: string;
  children: React.ReactNode;
}) {
  return (
    <ListRow>
      <Box>
        <Typography
          variant="body2"
          sx={{ color: "primary.light", letterSpacing: "0.02em" }}
        >
          {duration}
        </Typography>
        <Typography
          variant="caption"
          component="p"
          sx={{ color: "text.muted" }}
        >
          {location}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        {children}
      </Box>
    </ListRow>
  );
}

export default function Timeline({ items }: { items: ExperienceType[] }) {
  return (
    <>
      {items.map((experience, i) => (
        <Reveal key={experience.id} delay={i * 80}>
          <DatedRow
            duration={experience.duration}
            location={experience.location}
          >
            <Typography variant="h4" component="h3">
              {experience.position}
              <Box component="span" sx={{ color: "primary.main" }}>
                {" "}
                · {experience.company}
              </Box>
            </Typography>
            {experience.description && (
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {experience.description}
              </Typography>
            )}
          </DatedRow>
        </Reveal>
      ))}
    </>
  );
}
