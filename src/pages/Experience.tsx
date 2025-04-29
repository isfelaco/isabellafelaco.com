import experiences from "../data/experiences.json";
import ContentBox from "../components/ContentBox";
import { styled, Typography } from "@mui/material";
import MuiTabs, { Tabs, Tab, Panel } from "../components/Tabs";

const Description = styled(Typography)`
	text-indent: 50px;
	text-align: left;
`;

export default function Experience() {
	return (
		<MuiTabs>
			<Tabs ariaLabel="Experience Tabs">
				{experiences.map((experience, index) => (
					<Tab
						label={`${experience.position} (${experience.organization})`}
						key={index}
						index={index}
					/>
				))}
			</Tabs>
			{experiences.map((experience, index) => (
				<Panel index={index}>
					<ContentBox
						title={`${experience.position}, ${experience.organization},
              ${experience.location}`}
					>
						<Typography>
							<i>{experience.duration}</i>
						</Typography>
						{experience.technologies && (
							<Typography variant="h3">
								<i>
									<b>Technologies:</b> {experience.technologies.join(", ")}
								</i>
							</Typography>
						)}
						<Description>{experience.description}</Description>
					</ContentBox>
				</Panel>
			))}
		</MuiTabs>
	);
}
