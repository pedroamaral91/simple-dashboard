import styled from 'styled-components';
import icon from '../../../assets/error.svg';

/* Interfaces */
interface InputProps {
  error: string;
}

/* Components */

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 5px;
`;

export const Label = styled.label`
  display: inline-block;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.text.colors.dark};
`;

export const Input = styled.input<InputProps>`
  display: block;

  padding: 0.375rem 0.75rem;
  padding-right: calc(1.5em + 0.75rem);

  /* background styles */
  background-color: ${props => props.theme.semantic.light};
  background-clip: padding-box;

  background-image: ${props => (props.error ? `url(${icon})` : 'none')};
  background-repeat: no-repeat;
  background-position: right calc(0.375em + 0.1875rem) center;
  background-size: calc(0.75em + 0.375rem);
  background-clip: padding-box;

  /* font styles */
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: ${props => props.theme.semantic.dark};

  border: ${props =>
    props.error
      ? `1px solid ${props.theme.semantic.danger}`
      : `1px solid ${props.theme.semantic.secondary}`};
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:focus {
    outline: 0;
    box-shadow: ${props =>
      props.error ? props.theme.focus.danger : props.theme.focus.primary};
    border: ${props =>
      props.error
        ? `1px solid ${props.theme.semantic.danger}}`
        : `1px solid ${props.theme.semantic.primary}}`};
  }

  &::placeholder {
    opacity: 1;
  }

  &:disabled {
    background: #ccc;
  }
`;

export const InvalidFeedback = styled.span`
  width: 100%;
  font-size: 80%;
  color: ${({ theme }) => theme.text.colors.danger};
  text-align: right;
`;
