import { Box } from "@mui/material";

export default function Card({ children }: { children: React.ReactNode }) {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "row",
				gap: 2,
				overflowX: "auto",
			}}
		>
			{children}
		</Box>
	);
}
