import Button from "react-bootstrap/Button";
import styled from "styled-components";

const StyledButton = styled(Button)`
	background-color: #d4a373;
	border-color: white;
	font-weight: bold;
	&:hover {
		background-color: white;
		border-color: #d4a373;
		color: #d4a373;
		font-weight: bold;
	}
` as typeof Button;

export default StyledButton;
