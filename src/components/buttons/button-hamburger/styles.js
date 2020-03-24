import styled from 'styled-components';

export const Container = styled.button`
  width: 50px;
  background-color: ${({ theme, backgroundColor = theme.semantic.light }) =>
    backgroundColor};
  color: ${({ theme, color = theme.semantic.dark }) => color};
  outline: 0;
  border: 0;
  font-size: 1.7rem;
`;
