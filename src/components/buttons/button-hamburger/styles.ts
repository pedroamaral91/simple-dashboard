import styled from 'styled-components';

interface ContainerProps {
  backgroundColor?: string;
  color?: string;
}

export const Container = styled.button<ContainerProps>`
  width: 50px;
  background-color: ${({ theme, backgroundColor = theme.semantic.light }) =>
    backgroundColor};
  color: ${({ theme, color = theme.semantic.dark }) => color};
  outline: 0;
  border: 0;
  font-size: 1.7rem;
`;
