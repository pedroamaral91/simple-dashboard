import styled from 'styled-components';
import metrics from '../../../../styles/metrics';

interface ContainerProps {
  isOpen: boolean;
}

export const Container = styled.div<ContainerProps>`
  @media only screen and (min-width: ${metrics.mobileS}) {
    position: absolute;
    display: flex;
    justify-content: space-between;
    width: ${({ isOpen }) => (isOpen ? '180px' : 0)};
    height: 100vh;
    transition: width 0.2s ease;
  }
  @media only screen and (min-width: ${metrics.tablet}) {
    position: relative;
  }
`;

export const Opacity = styled.div<ContainerProps>`
  @media only screen and (min-width: ${metrics.mobileS}) {
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100vw;
    z-index: -1;
    background-color: rgba(0, 0, 0, 0.7);
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
    transition: opacity 0.2s ease;
  }
  @media only screen and (min-width: ${metrics.tablet}) {
    display: none;
  }
`;

export const MenuAside = styled.div`
  @media only screen and (min-width: ${metrics.mobileS}) {
    display: flex;
    background-color: ${({ theme }) => theme.semantic.dark};
    overflow: hidden;
    width: 100%;
  }
`;
