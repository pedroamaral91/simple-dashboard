import styled from 'styled-components';
import { lighten } from 'polished';
import MaskedInput from 'react-text-mask';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 5px;
`;

export const Label = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.text.colors.dark};
`;

export const Input = styled(MaskedInput)`
  border: ${({ theme }) =>
    `1px solid ${lighten(0.3, theme.text.colors.muted)}`};
  border-radius: 4px;
  padding: 0.375rem 0.75rem;
`;

export const InvalidFeedback = styled.span`
  font-size: 14px;
  padding-left: 5px;
  color: ${({ theme }) => theme.text.colors.danger};
`;
