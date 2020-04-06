import styled from 'styled-components';
import metrics from '../../../styles/metrics';

export const FormContainer = styled.form`
  @media only screen and (min-width: ${metrics.mobileS}) {
    width: 95%;
    display: flex;
    flex-direction: column;
  }
  @media only screen and (min-width: ${metrics.mobileM}) {
    width: 90%;
  }
  @media only screen and (min-width: ${metrics.tablet}) {
    width: 80%;
  }
`;

export const WrapperInput = styled.div`
  @media only screen and (min-width: ${metrics.mobileS}) {
    margin: 0;
  }

  @media only screen and (min-width: ${metrics.mobileM}) {
    margin: 10px 0;
  }
`;

export const WrapperButton = styled.div`
  width: 50%;
  height: 50px;
  align-self: center;
  padding: 10px;
`;
