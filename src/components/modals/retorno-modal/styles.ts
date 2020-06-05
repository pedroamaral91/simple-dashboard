import styled from 'styled-components';

export const Container = styled.div`
  width: 500px;
  height: 350px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.semantic.light};
  padding: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const WrapperButton = styled.div`
  width: 100%;
  height: 70px;
  align-self: center;
  padding: 10px;
`;
