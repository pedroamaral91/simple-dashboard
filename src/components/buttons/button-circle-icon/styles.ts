import styled from 'styled-components';
import { darken } from 'polished';

type ContainerProps = {
  color: string;
};

export const Container = styled.button<ContainerProps>`
  border: 0;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  background-color: blue;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ color }) => color};
  color: ${({ theme }) => theme.semantic.light};
  &:hover {
    background-color: ${({ color }) => darken(0.1, color)};
    transition: background 0.2s ease;
  }
`;
