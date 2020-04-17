import styled from 'styled-components';
import { darken } from 'polished';

interface ContainerProps {
  type: string;
  bgColor?: string;
}

export const Container = styled.button.attrs(({ type }: ContainerProps) => ({
  type,
}))`
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.semantic.light};
  background-color: ${({ theme, bgColor = theme.semantic.primary }) => bgColor};
  outline: 0;
  border: 0;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme, bgColor = theme.semantic.primary }) =>
      darken(0.1, bgColor)};
    transition: background-color 0.5s ease;
  }
  &:active,
  &:focus {
    outline: 0;
  }
`;
