import styled from 'styled-components';
import { lighten } from 'polished';
import DatePicker from 'react-datepicker';

import { metrics } from '../../../styles';

export const Container = styled.div`
  @media only screen and (min-width: ${metrics.mobileS}) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

export const Label = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.text.colors.dark};
`;

export const Input = styled(DatePicker)`
  border: ${({ theme }) =>
    `1px solid ${lighten(0.3, theme.text.colors.muted)}`};
  border-radius: 4px;
  width: 100%;
  padding: 0 7px;
  height: 38px;
`;

export const LabelError = styled.span`
  font-size: 14px;
  padding-left: 5px;
  color: ${({ theme }) => theme.text.colors.danger};
`;
