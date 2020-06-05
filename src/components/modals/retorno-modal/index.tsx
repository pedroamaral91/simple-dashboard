import React from 'react';

import TemplateModal from '../template-modal';

import { Container, WrapperButton } from './styles';
import { Button } from '../../buttons';

interface RetornoModalProps {
  closeModal(): void;
  data?: any;
}

const RetornoModal: React.FC<RetornoModalProps> = ({ closeModal, data }) => {
  return (
    <TemplateModal>
      <Container>
        <h3>{data.layout}</h3>
        <p>
          Quantidade de registros: &nbsp;
          {data.quantidade_registros}
        </p>
        <WrapperButton>
          <Button label="Retornar" onClick={closeModal} />
        </WrapperButton>
        <WrapperButton>
          <Button label="Importar" onClick={closeModal} />
        </WrapperButton>
      </Container>
    </TemplateModal>
  );
};

export default RetornoModal;
