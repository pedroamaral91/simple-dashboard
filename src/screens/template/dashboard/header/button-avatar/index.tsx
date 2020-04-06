import React, { useCallback, useContext, useRef, useState } from 'react';

import { Container } from './styles';

import MenuAvatar from '../menu-avatar';
import { TemplateContext } from '../../context';
import ButtonAvatar from '../../../../../components/buttons/button-avatar';
import useOutsideClick from '../../../../../hooks/useOutsideClick';

const ButtonAvatarWired = () => {
  const wrapperRef = useRef(null);
  const { state, dispatch } = useContext(TemplateContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleOutsideClick = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleActive = useCallback(() => {
    if (state.showAside && window.innerWidth < 768) {
      dispatch({ type: 'HIDE_ASIDE' });
    }
    setIsOpen(currState => !currState);
  }, [dispatch, state]);

  useOutsideClick(wrapperRef, handleOutsideClick);

  return (
    <Container ref={wrapperRef}>
      <ButtonAvatar onClick={handleActive} />
      <MenuAvatar isOpen={isOpen} />
    </Container>
  );
};

export default ButtonAvatarWired;
