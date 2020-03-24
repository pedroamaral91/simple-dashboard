import styled, { css } from 'styled-components';
import { lighten } from 'polished';
import { Link as LinkTemplate } from 'react-router-dom';

const span = css`
  text-decoration: none;
  color: ${({ theme }) => theme.semantic.light};
  padding: 0 5px;
`;

export const Container = styled.li`
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
