import styled from 'styled-components';
import { darken } from 'polished';

type IconContainerProps = {
  isOpened: boolean;
};

export const Container = styled.div`
  background-color: ${({ theme }) => darken(0.1, theme.semantic.light)};
  width: 100%;

  &:hover {
    background-color: ${({ theme }) => darken(0.2, theme.semantic.light)};
    transition: background 0.3s ease;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  height: 40px;
`;

export const Title = styled.span`
  font-size: 16px;
  color: ${({ theme }) => theme.text.colors.body};
  font-weight: 600;
`;

export const IconContainer = styled.div<IconContainerProps>`
  display: flex;
  align-items: center;
  height: fit-content;
  transform: ${({ isOpened }) => (isOpened ? 'rotate(180deg)' : 'rotate(0)')};
  transition: transform 0.3s ease;
`;

type ContentProps = {
  isOpened: boolean;
  maxHeight: string;
};

export const Content = styled.div<ContentProps>`
  max-height: ${({ isOpened, maxHeight }) => (isOpened ? maxHeight : 0)};
  background-color: ${({ theme }) => theme.semantic.light};
  transition: max-height 0.3s ease;
  overflow: auto;
  border-radius: 4px;
  border: ${({ theme }) => `1px solid ${theme.semantic.light}`};
  box-shadow: 0px 2px 11px rgba(0, 0, 0, 0.25);
  border-top: 0;
`;
