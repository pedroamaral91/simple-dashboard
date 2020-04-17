import styled from 'styled-components';
import { metrics } from '@styles/index';

type ContainerProps = {
  isOpened: boolean;
};

export const Container = styled.div<ContainerProps>`
  display: ${({ isOpened }) => (isOpened ? 'block' : 'none')};
`;

export const ModalContent = styled.div`
  width: 85vw;
  max-width: 1000px;
  height: 400px;
  overflow: auto;
`;

export const Content = styled.div`
  display: grid;
  align-items: flex-start;
  grid-template-columns: 1fr 0.05fr 0.05fr;
  column-gap: 5px;
  padding: 10px;
  & > button {
    margin-top: 0.365rem;
  }
`;

export const FormContent = styled.div`
  @media only screen and (min-width: ${metrics.mobileS}) {
    display: flex;
    padding: 20px 15px;
    flex-direction: column;
  }
  @media only screen and (min-width: ${metrics.tablet}) {
    display: grid !important;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  @media only screen and (min-width: ${metrics.laptop}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
