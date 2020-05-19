import React from 'react';

import { Container, Label, AreaInput, InvalidFeedback } from './styles';

export interface TextareaProps {
  value: string | number;
  onChange(e: React.ChangeEvent<HTMLTextAreaElement>): void;
  label?: string;
  placeholder?: string;
  error?: string;
  width?: string;
  height?: string;
  type?: 'text' | 'password' | 'number';
}

const Textarea: React.FC<TextareaProps> = ({
  label = '',
  value,
  placeholder = '',
  onChange,
  error = '',
  width,
  height,
}) => {
  return (
    <Container style={{ width, height }}>
      <Label>
        {label}
        &nbsp;
      </Label>

      <AreaInput
        rows={4}
        error={error}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />

      {error && <InvalidFeedback>{error}</InvalidFeedback>}
    </Container>
  );
};

export default React.memo(Textarea);
