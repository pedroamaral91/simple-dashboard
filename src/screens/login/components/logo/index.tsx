import styled from 'styled-components';
import logoImage from '../../../../assets/logos/logo_x_saura.png';

const Logo = styled.div`
  background-image: url(${logoImage});
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  width: 100%;
  height: 50px;
`;

export default Logo;
