import styled from 'styled-components';
import metrics from '../../../../styles/metrics';

export const Container = styled.div`
  width: 100%;
  height: 55px;
  min-height: 55px;
  background-color: ${({ theme }) => theme.semantic.light};
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
`;

export const RightContainer = styled.div`
  @media only screen and (min-width: ${metrics.mobileS}) {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
export const CenterContainer = styled.div`
  @media only screen and (min-width: ${metrics.mobileS}) {
    display: flex;
  }
  @media only screen and (min-width: ${metrics.laptop}) {
    display: none;
  }
`;
export const RightLogo = styled.img`
  object-fit: contain;
  @media only screen and (min-width: ${metrics.mobileS}) {
    display: none;
  }
  @media only screen and (min-width: ${metrics.laptop}) {
    display: block;
    width: 120px;
    height: 50px;
  }
`;

export const MidiLogo = styled.img`
  object-fit: contain;
  @media only screen and (min-width: ${metrics.mobileS}) {
    width: 100px;
    height: 55px;
  }
  @media only screen and (min-width: ${metrics.laptop}) {
    display: none;
  }
`;
export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
