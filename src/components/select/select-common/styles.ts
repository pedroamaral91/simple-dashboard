import styled from 'styled-components';

/* Interfaces */
interface InputProps {
  error: string;
}

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

export const WrapperSelect = styled.div`
  position: relative;
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 25%;
  left: 90%;

  color: ${({ theme }) => theme.semantic.secondary};
  &:hover {
    transform: scale(1.2);
  }
`;

export const Input = styled.input<InputProps>`
  display: block;

  padding: 0.375rem 0.75rem;
  padding-right: calc(1.5em + 0.75rem);

  /* background styles */
  background-color: ${props => props.theme.semantic.light};
  background-clip: padding-box;

  /* font styles */
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: ${props => props.theme.text.colors.dark};

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
`;
export const List = styled.div`
  width: 100%;
  background: ${props => props.theme.semantic.light};
  z-index: 99;
  position: absolute;
  min-height: 40px;
  overflow: auto;
  margin-top: 5px;
  border: ${props => `1px solid ${props.theme.semantic.secondary}}}`};
  border-radius: 4px;
  padding: 5px 0;
`;

export const Option = styled.div`
  padding: 4px;
  cursor: pointer;
  color: ${props => props.theme.text.colors.dark};
  &:hover {
    color: ${props => props.theme.text.colors.light};
    background: ${props => props.theme.semantic.primary};
  }
`;

export const InvalidFeedback = styled.span`
  width: 100%;
  font-size: 80%;
  color: ${({ theme }) => theme.text.colors.danger};
  text-align: right;
`;
