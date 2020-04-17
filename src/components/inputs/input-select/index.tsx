import React, { forwardRef } from 'react';

import { FieldError } from 'react-hook-form';
import { Container, Label, Select, LabelError, Option } from './styles';

type Option = {
  value: string;
  label: string;
};

interface SelectProps {
  label: string;
  name: string;
  error?: FieldError;
  defaultValue?: string;
  disabled?: boolean;
  options: Option[];
}

type Ref = HTMLSelectElement;

const InputSelect = forwardRef<Ref, SelectProps>(
  ({ label, name, options, error, defaultValue, disabled }, ref) => (
    <Container>
      <Label>{label}</Label>
      <Select
        ref={ref}
        name={name}
        defaultValue={defaultValue}
        disabled={disabled}
      >
        {options.map(option => (
          <Option key={option.value} value={option.value}>
            {option.label}
          </Option>
        ))}
      </Select>
      <LabelError>
        {error?.message}
        &nbsp;
      </LabelError>
    </Container>
  ),
);

export default React.memo(InputSelect);
