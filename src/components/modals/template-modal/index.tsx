import React from 'react';

import { Container, ModalContent, BackgroundOverlay } from './styles';

interface TemplateModalProps {
  showOverlay?: boolean;
}

const TemplateModal: React.FC<TemplateModalProps> = ({
  children,
  showOverlay = true,
}) => {
  return (
    <Container>
      <ModalContent>{children}</ModalContent>
      <BackgroundOverlay showOverlay={showOverlay} />
    </Container>
  );
};

export default TemplateModal;
