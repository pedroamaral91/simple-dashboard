/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { FieldError } from 'react-hook-form';

import { Container, Label, LabelError, Input } from './styles';

interface InputDatePickerProps {
  label: string;
  name: string;
  onChange: () => void;
  dateFormat?: string;
  error?: FieldError;
}

type Ref = HTMLInputElement;

const InputDatePicker: React.FC<InputDatePickerProps> = ({
  label,
  error,
  onChange,
  dateFormat = 'dd/MM/yyyy',
  ...props
}) => (
  <Container>
    <Label>{label}</Label>
    <Input dateFormat={dateFormat} onChange={onChange} {...props} />
    <LabelError>
      {error?.message}
      &nbsp;
    </LabelError>
  </Container>
);

export default InputDatePicker;
