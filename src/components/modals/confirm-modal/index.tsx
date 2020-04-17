import React from 'react';

import TemplateModal from '../template-modal';

import { WrapperContent, WrapperButton, Message, Button } from './styles';

interface IConfirmModalProps {
  onConfirm(): void;
  onClose(): void;
  message: string;
}

const ConfirmModal: React.FC<IConfirmModalProps> = ({
  onConfirm,
  onClose,
  message,
}) => {
  return (
    <TemplateModal>
      <WrapperContent>
        <Message>{message}</Message>
      </WrapperContent>
      <WrapperButton>
        <Button label="Confirmar" bgColor="success" onClick={onConfirm} />
        <Button label="Cancelar" bgColor="danger" onClick={onClose} />
      </WrapperButton>
    </TemplateModal>
  );
};

export default ConfirmModal;
