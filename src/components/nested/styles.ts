import styled from 'styled-components';

export const ContainerNested = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 5px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Label = styled.label`
  font-size: 1.5rem;
  color: ${props => props.theme.text.colors.dark};
`;

export const AddButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  border-style: none;
  outline: 0;
  border-radius: 50%;

  width: 30px;
  height: 30px;

  color: ${props => props.theme.text.colors.light};
  background: ${props => props.theme.semantic.primary};
  & :active {
    -ms-transform: translateY(4px);
    -webkit-transform: translateY(4px);
    transform: translateY(4px);
  }
`;
