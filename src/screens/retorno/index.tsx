import React, { useState } from 'react';
import { InputFile, DivInput } from './styles';
import api from '../../services/api';

interface Dados {
  data_adesao: string;
  numero_proposta: number;
}

const Retorno: React.FC = () => {
  const [dados, setDados] = useState<Dados[]>([]);

  async function handleFile(event) {
    const file = event.target.files[0];

    const formData = new FormData();
    formData.append('file', file);
    formData.append('name', file.name);

    const response = await api.post('/retorno/index', formData);

    setDados(response.data);
  }

  return (
    <>
      <DivInput>
        <span>Tipo retorno: </span>
        <select>
          <option value="0">Consórcio liberação</option>
        </select>
      </DivInput>
      <div>
        <InputFile type="file" onChange={handleFile} />
      </div>
      {dados.length > 0
        ? dados.map(d => <li key={Math.random()}>{d.numero_proposta}</li>)
        : ''}
    </>
  );
};

export default Retorno;
