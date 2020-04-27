import styled from 'styled-components';

export const ContainerNested = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  align-self: flex-end;
  border-style: none;
  outline: 0;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  color: ${props => props.theme.text.colors.light};
  background: ${props => props.theme.semantic.primary};

  text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.5);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.29);
  border-bottom: solid 3px #5e7fca;

  & :active {
    -ms-transform: translateY(4px);
    -webkit-transform: translateY(4px);
    transform: translateY(4px);
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2);
    border-bottom: none;
  }
`;
