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
  display: flex;
  flex-direction: column;
  z-index: 98;
  background-color: ${({ theme }) => theme.semantic.light};
  border-radius: 7px;
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

export const Title = styled.span`
  font-size: 22px;
  font-weight: 600;
  text-align: center;
  margin: 10px 0;
`;

export const Divisor = styled.div`
  width: 98%;
  height: 1px;
  background-color: ${({ theme }) => theme.semantic.secondary};
  opacity: 0.3;
  margin: 0 auto;
`;

export const WrapperButton = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 25%;
  align-self: flex-end;
  margin: 15px 0;
`;
