import styled from 'styled-components';
import { Container as ButtonTemplate } from '../button/styles';

export const Container = styled.div`
  display: flex;
`;

export const Badge = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.semantic.warning};
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 5px;
`;

export const Button = styled(ButtonTemplate)`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
