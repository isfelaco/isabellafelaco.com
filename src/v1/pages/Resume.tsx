import { Box, Button, Divider, Link, Typography } from "@mui/material";
import ContentBox from "../components/ContentBox";
import BulletedList from "../components/BulletedList";

const bullets = [
	{
		title: "Languages",
		description: "TypeScript, JavaScript, C/C++, Python, PHP, SQL",
	},
	{
		title: "Web servers/Runtime environments",
		description: "Apache, Node.js",
	},
	{
		title: "Frameworks",
		description: "React.js, Django, Express, Bootstrap, Next.js",
	},
	{
		title: "Containers/clusters",
		description: "Docker, Kubernetes",
	},
	{
		title: "Testing/CI/CD",
		description: "Jest, GitHub Actions, PACT testing",
	},
	{
		title: "Version Control",
		description: "Git (Github, Bitbucket)",
	},
	{
		title: "IDEs",
		description:
			" Cursor, Visual Studio Code (VSCode), PyCharm, Eclipse, JetBrains",
	},
];

export default function Resume() {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				gap: 2,
			}}
		>
			<ContentBox title="ISABELLA S. FELACO" sx={{ width: "90%" }}>
				<Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
					<Typography>Cambridge, MA</Typography>
					<Divider
						orientation="vertical"
						sx={{ height: "20px", flexGrow: 1 }}
					/>
					<Link href="tel:5085071856">
						<Typography>(508) 507-1856</Typography>
					</Link>
					<Divider
						orientation="vertical"
						sx={{ height: "20px", flexGrow: 1 }}
					/>
					<Link href="mailto:isfelaco@gmail.com">
						<Typography>isfelaco@gmail.com</Typography>
					</Link>
				</Box>
				<Box sx={{ display: "flex", gap: 1 }}>
					<Link href="https://linkedin.com/in/isabella-felaco" target="_blank">
						<Typography>https://linkedin.com/in/isabella-felaco</Typography>
					</Link>
					<Divider
						orientation="vertical"
						sx={{ height: "20px", flexGrow: 1 }}
					/>
					<Link href="https://github.com/isfelaco" target="_blank">
						<Typography>https://github.com/isfelaco</Typography>
					</Link>
				</Box>
				<Divider sx={{ width: "100%" }} />
				<Box sx={{ width: "100%" }}>
					<Typography variant="h3">Education</Typography>
					<Box sx={{ display: "flex", justifyContent: "space-between" }}>
						<Typography>
							<b>University of Virginia</b>, School of Engineering,
							Charlottesville, VA
						</Typography>
						<Typography>Graduated May 2024</Typography>
					</Box>
					<Typography variant="body2">
						Bachelor of Science in Computer Science
					</Typography>
				</Box>
				<Divider sx={{ width: "100%" }} />
				<Box sx={{ width: "100%" }}>
					<Typography variant="h3">Skills</Typography>
					<BulletedList bullets={bullets} />
				</Box>
				<Divider sx={{ width: "100%" }} />
			</ContentBox>
			<Button variant="contained" href="/resume.pdf">
				Download Resume
			</Button>
		</Box>
	);
}
