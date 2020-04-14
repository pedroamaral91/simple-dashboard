import styled, { keyframes, css } from 'styled-components';
import { Container as Button } from '../button/styles';
import loaderImage from '../../../assets/loader.png';

interface ContainerProps {
  isLoading: boolean;
  type: string;
}

export const Container = styled(Button).attrs(
  ({ isLoading, type }: ContainerProps) => ({
    disabled: isLoading,
    type,
  }),
)<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ isLoading }) =>
    isLoading &&
    css`
      cursor: not-allowed;
      opacity: 0.3;
      &:hover {
        background-color: ${({ theme }) => theme.semantic.primary};
      }
    `};
`;

const spinner = keyframes`
  from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
  background-image: url(${loaderImage});
  background-size: cover;
  background-position: center center;
  width: 25px;
  height: 25px;
  color: ${({ theme }) => theme.semantic.light};
  animation: ${spinner} 1s infinite linear;
`;
