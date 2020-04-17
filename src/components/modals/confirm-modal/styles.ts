import styled from 'styled-components';
import { Button as ButtonTemplate } from '@components/buttons';

export const WrapperContent = styled.div`
  padding: 30px;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`;

export const WrapperButton = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
`;

export const Message = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text.colors.body};
`;

export const Button = styled(ButtonTemplate)`
  width: 100px;
  height: 40px;
  align-self: flex-end;
  margin: 0 1em 1em 0;
  place-self: center;
`;
