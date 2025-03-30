import { ReactNode } from "react";
import Header from "./Header";
import styled from "styled-components";
interface SubpageProps {
	children: ReactNode | ReactNode[];
}

const ResponsiveDiv = styled.div`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	padding-left: 100px;
	padding-right: 100px;
	overflow: hidden;
	gap: 25px;
	height: 100%;

	/* Media query for tablets and smaller screens */
	@media (max-width: 768px) {
		padding-left: 20px;
		padding-right: 20px;
		gap: 15px;
	}

	/* Media query for small mobile screens */
	@media (max-width: 480px) {
		padding-left: 10px;
		padding-right: 10px;
		gap: 10px;
	}
`;

export default function Subpage({ children }: SubpageProps) {
	return (
		<ResponsiveDiv>
			<Header />
			{children}
		</ResponsiveDiv>
	);
}
