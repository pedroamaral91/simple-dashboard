import React from 'react';
import { InputText } from '../../../inputs';
import { EmailItemContainer } from './styles';
import Icon from '../../../icons';
import { AddButton } from '../../styles';

interface EmailItemProps {
  onChange(e): void;
  value: string;
  handleDelete(id): void;
}

const EmailItem: React.FC<EmailItemProps> = ({
  onChange,
  value,
  handleDelete,
}) => {
  return (
    <EmailItemContainer>
      <InputText
        name="email"
        onChange={onChange}
        value={value}
        width="100%"
        placeholder="Email"
      />
      <AddButton type="button" onClick={handleDelete}>
        <Icon icon="FaTrash" />
      </AddButton>
    </EmailItemContainer>
  );
};

export default React.memo(EmailItem);
