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
  @media ${metrics.mobileS} {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
export const CenterContainer = styled.div`
  @media ${metrics.mobileS} {
    display: flex;
  }
  @media ${metrics.laptop} {
    display: none;
  }
`;
export const RightLogo = styled.img`
  object-fit: contain;
  @media ${metrics.mobileS} {
    display: none;
  }
  @media ${metrics.laptop} {
    display: block;
    width: 120px;
    height: 50px;
  }
`;

export const MidiLogo = styled.img`
  object-fit: contain;
  @media ${metrics.mobileS} {
    width: 100px;
    height: 55px;
  }
  @media ${metrics.laptop} {
    display: none;
  }
`;
export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
