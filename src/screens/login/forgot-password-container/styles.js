import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Anchor = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.text.colors.primary};
`;
