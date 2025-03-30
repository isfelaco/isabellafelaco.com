import Carousel from "react-bootstrap/Carousel";
import styled from "styled-components";

const StyledCarousel = styled(Carousel)`
	flex-grow: 1;
	display: flex;
	overflow: auto;
	padding-right: 150px;
	padding-left: 150px;

	.carousel-item {
		height: 100%;
		overflow: auto;
	}
`;

export default StyledCarousel;
