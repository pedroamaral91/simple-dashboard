import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-height: 50vh;
  overflow: auto;
`;

export const ErrorList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

export const ErrorItem = styled.li`
  display: flex;
  border-bottom-color: ${({ theme }) => lighten(0.4, theme.semantic.secondary)};
  border-bottom-width: 1px;
  border-bottom-style: solid;
  padding: 10px;
  width: 95%;
`;

export const TypeError = styled.span`
  font-weight: bold;
  text-transform: capitalize;
`;

export const ErrorMessage = styled.span``;
