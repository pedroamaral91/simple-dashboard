import styled from 'styled-components';

type ContainerProps = {
  isOpened: boolean;
};

export const Container = styled.div<ContainerProps>`
  display: ${({ isOpened }) => (isOpened ? 'block' : 'none')};
`;

export const ModalContent = styled.div`
  width: 75vw;
  max-width: 1000px;
  height: 400px;
  overflow: auto;
`;

export const Content = styled.div`
  display: grid;
  align-items: flex-start;
  grid-template-columns: 1fr 0.05fr 0.05fr;
  column-gap: 5px;
  padding: 10px;
  & > button {
    place-self: center;
  }
`;
