import { Stack, StackProps, SxProps } from "@mui/material";
import React from "react";

export default function ResponsiveStack({
	children,
	sx,
	...props
}: {
	children: React.ReactNode;
} & StackProps) {
	return (
		<Stack
			useFlexGap
			direction="row"
			spacing={5}
			sx={{ flexWrap: "wrap", flexGrow: 1, ...sx }}
			{...props}
		>
			{children}
		</Stack>
	);
}
