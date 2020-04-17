import React, { useCallback } from 'react';

import { Container, Label, Input, InvalidFeedback } from '../input-text/styles';
import { MaskType, handleMaskedValue } from '../../../helpers/Mask';

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
  mask: MaskType;
}

const InputMask: React.FC<InputProps> = ({
  label = '',
  name,
  value,
  placeholder = '',
  onChange,
  error = '',
  width,
  height,
  type = 'text',
  mask,
}) => {
  const handleChange = useCallback(
    e => {
      e.target.value = handleMaskedValue(mask, e.target.value);
      onChange(e);
    },
    [onChange, mask],
  );
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
        onChange={handleChange}
      />

      {error && <InvalidFeedback>{error}</InvalidFeedback>}
    </Container>
  );
};

export default React.memo(InputMask);
