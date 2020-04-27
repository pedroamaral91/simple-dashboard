import styled from 'styled-components';

export const EmailItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const DeleteButton = styled.button`
  display: flex;

  align-items: center;
  justify-content: center;

  align-self: flex-end;

  border-style: none;
  outline: 0;
  border-radius: 50%;

  width: 30px;
  height: 30px;

  color: ${props => props.theme.text.colors.light};
  background: ${props => props.theme.semantic.danger};
  & :active {
    -ms-transform: translateY(4px);
    -webkit-transform: translateY(4px);
    transform: translateY(4px);
  }
`;
