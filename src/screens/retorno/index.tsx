import React, { useState } from 'react';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import { useDropzone } from 'react-dropzone';
import { SelectCommon } from '../../components/select';
import { DivContainer, ContainerInputFile } from './styles';
import api from '../../services/api';
import './styles.css';

interface Dados {
  data_adesao: string;
  numero_proposta: number;
}

const Retorno: React.FC = () => {
  const [dados, setDados] = useState<Dados[]>([]);
  const [tipoRetorno, setTipoRetorno] = useState('');

  /*
  async function handleFile(event) {
    const file = event.target.files[0];

    const formData = new FormData();
    formData.append('file', file);
    formData.append('name', file.name);

    const response = await api.post('/retorno/index', formData);

    setDados(response.data);
  }
  */

  async function uploadFile(formData) {
    const response = await api.post('/retorno/index', formData);

    setDados(response.data);
  }

  function StyledDropzone(props) {
    const {
      acceptedFiles,
      getRootProps,
      getInputProps,
      isDragActive,
      isDragAccept,
      isDragReject,
    } = useDropzone();

    acceptedFiles.map(file => {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('name', file.name);

      uploadFile(formData);
    });

    return (
      <div className="container">
        <ContainerInputFile
          {...getRootProps({ isDragActive, isDragAccept, isDragReject })}
        >
          <input {...getInputProps()} />
          <p>Arraste o arquivo aqui ou clique para selecionar...</p>
        </ContainerInputFile>
      </div>
    );
  }

  return (
    <>
      <DivContainer>
        <div>
          <div className="p-3 my-2 rounded">
            <Toast>
              <ToastHeader>Consórcio Liberação</ToastHeader>
              <ToastBody>
                <StyledDropzone />
              </ToastBody>
            </Toast>
          </div>
        </div>
        <div>
          <div className="p-3 my-2 rounded">
            <Toast>
              <ToastHeader>CDC</ToastHeader>
              <ToastBody>
                <StyledDropzone />
              </ToastBody>
            </Toast>
          </div>
        </div>
        <div>
          <div className="p-3 my-2 rounded">
            <Toast>
              <ToastHeader>Assessoria</ToastHeader>
              <ToastBody>
                <StyledDropzone />
              </ToastBody>
            </Toast>
          </div>
        </div>
      </DivContainer>
      {dados.length > 0
        ? dados.map(d => <li key={Math.random()}>{d.numero_proposta}</li>)
        : ''}
    </>
  );
};

export default Retorno;
