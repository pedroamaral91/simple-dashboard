import styled from 'styled-components';
import { lighten } from 'polished';
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

export const Select = styled.select`
  border: ${({ theme }) =>
    `1px solid ${lighten(0.3, theme.text.colors.muted)}`};
  border-radius: 4px;
  height: 38px;
  padding: 0.375rem 0.75rem;
`;

export const LabelError = styled.span`
  font-size: 14px;
  padding-left: 5px;
  color: ${({ theme }) => theme.text.colors.danger};
`;

export const Option = styled.option``;
