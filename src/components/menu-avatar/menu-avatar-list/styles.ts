import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const Title = styled.span`
  background-color: ${({ theme }) => theme.semantic.secondary};
  color: ${({ theme }) => darken(0.4, theme.semantic.secondary)};
  text-align: center;
  width: 100%;
  font-size: 0.8em;
  padding: 5px;
`;
