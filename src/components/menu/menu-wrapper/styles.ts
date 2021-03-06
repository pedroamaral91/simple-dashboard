import styled from 'styled-components';

export const Container = styled.ul`
  padding: 10px;
  width: 100%;
  height: 100%;
  font-size: 14px;
  white-space: nowrap;
  border-top-right-radius: 15px;
  background: ${props => props.theme.saura.primary};
`;
