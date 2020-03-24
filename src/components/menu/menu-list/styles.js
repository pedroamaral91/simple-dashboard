import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.semantic.light};
  transition: background 0.2s ease;
  cursor: pointer;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

export const RightContainer = styled.div``;

export const IconContainer = styled.div`
  transform: ${({ isOpen }) => {
    if (isOpen) {
      return 'rotate(180deg)';
    }
    return 'rotate(90deg)';
  }};
  transition: transform 0.3s ease;
`;

export const Text = styled.span`
  padding: 0 5px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: ${({ isOpen }) => (isOpen ? '300px' : 0)};
  max-height: fit-content;
  transition: height 0.2s ease-in;
  background-color: ${({ theme }) => darken(0.1, theme.semantic.dark)};
`;
