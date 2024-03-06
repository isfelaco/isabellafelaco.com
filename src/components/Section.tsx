import React, { ReactNode } from "react";
import { Button, ButtonRow } from "./Buttons";
import styled from "styled-components";
import { Column } from "./SharedStyles";
import { pages } from "../App";

type Props = {
  title: string;
  children?: ReactNode | ReactNode[];
};

const Subpage = styled(Column)`
  margin: 25px;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  animation: fadeIn 1s;
`;

export const Header = styled.div`
  background: rgb(255, 255, 255, 0.3);
  border: 1px solid white;
  border-radius: 5px;

  height: fit-content;
  padding: 10px;
  align-items: center;
  display: flex;

  & > * {
    flex: 1 0 25%;
  }
  p {
    flex-basis: 50%;
  }

  @media screen and (max-width: 1024px) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 446px) {
    p {
      word-break: break-all;
    }
  }
`;

const PageTitle = styled.p`
  color: #aa4586;
  font-size: 50px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 3px;
  margin: 0;
  line-height: 100%;
  letter-spacing: 10px;

  @keyframes letterSpace {
    0% {
      letter-spacing: 0px;
    }
    100% {
      letter-spacing: 10px;
    }
  }
  animation: letterSpace 1s;
`;

export function Section(props: Props) {
  const { title, children } = props;
  var backIndex: number = 0;
  var forwardIndex: number = 0;
  Object.keys(pages).find((route, i) => {
    const hashRoute = `#${route}`;
    if (hashRoute === window.location.hash) {
      backIndex = i - 1;
      forwardIndex = i + 1;
    }
  });
  const back = backIndex > 0;
  const next = forwardIndex < Object.keys(pages).length;
  const lastPage = Object.keys(pages)[backIndex];
  const nextPage = Object.keys(pages)[forwardIndex];

  return (
    <Subpage gap={25}>
      <Header>
        <ButtonRow align="left">
          <Button color="white" to="/" text="Home" />
          <>{back && <Button color="white" to={lastPage} text="Back" />}</>
        </ButtonRow>
        <PageTitle className="tooltip">{title}</PageTitle>
        {next ? (
          <Button color="white" to={nextPage} text="Next" float="right" />
        ) : (
          <div></div>
        )}
      </Header>
      {children}
    </Subpage>
  );
}
