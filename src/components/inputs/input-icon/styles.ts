import styled from 'styled-components';

/* Interfaces */
interface InputProps {
  error: string;
}

interface WrapperInputProps {
  focused: boolean;
  error: string;
}

/* Components */

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  display: inline-block;
  color: ${props => props.theme.text.colors.dark};
`;

export const WrapperInput = styled.div<WrapperInputProps>`
  display: flex;
  width: 100%;
  position: relative;
  padding-left: 15px;

  justify-content: left;
  align-items: center;

  border: ${props =>
    props.error
      ? `1px solid ${props.theme.semantic.danger}`
      : `1px solid ${props.theme.semantic.primary}`};
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  box-shadow: ${props =>
    props.focused
      ? props.error
        ? props.theme.focus.danger
        : props.theme.focus.primary
      : 'none'};

  border: ${props =>
    props.error
      ? `1px solid ${props.theme.semantic.danger}}`
      : `1px solid ${props.theme.semantic.primary}}`};
`;
/* Icon input settings */
export const IconWrapper = styled.div`
  color: ${({ theme }) => theme.semantic.secondary};
  position: absolute;
  left: 9px;
`;

export const Input = styled.input<InputProps>`
  display: block;

  padding: 0.475rem 0.9rem;
  padding-right: calc(1.5rem + 0.75rem);

  /* background styles */
  background-color: ${props => props.theme.semantic.light};
  background-clip: padding-box;

  /* font styles */
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: ${props => props.theme.semantic.dark};

  border: none;

  &:focus {
    outline: 0;
  }

  &::placeholder {
    opacity: 1;
    color: ${props => props.theme.text.colors.muted};*
  }
`;

export const InvalidFeedback = styled.span`
  width: 100%;
  font-size: 80%;
  color: ${({ theme }) => theme.text.colors.danger};
  text-align: right;
`;
