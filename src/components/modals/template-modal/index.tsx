import React from 'react';

import {
  Container,
  ModalContent,
  BackgroundOverlay,
  Title,
  Divisor,
  WrapperButton,
  ButtonContainer,
} from './styles';
import Button from '../../buttons/button/index';

interface TemplateModalProps {
  showOverlay?: boolean;
  onClose?: () => void;
  onConfirm?: () => void;
  title?: string;
}

const TemplateModal: React.FC<TemplateModalProps> = ({
  children,
  showOverlay = true,
  onConfirm,
  onClose,
  title,
}) => {
  const shouldRenderButton = onClose !== undefined || onConfirm !== undefined;
  return (
    <Container>
      <ModalContent>
        {title && (
          <>
            <Title>{title}</Title>
            <Divisor />
          </>
        )}
        {children}
        {shouldRenderButton && (
          <>
            <Divisor />
            <WrapperButton>
              {onConfirm && (
                <ButtonContainer>
                  <Button
                    bgColor="success"
                    onClick={onConfirm}
                    label="Confirmar"
                  />
                </ButtonContainer>
              )}
              {onClose && (
                <ButtonContainer>
                  <Button bgColor="danger" onClick={onClose} label="Fechar" />
                </ButtonContainer>
              )}
            </WrapperButton>
          </>
        )}
      </ModalContent>
      <BackgroundOverlay showOverlay={showOverlay} />
    </Container>
  );
};

export default TemplateModal;
