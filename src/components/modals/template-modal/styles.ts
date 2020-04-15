import styled from 'styled-components';

interface OverlayProps {
  showOverlay: boolean;
}

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
`;

export const ModalContent = styled.div`
  z-index: 98;
`;

export const BackgroundOverlay = styled.div<OverlayProps>`
  display: ${({ showOverlay }) => (showOverlay ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 97;
`;
