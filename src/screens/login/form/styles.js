import styled from 'styled-components';
import metrics from '../../../styles/metrics';

export const FormContainer = styled.form`
  @media ${metrics.mobileS} {
    width: 95%;
    display: flex;
    flex-direction: column;
  }
  @media ${metrics.mobileM} {
    width: 90%;
  }
  @media ${metrics.tablet} {
    width: 80%;
  }
`;

export const WrapperInput = styled.div`
  @media ${metrics.mobileS} {
    margin: 0;
  }

  @media ${metrics.mobileM} {
    margin: 10px 0;
  }
`;

export const WrapperButton = styled.div`
  width: 50%;
  height: 50px;
  align-self: center;
  padding: 10px;
`;
