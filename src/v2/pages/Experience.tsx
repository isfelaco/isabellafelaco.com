import Page from "../components/Page";
import PageSection from "../components/PageSection";
import Timeline from "../components/Timeline";
import { workExperience } from "../data";

export default function Experience() {
  return (
    <Page title="Experience">
      <PageSection>
        <Timeline items={workExperience} />
      </PageSection>
    </Page>
  );
}
