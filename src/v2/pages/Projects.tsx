import { Typography, Box, Button, useTheme } from "@mui/material";
import Reveal from "../components/Reveal";
import Page from "../components/Page";
import PageSection from "../components/PageSection";
import ListRow from "../components/ListRow";
import { projectGroups, Project, getProjectYears } from "../data";
import ProjectMedia from "../components/ProjectMedia";
import { getImageUrl } from "../../utils/images";

export const ProjectRow = ({ project }: { project: Project }) => {
  const theme = useTheme();

  const repository = project.repository ?? project.link;
  const years = getProjectYears(project);
  const hasMedia = Boolean(project.videoUrl || project.imageUrl);

  return (
    <ListRow
      columns={hasMedia ? ["5 1 18rem", "7 1 22rem"] : ["1 1 100%"]}
      sx={{ alignItems: "center" }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1.5,
          maxWidth: hasMedia ? undefined : theme.layout.readingMaxWidth,
        }}
      >
        <Typography variant="h4" component="h3">
          {project.title}
          {years && (
            <Box
              component="span"
              sx={{
                color: "text.muted",
                fontFamily: theme.typography.fontFamily,
                fontWeight: 400,
                fontSize: "0.85em",
              }}
            >
              {" "}
              ({years})
            </Box>
          )}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {project.description}
        </Typography>
        {(repository || project.url) && (
          <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap" }}>
            {repository && (
              <Button
                href={repository}
                target="_blank"
                variant="outlined"
                size="small"
              >
                View repository
              </Button>
            )}
            {project.url && (
              <Button
                href={project.url}
                target="_blank"
                variant="outlined"
                size="small"
              >
                Visit site
              </Button>
            )}
          </Box>
        )}
      </Box>
      {project.imageUrl && (
        <ProjectMedia
          title={project.title}
          media={{ kind: "image", src: getImageUrl(project.imageUrl) }}
        />
      )}
      {project.videoUrl && (
        <ProjectMedia
          title={project.title}
          media={{ kind: "video", src: project.videoUrl }}
        />
      )}
    </ListRow>
  );
};

export default function Projects() {
  return (
    <Page title="Projects">
      {projectGroups.map((group) => (
        <PageSection key={group.id} title={group.label} titleVariant="overline">
          {group.projects.map((project) => (
            <Reveal key={project.title}>
              <ProjectRow project={project} />
            </Reveal>
          ))}
        </PageSection>
      ))}
    </Page>
  );
}
