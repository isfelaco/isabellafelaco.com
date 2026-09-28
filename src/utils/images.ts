import { styled } from "@mui/material";

export const Image = styled("img")`
	height: 200px;
	width: auto;
`;

export const getImageUrl = (imageUrl: string) => {
	try {
		return require(`../images/${imageUrl}`);
	} catch (e) {
		console.error(`Image ${imageUrl} not found`);
		return null;
	}
};