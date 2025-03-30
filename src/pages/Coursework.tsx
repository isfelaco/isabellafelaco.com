import courses from "../data/courses.json";
import ListGroup from "react-bootstrap/ListGroup";
import ContentBox from "../components/ContentBox";
import Subpage from "../components/Subpage";
import StyledButton from "../components/Button";

export default function Coursework() {
	return (
		<Subpage>
			<div
				style={{
					display: "flex",
					gap: "25px",
					flexWrap: "wrap",
					overflow: "auto",
				}}
			>
				{courses.map((item: any, index: number) => (
					<ContentBox key={index} title={item.title}>
						<ListGroup>
							{item.description.map((desc: any, idx: number) => (
								<ListGroup.Item key={idx}>{desc}</ListGroup.Item>
							))}
						</ListGroup>
						{item.link && (
							<StyledButton href={item.link}>Link to Repository</StyledButton>
						)}
					</ContentBox>
				))}
			</div>
		</Subpage>
	);
}
