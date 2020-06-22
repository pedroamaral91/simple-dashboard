import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.li`
  display: flex;
  border-bottom: ${({ theme }) =>
    `1px solid ${lighten(0.5, theme.text.colors.body)}`};
  background-color: white;
  width: 100%;
  padding: 9px;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  &:last-child {
    border-bottom: 0;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${lighten(0.1, '#23282c')};
  font-size: 0.9em;
`;

export const Text = styled.span`
  padding: 0 5px;
`;
