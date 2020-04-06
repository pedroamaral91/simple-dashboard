import styled from 'styled-components';

interface ContainerProps {
  size?: number;
  backgroundColor: string;
  color: string;
}

export const Container = styled.div<ContainerProps>`
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
