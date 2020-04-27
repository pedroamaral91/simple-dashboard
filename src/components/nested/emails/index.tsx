import React, { useCallback, useMemo, useState, useEffect } from 'react';
import { uuid } from 'uuidv4';
import { AddButton, ContainerNested, Header, Label } from '../styles';
import EmailItem from './EmailItem';
import Icon from '../../icons';
import Display from '../../Display';

interface Email {
  id: string | number;
  email: string;
  added?: boolean;
  deleted?: boolean;
}

interface NestedEmailsProps {
  values: Email[];
}

const NestedEmails: React.FC<NestedEmailsProps> = ({ values }) => {
  const [emails, setEmails] = useState<Email[]>(values);

  const handleChangeEmails = useCallback(
    (e, id) => {
      const currentEmails = emails.map(email => {
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
    const newEmail = { id: uuid(), email: '', added: true, deleted: false };
    setEmails([...emails, newEmail]);
  }, [emails]);

  const handleDeleteEmails = useCallback(
    id => {
      const currentEmails = emails.map(email => {
        if (email.id === id) {
          return { ...email, deleted: true, created: false };
        }
        return email;
      });
      setEmails(currentEmails);
    },
    [emails],
  );

  const renderEmails = useMemo(() => {
    const currentEmails = emails.map(email => (
      <Display display={!email.deleted}>
        <EmailItem
          key={email.id}
          onChange={e => handleChangeEmails(e, email.id)}
          value={email.email}
          handleDelete={() => handleDeleteEmails(email.id)}
        />
      </Display>
    ));
    return currentEmails;
  }, [emails, handleChangeEmails]);

  useEffect(() => {
    const parseEmails = emails.map(item => {
      return { ...item, added: false, deleted: false };
    });
    setEmails(parseEmails);
  }, []);

  return (
    <ContainerNested>
      <Header>
        <Label>Emails</Label>
        <AddButton type="button" onClick={handleAddEmail}>
          <Icon icon="FaPlus" />
        </AddButton>
      </Header>

      {renderEmails}
    </ContainerNested>
  );
};

export default React.memo(NestedEmails);
