import styled from 'styled-components';
import { metrics } from '../../styles';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.semantic.primary};
`;

export const Content = styled.div`
  @media only screen and (min-width: ${metrics.mobileS}) {
    width: 80%;
    height: 60%;
    z-index: 3;
  }
  @media only screen and (min-width: ${metrics.mobileM}) {
    height: 50%;
  }
  @media only screen and (min-width: ${metrics.tablet}) {
    width: 50%;
    height: 60%;
  }
  @media only screen and (min-width: ${metrics.laptop}) {
    width: 30%;
    height: 50%;
  }
  background-color: ${({ theme }) => theme.semantic.light};
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const YellowBackground = styled.div`
  position: absolute;
  top: 50%;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.semantic.warning};
  transform: skew(0deg, -10deg);
  margin-bottom: -200px;
  z-index: 0;
`;
