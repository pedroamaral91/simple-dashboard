import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useDropzone } from 'react-dropzone';
import { toast } from 'react-toastify';
import { modalCreators } from '../../store/state';
import { DivContainer, ContainerInputFile } from './styles';
import api from '../../services/api';
import imgUpload from '../../assets/upload.svg';

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
      dispatch(
        modalCreators.modalOpen('RetornoModal', {
          closeModal,
          data,
        }),
      );
    },
    [dispatch, closeModal],
  );

  async function importData() {
    const response = await api.post('/retorno/import', dados);
  }

  async function uploadFile(formData) {
    const response = await api.post('/retorno/index', formData);

    if (!response.data.success) {
      setDados([]);
      toast.error(response.data.message);
      return false;
    }

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
    } = useDropzone({ accept: '.csv,.ret' });

    acceptedFiles.map(file => {
      console.log(file);
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
        <p>
          <strong>Arraste ou clique aqui</strong> para fazer o upload do
          arquivo.
        </p>
        <p>
          <img src={imgUpload} width="200" height="200" />
        </p>
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
