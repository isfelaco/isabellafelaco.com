import courses from "../data/courses.json";
import ContentBox from "../components/ContentBox";
import Subpage from "../components/Subpage";
import { List, ListItem, Stack, Button } from "@mui/material";

export default function Coursework() {
	return (
		<Subpage>
			<Stack
				useFlexGap
				direction="row"
				spacing={5}
				sx={{
					flexWrap: "wrap",
					flexGrow: 1,
				}}
			>
				{courses.map((item: any, index: number) => (
					<ContentBox key={index} title={item.title}>
						<List>
							{item.description.map((desc: any, idx: number) => (
								<ListItem key={idx}>{desc}</ListItem>
							))}
						</List>
						{item.link && (
							<Button variant="contained" href={item.link}>
								Link to Repository
							</Button>
						)}
					</ContentBox>
				))}
			</Stack>
		</Subpage>
	);
}
