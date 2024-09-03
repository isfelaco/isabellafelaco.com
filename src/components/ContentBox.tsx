import { ReactNode } from "react";
import styled from "styled-components";
import Col from "react-bootstrap/Col";

const StyledCol = styled(Col)`
  border: 1px solid white;
  border-radius: 5px;
  background: rgb(255, 255, 255, 0.3);

  display: flex;
  flex-direction: column;
  gap: 25px;
`;

interface StyledBoxProps {
  title: string;
  children: ReactNode | ReactNode[];
}

export default function ContentBox({ title, children }: StyledBoxProps) {
  return (
    <StyledCol className="p-5">
      <h2>{title}</h2>
      {children}
    </StyledCol>
  );
}
