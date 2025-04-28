import { Box } from "@mui/material";
interface SubpageProps {
	children: React.ReactNode | React.ReactNode[];
}

export default function Subpage({ children }: SubpageProps) {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				flexGrow: 1,
				p: { xs: 0, sm: 5 },
				flexWrap: "wrap",
			}}
		>
			{children}
		</Box>
	);
}
