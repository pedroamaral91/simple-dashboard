import styled from 'styled-components';

export const DivContainer = styled.div`
  display: flex;
  margin: 30px;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: stretch;
`;

export const ContainerInputFile = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-width: 2px;
  border-radius: 2px;
  border-style: dashed;
  background-color: #fafafa;
  color: #bdbdbd;
  outline: none;
  transition: border 0.24s ease-in-out;
  cursor: pointer;
`;
