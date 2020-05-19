import React, { useCallback, useMemo, useState, useEffect } from 'react';
import { uuid } from 'uuidv4';
import { AddButton, ContainerNested, Header, Label } from '../styles';

import PhoneItem from './phone-item';
import Icon from '../../icons';

interface Phone {
  id: string;
  ddd: string;
  telefone: string;
}

interface NestedPhonesProps {
  label?: string;
  values: Phone[];
  onChange(phones: Phone[]): void;
}

const NestedPhones: React.FC<NestedPhonesProps> = ({
  label,
  values,
  onChange,
}) => {
  const [phones, setPhones] = useState<Phone[]>(values);

  const handleChangePhones = useCallback(
    (e, id) => {
      const currentPhones = phones.map((phone: Phone) => {
        if (phone.id === id) {
          return { ...phone, [e.target.name]: e.target.value };
        }
        return phone;
      });
      setPhones(currentPhones);
    },
    [phones],
  );

  const handleAddPhone = useCallback(() => {
    const newPhone = {
      id: uuid(),
      ddd: '',
      telefone: '',
    };
    onChange([...phones, newPhone]);
  }, [phones, onChange]);

  const handleDeletePhones = useCallback(
    id => {
      const currentPhones = phones.filter(phone => phone.id !== id);
      onChange(currentPhones);
    },
    [phones, onChange],
  );

  const handleBlur = useCallback(() => {
    onChange(phones);
  }, [phones, onChange]);

  const renderPhones = useMemo(() => {
    const currentPhones = phones.map(phone => (
      <PhoneItem
        key={phone.id}
        ddd={phone.ddd}
        telefone={phone.telefone}
        onChange={e => handleChangePhones(e, phone.id)}
        handleDelete={() => handleDeletePhones(phone.id)}
        onBlur={handleBlur}
      />
    ));
    return currentPhones;
  }, [phones, handleChangePhones, handleBlur, handleDeletePhones]);

  useEffect(() => {
    setPhones(values);
  }, [values]);

  return (
    <ContainerNested>
      <Header>
        <Label>{label && label}</Label>
        <AddButton type="button" onClick={handleAddPhone}>
          <Icon icon="FaPlus" />
        </AddButton>
      </Header>

      {renderPhones}
    </ContainerNested>
  );
};

export default React.memo(NestedPhones);
