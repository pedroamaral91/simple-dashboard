import React from 'react';

import TemplateModal from '../template-modal';

import { Container, Text } from './styles';
import { Button } from '../../buttons';
import { WrapperButton } from '../../../screens/login/form/styles';

interface SimpleModalProps {
  closeModal(): void;
}

const SimpleModal: React.FC<SimpleModalProps> = ({ closeModal }) => {
  return (
    <TemplateModal>
      <Container>
        <Text>Modal para exemplificar</Text>
        <WrapperButton>
          <Button label="Fechar" onClick={closeModal} />
        </WrapperButton>
      </Container>
    </TemplateModal>
  );
};

export default SimpleModal;
