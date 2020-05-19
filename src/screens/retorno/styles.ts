import styled from 'styled-components';
import { theme } from '../../styles';

export const DivInput = styled.div`
  margin-left: 10px;
`;

export const InputFile = styled.input`
  outline: 2px dashed ${theme.semantic.warning};
  outline-offset: -10px;
  -webkit-transition: outline-offset 0.15s ease-in-out,
    background-color 0.15s linear;
  transition: outline-offset 0.15s ease-in-out, background-color 0.15s linear;
  padding: 50px 20px 50px 5%;
  text-align: center !important;
  margin: 0;
  width: 100% !important;
  color: ${theme.text.colors.dark};
  cursor: pointer;

  &::after {
    position: absolute;
    bottom: 50px;
    /*content: 'ou arraste aqui';*/
  }
`;
