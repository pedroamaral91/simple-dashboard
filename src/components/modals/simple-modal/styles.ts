import styled from 'styled-components';

export const Container = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.semantic.light};
  padding: 20px;
  display: flex;
  /* align-items: center; */
  justify-content: center;
  flex-direction: column;
`;

export const Text = styled.span`
  color: ${({ theme }) => theme.text.colors.secondary};
`;
