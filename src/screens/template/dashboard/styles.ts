import styled from 'styled-components';
import { metrics } from '../../../styles';

interface WrapperProps {
  isOpen: boolean;
}

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  padding-top: 55px;
`;

export const Wrapper = styled.div<WrapperProps>`
  @media screen and (min-width: ${metrics.laptop}) {
    margin-left: ${({ isOpen }) => (isOpen ? '180px' : 0)};
    transition: margin 0.2s ease;
  }
`;
