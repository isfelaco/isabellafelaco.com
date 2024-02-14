import styled from "styled-components";

export const Row = styled.div<{ gap?: number }>`
  display: flex;
  flex-direction: row;
  gap: ${({ gap }) => gap + "px"};
`;

export const Column = styled.div<{ gap?: number }>`
  display: flex;
  flex-direction: column;
  gap: ${({ gap }) => gap + "px"};
`;
