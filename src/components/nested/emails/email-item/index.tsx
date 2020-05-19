import React from 'react';
import { InputText } from '../../../inputs';
import Icon from '../../../icons';
import { ItemContainer, DeleteButton } from '../../styles';

interface EmailItemProps {
  value: string;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  handleDelete(id): void;
  onBlur(): void;
}

const EmailItem: React.FC<EmailItemProps> = ({
  onChange,
  value,
  handleDelete,
  onBlur,
}) => {
  return (
    <ItemContainer>
      <InputText
        onBlur={onBlur}
        name="email"
        onChange={onChange}
        value={value}
        width="100%"
        placeholder="Email"
      />
      <DeleteButton type="button" onClick={handleDelete}>
        <Icon icon="FaTrash" />
      </DeleteButton>
    </ItemContainer>
  );
};

export default React.memo(EmailItem);
