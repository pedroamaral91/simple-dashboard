import React from 'react';
import { InputText } from '../../../inputs';
import { EmailItemContainer, DeleteButton } from './styles';
import Icon from '../../../icons';

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
    <EmailItemContainer>
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
    </EmailItemContainer>
  );
};

export default React.memo(EmailItem);
