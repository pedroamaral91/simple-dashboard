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
  type?: string;
  mask: MaskType;
  onBlur?(): void;
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
  onBlur,
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
        onBlur={onBlur}
      />

      {error && <InvalidFeedback>{error}</InvalidFeedback>}
    </Container>
  );
};

export default React.memo(InputMask);
