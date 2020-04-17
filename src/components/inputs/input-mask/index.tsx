import React, { forwardRef } from 'react';
import { FieldError } from 'react-hook-form';
import { Map } from 'immutable';

import { Container, Label, Input, InvalidFeedback } from './styles';

type MasksType = 'cep' | 'cpf';
export interface InputProps {
  name: string;
  defaultValue?: string | number;
  label?: string;
  placeholder?: string;
  error?: FieldError;
  width?: string;
  height?: string;
  type?: 'text' | 'password' | 'number';
  mask: MasksType;
  onBlur?: () => void;
  control: any;
}

type Ref = HTMLInputElement;

const masks = Map({
  cpf: [
    /\d/,
    /\d/,
    /\d/,
    '.',
    /\d/,
    /\d/,
    /\d/,
    '.',
    /\d/,
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
  ],
  cep: [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/],
});

const InputMask = forwardRef<Ref, InputProps>(
  (
    {
      label = '',
      name,
      placeholder = '',
      error,
      defaultValue,
      width,
      height,
      type = 'text',
      mask,
      onBlur,
      control,
      ...rest
    },
    ref,
  ) => {
    return (
      <Container style={{ width, height }}>
        <Label>
          {label}
          &nbsp;
        </Label>
        <Input
          type={type}
          name={name}
          defaultValue={defaultValue}
          placeholder={placeholder}
          control={control}
          mask={masks.get(mask)!}
          onBlur={onBlur}
          ref={ref}
          {...rest}
        />
        <InvalidFeedback>
          {error?.message}
          &nbsp;
        </InvalidFeedback>
      </Container>
    );
  },
);

export default React.memo(InputMask);
