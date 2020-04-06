import styled from 'styled-components';
import { lighten } from 'polished';

interface ContainerProps {
  isActive: boolean;
  lastClick: boolean;
}

export const Container = styled.li<ContainerProps>`
  padding: 10px;
  cursor: pointer;
  background-color: ${({ isActive, theme, lastClick }) =>
    lastClick
      ? theme.semantic.primary
      : isActive
      ? lighten(0.1, theme.semantic.dark)
      : ''};
`;

export const IconContainer = styled.span`
  padding: 0 5px;
  color: ${({ theme }) => theme.semantic.light};
`;
export const Link = styled.span`
  text-decoration: none;
  color: ${({ theme }) => theme.semantic.light};
  padding: 0 5px;
`;

export const Text = styled.span.attrs({
  as: Link,
})``;
