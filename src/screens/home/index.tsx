import React, { useState } from 'react';
import { SelectCommon } from '../../components/select';

const Home = () => {
  const [category, setCategory] = useState('');

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h1>Hoome</h1>
      <h1>Hoome</h1>

      <SelectCommon
        label="teste"
        value={category}
        onChange={setCategory}
        options={[{ value: 1, label: 'teste' }]}
      />
    </div>
  );
};

export default Home;
