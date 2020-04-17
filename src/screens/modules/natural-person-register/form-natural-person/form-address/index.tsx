import React, { useState, useCallback } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';

import { ButtonBadge } from '@components/buttons';

import ModalFormAddress from './modal-form-address';
import { Container } from './styles';
import { addressessDefaultValue } from '../state/default-values';

const FormAddress: React.FC = () => {
  const [isOpened, setIsOpened] = useState(false);
  const { register } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    name: 'addresses',
  });

  const handleClick = useCallback(() => {
    setIsOpened(currState => !currState);
  }, []);

  const handleAppend = useCallback(() => {
    if (fields.length === 5) return;
    append(addressessDefaultValue);
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
      <ButtonBadge label="Endereços" onClick={handleClick} badgeContent={0} />
      <ModalFormAddress
        fields={fields}
        register={register}
        closeModal={handleClick}
        isOpened={isOpened}
        handleAppend={handleAppend}
        handleRemove={handleRemove}
      />
    </Container>
  );
};

export default FormAddress;
