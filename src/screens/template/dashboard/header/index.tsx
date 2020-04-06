import React, { useCallback, useContext } from 'react';

import { ButtonHamburger } from '../../../../components/buttons';
import { TemplateContext } from '../context';

import {
  Container,
  RightContainer,
  CenterContainer,
  RightLogo,
  MidiLogo,
  LeftContainer,
} from './styles';
import ButtonAvatarWired from './button-avatar';

import sauralogo from '../../../../assets/logos/logo_x.png';

const Header = () => {
  const { state, dispatch } = useContext(TemplateContext);

  const handleClick = useCallback(() => {
    if (!state.showAside) {
      dispatch({ type: 'SHOW_ASIDE' });
      return;
    }
    dispatch({ type: 'HIDE_ASIDE' });
  }, [state.showAside, dispatch]);

  return (
    <Container>
      <LeftContainer>
        <RightLogo src={sauralogo} />
        <ButtonHamburger onClick={handleClick} />
      </LeftContainer>
      <CenterContainer>
        <MidiLogo src={sauralogo} />
      </CenterContainer>
      <RightContainer>
        <ButtonAvatarWired />
      </RightContainer>
    </Container>
  );
};

export default Header;
