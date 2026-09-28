import { Typography } from "@mui/material";
import Page from "../components/Page";
import PageSection from "../components/PageSection";
import Timeline, { DatedRow } from "../components/Timeline";
import Reveal from "../components/Reveal";
import { ProjectRow } from "./Projects";
import { educationExperience, degree, researchProjects } from "../data";

export default function Education() {
  return (
    <Page title="Education">
      <PageSection>
        <Reveal>
          <DatedRow duration={degree.duration} location={degree.location}>
            <Typography variant="h3" component="h2">
              {degree.school}
            </Typography>
            <Typography sx={{ color: "primary.main" }}>
              {degree.degree}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {degree.college}
            </Typography>
          </DatedRow>
        </Reveal>
      </PageSection>

      <PageSection title="Work Experience">
        <Timeline items={educationExperience} />
      </PageSection>

      {researchProjects.length > 0 && (
        <PageSection title="Research">
          {researchProjects.map((project) => (
            <Reveal key={project.title}>
              <ProjectRow project={project} />
            </Reveal>
          ))}
        </PageSection>
      )}
    </Page>
  );
}
