import styled from 'styled-components';

export const Container = styled.button`
  border: ${({ theme }) => `1px solid ${theme.semantic.success}`};
  background: none;
  outline: 0;
  padding: 2px 4px;
`;
