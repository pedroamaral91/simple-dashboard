import React, { useCallback, useMemo, useState, useEffect } from 'react';
import { uuid } from 'uuidv4';
import { AddButton, ContainerNested, Header, Label } from '../styles';

import AddressItem from './address-item';
import Icon from '../../icons';

export interface Address {
  id: string;
  cep: string;
  logradouro: string;
  numero: string;
  complemento: string;
  uf: string;
}

interface NestedAddressesProps {
  label?: string;
  values: Address[];
  onChange(addresses: Address[]): void;
}

const NestedAddresses: React.FC<NestedAddressesProps> = ({
  label,
  values,
  onChange,
}) => {
  const [addresses, setAddresss] = useState<Address[]>(values);

  const handleChangeAddresss = useCallback(
    (e, id) => {
      const currentAddresss = addresses.map((address: Address) => {
        if (address.id === id) {
          return { ...address, [e.target.name]: e.target.value };
        }
        return address;
      });
      setAddresss(currentAddresss);
    },
    [addresses],
  );

  const handleAddAddress = useCallback(() => {
    const newAddress = {
      id: uuid(),
      cep: '',
      complemento: '',
      numero: '',
      logradouro: '',
      uf: '',
    };
    onChange([...addresses, newAddress]);
  }, [addresses, onChange]);

  const handleDeleteAddresss = useCallback(
    id => {
      const currentAddresss = addresses.filter(address => address.id !== id);
      onChange(currentAddresss);
    },
    [addresses, onChange],
  );

  const handleBlur = useCallback(() => {
    onChange(addresses);
  }, [addresses, onChange]);

  const renderAddresss = useMemo(() => {
    const currentAddresss = addresses.map(address => (
      <AddressItem
        key={address.id}
        cep={address.cep}
        logradouro={address.logradouro}
        uf={address.uf}
        complemento={address.complemento}
        numero={address.numero}
        onChange={e => handleChangeAddresss(e, address.id)}
        handleDelete={() => handleDeleteAddresss(address.id)}
        onBlur={handleBlur}
      />
    ));
    return currentAddresss;
  }, [addresses, handleChangeAddresss, handleBlur, handleDeleteAddresss]);

  useEffect(() => {
    setAddresss(values);
  }, [values]);

  return (
    <ContainerNested>
      <Header>
        <Label>{label && label}</Label>
        <AddButton type="button" onClick={handleAddAddress}>
          <Icon icon="FaPlus" />
        </AddButton>
      </Header>
      {renderAddresss}
    </ContainerNested>
  );
};

export default React.memo(NestedAddresses);
