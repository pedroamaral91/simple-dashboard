import React from 'react';
import Icon from '../../../icons';
import { InputMask } from '../../../inputs';
import { ItemContainer, DeleteButton } from '../../styles';

interface EmailItemProps {
  ddd: string;
  telefone: string;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  handleDelete(id): void;
  onBlur(): void;
}

const EmailItem: React.FC<EmailItemProps> = ({
  onChange,
  ddd,
  telefone,
  handleDelete,
  onBlur,
}) => {
  return (
    <ItemContainer>
      {/* <InputMask
        onBlur={onBlur}
        name="ddd"
        onChange={onChange}
        value={ddd}
        width="20%"
        mask="DDD"
        placeholder="DDD"
      />
      <InputMask
        onBlur={onBlur}
        name="telefone"
        onChange={onChange}
        value={telefone}
        width="70%"
        mask="Phone"
        placeholder="Telefone"
      />
      <DeleteButton type="button" onClick={handleDelete}>
        <Icon icon="FaTrash" />
      </DeleteButton> */}
    </ItemContainer>
  );
};

export default React.memo(EmailItem);
