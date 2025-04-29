import courses from "../data/courses.json";
import ContentBox from "../components/ContentBox";
import { List, ListItem, Button, ListItemText } from "@mui/material";
import Stack from "../components/Stack";

export default function Coursework() {
	return (
		<Stack>
			{courses.map((item: any, index: number) => (
				<ContentBox key={index} title={item.title}>
					<List>
						{item.description.map((desc: any, idx: number) => (
							<ListItem key={idx}>
								<ListItemText>{desc}</ListItemText>
							</ListItem>
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
	);
}
