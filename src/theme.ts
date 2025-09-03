import { createTheme } from "@mui/material";

export const theme = createTheme({
	palette: {
		primary: {
			main: "#d4a373",
			light: "#faedcd",
			contrastText: "#ffffff",
		},
		secondary: {
			main: "#faedcd",
		},
		// background: { default: "#faedcd" },
		background: { default: "#1B263B" },
	},
	typography: {
		allVariants: {
			color: "#ffffff",
		},
		fontFamily: '"Rubik", "sans-serif"',
		h1: {
			fontSize: "2.5rem",
			fontWeight: "bold",
		},
		h2: {
			fontSize: "2rem",
		},
		h3: {
			fontSize: "1.5rem",
		},
		h4: {
			fontSize: "1.25rem",
		},
		h5: {
			fontSize: "1rem",
		},
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					"&:hover": {
						backgroundColor: "#ffffff",
						color: "#d4a373",
						borderColor: "#d4a373",
					},
				},
			},
		},
	},
});
