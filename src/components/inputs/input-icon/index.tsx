import React from 'react';

import { Container, Input, IconWrapper } from './styles';
import Icon from '../../icons';

interface InputIcon {
  icon: string;
  placeholder?: string;
  type?: string;
  value: number | string;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
}

const InputIcon: React.FC<InputIcon> = ({ icon, placeholder, type = 'text', value, onChange }) => (
  <Container>
    <IconWrapper>
      <Icon icon={icon} />
    </IconWrapper>
    <Input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  </Container>
);

export default InputIcon;
