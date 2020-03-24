import styled from 'styled-components';

export const Container = styled.div`
  font-size: ${({ size }) => size}em;
  padding: 0 5px;
  border-radius: 4px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1.4;
`;
