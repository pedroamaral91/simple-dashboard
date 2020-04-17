import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid red;
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.span`
  font-size: 1.5em;
  font-weight: 600;
  color: ${({ theme }) => theme.text.colors.dark};
  text-align: center;
`;
