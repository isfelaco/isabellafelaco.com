import { ReactNode } from "react";
import { styled } from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Header from "./Header";

const PageTitle = styled.h1`
  color: white;
  text-shadow: 2px 3px 0 #212529, 1px 3px 0 #212529, 1px 3px 0 #212529;
`;

interface SubpageProps {
  title?: string;
  children: ReactNode | ReactNode[];
}

export default function Subpage({ title, children }: SubpageProps) {
  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "25px",
      }}
    >
      <Header />
      <PageTitle>{title}</PageTitle>
      {children}
    </Container>
  );
}
