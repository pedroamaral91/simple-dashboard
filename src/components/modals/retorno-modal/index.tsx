import React from 'react';
import { FaTimesCircle } from 'react-icons/fa';

import TemplateModal from '../template-modal';

import { Container, WrapperButton, CloseButton } from './styles';
import { Button } from '../../buttons';

interface RetornoModalProps {
  closeModal(): void;
  data?: any;
}

const RetornoModal: React.FC<RetornoModalProps> = ({ closeModal, data }) => {
  return (
    <TemplateModal>
      <Container>
        <CloseButton onClick={closeModal}>
          <FaTimesCircle />
        </CloseButton>
        <h3>{data.layout}</h3>
        <p>
          Quantidade de registros: &nbsp;
          {data.quantidade_registros}
        </p>
        <WrapperButton>
          <Button label="Importar dados" onClick={closeModal} />
        </WrapperButton>
      </Container>
    </TemplateModal>
  );
};

export default RetornoModal;
