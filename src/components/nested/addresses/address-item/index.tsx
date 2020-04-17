import React from 'react';

import { InputMask, InputText } from '../../../inputs';
import { ItemContainer, DeleteButton } from '../../styles';

import Icon from '../../../icons';

interface AddrresItemProps {
  cep: string;
  complemento: string;
  numero: string;
  logradouro: string;
  uf: string;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  handleDelete(id): void;
  onBlur(): void;
}

const AddrresItem: React.FC<AddrresItemProps> = ({
  onChange,
  cep,
  complemento,
  numero,
  logradouro,
  uf,
  handleDelete,
  onBlur,
}) => {
  return (
    <>
      <ItemContainer>
        {/* <InputMask
          onBlur={onBlur}
          name="cep"
          onChange={onChange}
          value={cep}
          width="30%"
          mask="CEP"
          placeholder="CEP"
        />
        <InputText
          name="logradouro"
          onChange={() => {
            return true;
          }}
          value={logradouro}
          width="40%"
          placeholder="Logradouro/Bairro"
          disabled
        />
        <InputText
          name="uf"
          onChange={() => {
            return true;
          }}
          value={uf}
          width="30%"
          placeholder="Cidade/UF"
          disabled
        />
      </ItemContainer>
      <ItemContainer>
        <InputText
          onBlur={onBlur}
          name="complemento"
          onChange={onChange}
          value={complemento}
          width="40%"
          placeholder="Complemento"
        />
        <InputText
          onBlur={onBlur}
          name="numero"
          onChange={onChange}
          value={numero}
          placeholder="Número"
        />
        <DeleteButton type="button" onClick={handleDelete}>
          <Icon icon="FaTrash" />
        </DeleteButton> */}
      </ItemContainer>
    </>
  );
};

export default React.memo(AddrresItem);
