import "../index.css";
import { theme } from "../theme";
import { ThemeProvider } from "@mui/material";
import Index from ".";

export default function App() {
	return (
		<ThemeProvider theme={theme}>
			<Index />
		</ThemeProvider>
	);
}
