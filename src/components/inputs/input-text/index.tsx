import React from 'react';

import { Container, Label, Input, InvalidFeedback } from './styles';

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
  onBlur?(): void;
  disabled?: boolean;
}

const InputText: React.FC<InputProps> = ({
  label = '',
  name,
  value,
  placeholder = '',
  onChange,
  error = '',
  width,
  height,
  type = 'text',
  onBlur,
  disabled = false,
}) => {
  return (
    <Container style={{ width, height }}>
      <Label>
        {label}
        &nbsp;
      </Label>

      <Input
        error={error}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
      />

      {error && <InvalidFeedback>{error}</InvalidFeedback>}
    </Container>
  );
};

export default React.memo(InputText);
