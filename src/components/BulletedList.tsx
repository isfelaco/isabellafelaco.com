import { ListItemText, ListItem, List, Typography } from "@mui/material";

interface Bullet {
	title: string;
	description: string;
}

export default function BulletedList({ bullets }: { bullets: Bullet[] }) {
	return (
		<List sx={{ listStyleType: "disc", pl: 4, gap: 0 }}>
			{bullets.map((bullet) => (
				<ListItem sx={{ display: "list-item", p: 0 }}>
					<ListItemText>
						<Typography>
							<i>{bullet.title}:</i> {bullet.description}
						</Typography>
					</ListItemText>
				</ListItem>
			))}
		</List>
	);
}
