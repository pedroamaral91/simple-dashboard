import styled from 'styled-components';

interface ContainerProps {
  type: string;
}

export const Container = styled.button.attrs(({ type }: ContainerProps) => ({
  type,
}))`
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.semantic.light};
  background-color: ${({ theme }) => theme.semantic.primary};
  outline: 0;
  border: 0;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.text.hover.primary};
    transition: background-color 0.5s ease;
  }
  &:active,
  &:focus {
    outline: 0;
  }
`;
