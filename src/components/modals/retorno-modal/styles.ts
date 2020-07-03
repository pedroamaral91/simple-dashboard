import styled from 'styled-components';

export const Container = styled.div`
  width: 500px;
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
  padding: 10px;
  margin-top: 25px;
`;

export const CloseButton = styled.div`
  width: 100%;
  text-align: right;
  cursor: pointer;
`;
