import { ReactNode } from "react";
import styled from "styled-components";

const StyledCol = styled.div`
	border: 1px solid white;
	border-radius: 5px;
	background: rgb(255, 255, 255, 0.3);

	display: flex;
	flex-direction: column;
	gap: 25px;
	justify-content: center;
	padding: 25px;
	flex: 1 1 calc(50% - 25px);
	min-width: 250px;
`;

interface StyledBoxProps {
	title: string;
	children: ReactNode | ReactNode[];
}

export default function ContentBox({ title, children }: StyledBoxProps) {
	return (
		<StyledCol>
			<h2>{title}</h2>
			{children}
		</StyledCol>
	);
}
