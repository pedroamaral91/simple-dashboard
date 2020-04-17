import React, { useState, useCallback } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';

import { ButtonBadge } from '@components/buttons';

import { Container } from './styles';
import { emailDefaultValue } from '../state/default-values';
import ModalFormEmail from './modal-form-email/index';

const FormEmail: React.FC = () => {
  const [isOpened, setIsOpened] = useState(false);
  const { register } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    name: 'emails',
  });

  const handleClick = useCallback(() => {
    setIsOpened(currState => !currState);
  }, []);

  const handleAppend = useCallback(() => {
    if (fields.length === 5) return;
    append(emailDefaultValue);
  }, [append, fields.length]);

  const handleRemove = useCallback(
    (index: number) => {
      if (fields.length === 1) return;
      remove(index);
    },
    [remove, fields.length],
  );

  return (
    <Container>
      <ButtonBadge label="Email" onClick={handleClick} badgeContent={0} />
      <ModalFormEmail
        register={register}
        isOpened={isOpened}
        fields={fields}
        handleAppend={handleAppend}
        handleRemove={handleRemove}
        closeModal={handleClick}
      />
    </Container>
  );
};

export default FormEmail;
