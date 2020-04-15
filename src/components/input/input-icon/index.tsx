import React from 'react';

import {
  Container,
  Label,
  WrapperInput,
  Input,
  IconWrapper,
  InvalidFeedback,
} from './styles';

import Icon from '../../icons';

export interface InputProps {
  name: string;
  value: string | number;

  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  label?: string;
  placeholder?: string;

  error?: string;

  width?: string;
  height?: string;
  type?: 'text' | 'password' | 'number';
  icon: string;
}

const InputIcon: React.FC<InputProps> = ({
  label = '',
  name,
  value,
  placeholder = '',
  onChange,
  error = '',
  width,
  height,
  type = 'text',
  icon,
}) => (
  <Container style={{ width, height }}>
    <Label>
      {label}
      &nbsp;
    </Label>

    <WrapperInput>
      <IconWrapper>
        <Icon icon={icon} />
      </IconWrapper>
      <Input
        error={error}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </WrapperInput>
    {error && <InvalidFeedback>{error}</InvalidFeedback>}
  </Container>
);

export default React.memo(InputIcon);
