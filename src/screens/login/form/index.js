import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { InputIcon } from '../../../components/inputs';
import { ButtonLoader } from '../../../components/buttons';
import { authCreators, authSelectors } from '../../../store/state';

import { FormContainer, WrapperButton, WrapperInput } from './styles';

const { signInRequest } = authCreators;
const { getIsLoading } = authSelectors;
const Form = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeEmail = useCallback(e => {
    setEmail(e.target.value);
  });

  const handleChangePassword = useCallback(e => {
    setPassword(e.target.value);
  });

  const handleSubmit = useCallback(() => {
    dispatch(signInRequest(email, password));
  });

  return (
    <FormContainer>
      <WrapperInput>
        <InputIcon
          icon="FaUserAlt"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={handleChangeEmail}
        />
      </WrapperInput>
      <WrapperInput>
        <InputIcon
          icon="FaLock"
          placeholder="Digite sua senha"
          type="password"
          value={password}
          onChange={handleChangePassword}
        />
      </WrapperInput>
      <WrapperButton>
        <ButtonLoader
          isLoading={isLoading}
          label="Entrar"
          onClick={handleSubmit}
        />
      </WrapperButton>
    </FormContainer>
  );
};

export default Form;
