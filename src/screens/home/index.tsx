import React, { useState, useCallback } from 'react';

import { NestedEmails } from '../../components/nested';

interface Email {
  id: string;
  email: string;
}

const Home = () => {
  const [emails, setEmails] = useState<Email[]>([]);

  const handleChangeEmails = useCallback(
    values => {
      setEmails(values);
    },
    [emails],
  );
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {emails.map(email => {
          return <p> {JSON.stringify(email)}</p>;
        })}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <NestedEmails
          onChange={handleChangeEmails}
          label="Emails"
          values={emails}
        />
      </div>
    </>
  );
};

export default Home;
