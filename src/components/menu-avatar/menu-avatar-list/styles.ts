import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const Title = styled.span`
  background-color: ${({ theme }) => theme.saura.primary};
  color: ${({ theme }) => darken(0.1, theme.semantic.light)};
  text-align: center;
  width: 100%;
  font-size: 0.9em;
  padding: 5px;
`;
