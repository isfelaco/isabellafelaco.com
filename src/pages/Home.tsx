import styled from "styled-components";
import NavBar from "../components/NavBar";
import { Column } from "../components/SharedStyles";

export const Page = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100vh;
  gap: 25px;
  overflow-y: auto;
`;
export const ColumnLeft = styled(Column)`
  flex-basis: 60%;
  justify-content: center;
  min-height: 100px;
`;

const Title = styled.p`
  /* text */
  color: white;
  text-shadow: 2px 3px 0 #aa4586, 1px 3px 0 #aa4586, 1px 3px 0 #aa4586;
  font-size: 75px;
  font-style: italic;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 50px;
  }

  /* layout */
  background: rgb(255, 255, 255, 0.3);
  border-radius: 0px 50px 50px 0px;
  padding: 0px 100px 0px 100px;

  @keyframes growSpacing {
    0% {
      letter-spacing: 3px;
    }
    100% {
      letter-spacing: 10px;
    }
  }
  letter-spacing: 10px;
  animation: growSpacing 2s;
`;

export default function Home() {
  return (
    <Page>
      <ColumnLeft>
        <Title>Isabella Felaco</Title>
      </ColumnLeft>
      <NavBar />
    </Page>
  );
}
