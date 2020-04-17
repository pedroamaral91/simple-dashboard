import React, { useState, useCallback } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';

import { ButtonBadge } from '@components/buttons';

import { Container } from './styles';
import { phonesDefaultValue } from '../state/default-values';
import ModalFormPhones from './modal-form-phones';

const FormPhones: React.FC = () => {
  const [isOpened, setIsOpened] = useState(false);
  const { register } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    name: 'phones',
  });

  const handleClick = useCallback(() => {
    setIsOpened(currState => !currState);
  }, []);

  const handleAppend = useCallback(() => {
    if (fields.length === 5) return;
    append(phonesDefaultValue);
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
      <ButtonBadge label="Telefones" onClick={handleClick} badgeContent={0} />
      <ModalFormPhones
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

export default FormPhones;
