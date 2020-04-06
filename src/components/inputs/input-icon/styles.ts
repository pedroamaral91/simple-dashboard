import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  padding: 5px;
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 25%;
  left: 0.8rem;
  color: ${({ theme }) => theme.semantic.secondary};
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  border: 0;
  outline: 0;
  border-radius: 4px;
  padding: 10px 0 10px 35px;
  font-size: 14px;
  color: ${({ theme }) => theme.semantic.secondary};
  &::placeholder {
    color: ${({ theme }) => theme.semantic.secondary};
  }
`;
