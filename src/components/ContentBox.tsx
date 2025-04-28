import { Typography, Paper, alpha } from "@mui/material";
import React from "react";

interface StyledBoxProps {
	title: string;
	children: React.ReactNode | React.ReactNode[];
}

export default function ContentBox({ title, children }: StyledBoxProps) {
	return (
		<Paper
			sx={{
				backgroundColor: alpha("#ffffff", 0.3),
				backgroundOpacity: 0.3,
				display: "flex",
				flexDirection: "column",
				flexGrow: 1,
				p: { xs: 2, sm: 5 },
				alignItems: "center",
				gap: 5,
				width: { sm: "100%", md: "48%" },
			}}
		>
			<Typography variant="h2" sx={{ textWrap: "wrap" }}>
				{title}
			</Typography>
			{children}
		</Paper>
	);
}
