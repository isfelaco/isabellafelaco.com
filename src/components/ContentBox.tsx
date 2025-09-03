import { Typography, Paper, alpha, SxProps } from "@mui/material";
import React from "react";

interface StyledBoxProps {
	title: string;
	children: React.ReactNode | React.ReactNode[];
	sx?: SxProps;
}

export default function ContentBox({ title, children, sx }: StyledBoxProps) {
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
				gap: 2,
				width: { sm: "100%", md: "43%" },
				...sx,
			}}
		>
			<Typography variant="h2" sx={{ textWrap: "wrap" }}>
				{title}
			</Typography>
			{children}
		</Paper>
	);
}
