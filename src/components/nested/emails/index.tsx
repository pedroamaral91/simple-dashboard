import React, { useCallback, useMemo, useState, useEffect } from 'react';
import { uuid } from 'uuidv4';
import { AddButton, ContainerNested, Header, Label } from '../styles';

import EmailItem from './email-item';
import Icon from '../../icons';

interface Email {
  id: string;
  email: string;
}

interface NestedEmailsProps {
  label?: string;
  values: Email[];
  onChange(emails: Email[]): void;
}

const NestedEmails: React.FC<NestedEmailsProps> = ({
  label,
  values,
  onChange,
}) => {
  const [emails, setEmails] = useState<Email[]>(values);

  const handleChangeEmails = useCallback(
    (e, id) => {
      const currentEmails = emails.map((email: Email) => {
        if (email.id === id) {
          return { ...email, email: e.target.value };
        }
        return email;
      });
      setEmails(currentEmails);
    },
    [emails],
  );

  const handleAddEmail = useCallback(() => {
    const newEmail = {
      id: uuid(),
      email: '',
    };
    onChange([...emails, newEmail]);
  }, [emails, onChange]);

  const handleDeleteEmails = useCallback(
    id => {
      const currentEmails = emails.filter(email => email.id !== id);
      onChange(currentEmails);
    },
    [emails, onChange],
  );

  const handleBlur = useCallback(() => {
    onChange(emails);
  }, [emails, onChange]);

  const renderEmails = useMemo(() => {
    const currentEmails = emails.map(email => (
      <EmailItem
        key={email.id}
        value={email.email}
        onChange={e => handleChangeEmails(e, email.id)}
        handleDelete={() => handleDeleteEmails(email.id)}
        onBlur={handleBlur}
      />
    ));
    return currentEmails;
  }, [emails, handleChangeEmails, handleBlur, handleDeleteEmails]);

  useEffect(() => {
    setEmails(values);
  }, [values]);

  return (
    <ContainerNested>
      <Header>
        <Label>{label && label}</Label>
        <AddButton type="button" onClick={handleAddEmail}>
          <Icon icon="FaPlus" />
        </AddButton>
      </Header>

      {renderEmails}
    </ContainerNested>
  );
};

export default React.memo(NestedEmails);
