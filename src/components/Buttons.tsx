import { ReactElement } from "react";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

const WhiteButton = styled.button<{ float?: string | undefined }>`
  background-color: rgb(255, 255, 255, 0.5);
  border: 0.25px solid white;
  border-radius: 5px;
  height: 50px;
  width: 100px;
  cursor: pointer;
  float: ${({ float }) => float};

  &:hover {
    border: 0.25px solid gray;
  }

  color: #aa4586;
  font-family: myFont;
  font-weight: bold;
  font-size: 20px;
  text-transform: uppercase;
`;

export const PinkButton = styled.button`
  border: 1px solid white;
  border-radius: 5px;
  padding: 5px 10px 5px 10px;
  color: white;
  background: #c46ea6;
  width: 200px;
  cursor: pointer;
  color: white;

  &:hover {
    border: 1px solid gray;
  }
`;

type ButtonProps = {
  color: string;
  to: string;
  text: string;
  float?: string;
};

export function Button({ color, to, text, float }: ButtonProps) {
  return (
    <div>
      <Link to={to}>
        {color === "white" ? (
          <WhiteButton float={float}>{text}</WhiteButton>
        ) : (
          <PinkButton>{text}</PinkButton>
        )}
      </Link>
    </div>
  );
}

const ButtonContainer = styled.div<{ align?: string | undefined }>`
  display: flex;
  gap: 20px;
  justify-content: ${({ align }) => align};
`;

type ButtonRowProps = {
  children: ReactElement[];
  align?: string;
};

export function ButtonRow({ children, align }: ButtonRowProps) {
  return <ButtonContainer align={align}>{children}</ButtonContainer>;
}
