import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useDropzone } from 'react-dropzone';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import { FaRegFileAlt } from 'react-icons/fa';
import { modalCreators } from '../../store/state';
import { DivContainer, ContainerInputFile } from './styles';
import api from '../../services/api';

interface Dados {
  data_adesao: string;
  numero_proposta: number;
}

const Retorno: React.FC = () => {
  const dispatch = useDispatch();
  const [dados, setDados] = useState<Dados[]>([]);

  const closeModal = useCallback(() => {
    dispatch(modalCreators.modalClose('RetornoModal'));
  }, [dispatch]);

  const openModalRetorno = useCallback(
    data => {
      dispatch(modalCreators.modalOpen('RetornoModal', { closeModal, data }));
    },
    [dispatch, closeModal],
  );

  async function uploadFile(formData) {
    const response = await api.post('/retorno/index', formData);

    setDados(response.data.data);
    openModalRetorno(response.data.data);
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
      <ContainerInputFile
        {...getRootProps({ isDragActive, isDragAccept, isDragReject })}
      >
        <input {...getInputProps()} />
        <p>Arraste o arquivo aqui ou clique para selecionar...</p>
      </ContainerInputFile>
    );
  }

  return (
    <>
      <DivContainer>
        <StyledDropzone />
      </DivContainer>
    </>
  );
};

export default Retorno;
