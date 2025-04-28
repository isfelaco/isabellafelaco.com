import styled from "styled-components";
import experiences from "../data/experiences.json";
import ContentBox from "../components/ContentBox";
import Subpage from "../components/Subpage";
import { Tab, Typography } from "@mui/material";
import { useState } from "react";
import { Tabs, Box } from "@mui/material";

const Description = styled.p`
	text-indent: 50px;
	text-align: left;
	line-height: 25px;
`;

export default function Experience() {
	const [currentTab, setCurrentTab] = useState(0);
	return (
		<Subpage>
			<Tabs
				value={currentTab}
				onChange={(_, newValue) => setCurrentTab(newValue)}
				variant="scrollable"
				scrollButtons="auto"
				sx={{ width: "100%" }}
			>
				{experiences.map((experience, index) => (
					<Tab
						label={`${experience.position} (${experience.organization})`}
						key={index}
						wrapped
					/>
				))}
			</Tabs>
			{experiences.map((experience, index) => (
				<Box
					key={index}
					role="tabpanel"
					sx={{
						display: currentTab === index ? "flex" : "none",
						flexGrow: 1,
					}}
				>
					<ContentBox
						title={`${experience.position}, ${experience.organization},
              ${experience.location}`}
					>
						<Typography>{experience.duration}</Typography>
						{experience.technologies && (
							<Typography variant="h3">
								<i>
									<b>Technologies:</b> {experience.technologies.join(", ")}
								</i>
							</Typography>
						)}
						<Description>{experience.description}</Description>
					</ContentBox>
				</Box>
			))}
		</Subpage>
	);
}
