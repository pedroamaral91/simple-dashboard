import styled from 'styled-components';

interface ContainerProps {
  isOpen: boolean;
}

export const Container = styled.div<ContainerProps>`
  border: 1px solid ${({ theme }) => theme.semantic.secondary};
  width: 180px;
  height: fit-content;
  position: absolute;
  top: 50px;
  right: 0;
  border-radius: 10px;
  overflow: hidden;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;
