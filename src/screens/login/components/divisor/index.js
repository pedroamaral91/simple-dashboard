import styled from 'styled-components';

const Divisor = styled.div`
  width: 98%;
  height: 1px;
  background-color: ${({ theme }) => theme.semantic.secondary};
  opacity: 0.3;
  margin: 10px 0;
`;

export default Divisor;
