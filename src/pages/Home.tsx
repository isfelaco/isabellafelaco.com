import { styled } from "styled-components";
import Row from "react-bootstrap/Row";
import Column from "react-bootstrap/Col";
import Subpage from "../components/Subpage";
import Headshot from "../images/Headshot.png";

const Title = styled.h1`
	/* text */
	color: #d4a373;
	text-shadow: 2px 3px 0 white, 1px 3px 0 white, 1px 3px 0 white;
	font-size: 75px;
	font-style: italic;
	font-weight: bold;

	@media screen and (max-width: 768px) {
		font-size: 50px;
	}

	@media screen and (max-width: 576px) {
		font-size: 25px;
	}

	letter-spacing: 10px;
	animation: growSpacingLarge 2s;
`;

const Image = styled.img`
	max-height: 700px;
	width: auto;
	border-radius: 10px;
	box-shadow: 16px 20px 0 #d4a373, 14px 20px 0 #d4a373, 14px 20px 0 #d4a373;
`;

export default function Home() {
	return (
		<Subpage>
			<Row style={{ alignItems: "center" }}>
				<Column md={7}>
					<Title>Isabella Felaco</Title>
				</Column>
				<Column md={4}>
					<Image src={Headshot} alt="headshot" />
				</Column>
			</Row>
		</Subpage>
	);
}
