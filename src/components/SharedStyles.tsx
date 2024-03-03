import styled from "styled-components";

export const Row = styled.div<{ gap?: number }>`
  display: flex;
  flex-direction: row;
  gap: ${({ gap }) => gap + "px"};
  max-width: 100%;
  flex-wrap: nowrap;

  & > * {
    flex: 1 0 200px;
  }

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 1024px) {
    flex-wrap: wrap;
  }
`;

export const Column = styled.div<{ gap?: number }>`
  display: flex;
  flex-direction: column;
  gap: ${({ gap }) => gap + "px"};
`;
