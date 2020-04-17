import styled from 'styled-components';
import { NavLink as NavLinkTemplate } from 'reactstrap';

export const Title = styled.span`
  font-size: 22px;
  font-weight: 600;
  color: ${({ theme }) => theme.semantic.dark};
  padding: 5px 15px;
`;

export const NavLink = styled(NavLinkTemplate)`
  display: grid !important;
  grid-template-columns: 1fr 0.3fr 0.3fr;
  column-gap: 5px;
  align-items: center;
`;
