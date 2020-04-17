import styled from 'styled-components';

interface DivisorProps {
  width?: number;
}

const Divisor = styled.div<DivisorProps>`
  width: ${({ width = 98 }) => `${width}%`};
  height: 1px;
  background-color: ${({ theme }) => theme.semantic.secondary};
  opacity: 0.3;
  margin: 10px 0;
`;

export default Divisor;
