import React, { forwardRef } from 'react';

import { FieldError } from 'react-hook-form';
import { Container, Label, Input, LabelError } from './styles';

interface InputTextProps {
  label: string;
  name: string;
  error?: FieldError;
  defaultValue?: string;
  disabled?: boolean;
}

type Ref = HTMLInputElement;

const InputText = forwardRef<Ref, InputTextProps>(
  ({ label, name, error, defaultValue, disabled }, ref) => (
    <Container>
      <Label>{label}</Label>
      <Input
        type="text"
        ref={ref}
        name={name}
        defaultValue={defaultValue}
        disabled={disabled}
      />
      <LabelError>
        {error?.message}
        &nbsp;
      </LabelError>
    </Container>
  ),
);

export default React.memo(InputText);
