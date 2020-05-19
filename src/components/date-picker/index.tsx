import React, { useCallback } from 'react';

import { registerLocale } from 'react-datepicker';
import ptBR from 'date-fns/locale/pt-BR';

import './styles_default.css';

import { Container, Label, DateInput, InvalidFeedback } from './styles';

interface DatePickerProps {
  value: null | Date;
  label: string;
  onChange:
    | React.Dispatch<React.SetStateAction<null>>
    | React.Dispatch<React.SetStateAction<Date>>;
  width?: string;
  height?: string;
  error?: string;
  placeholder?: string;
}

const DatePicker = ({
  value,
  label,
  onChange,
  width,
  height,
  error = '',
  placeholder = 'Selecione uma data',
}: DatePickerProps) => {
  registerLocale('pt-BR', ptBR);

  const handleChange = useCallback(
    date => {
      onChange(date);
    },
    [onChange],
  );

  return (
    <Container style={{ width, height }}>
      <Label>
        {label}
        &nbsp;
      </Label>

      <DateInput
        selected={value}
        onChange={handleChange}
        dateFormat="dd/MM/yyyy"
        autoComplete="off"
        showPopperArrow={false}
        locale="pt-BR"
        error={error}
        placeholderText={placeholder}
      />
      {error && <InvalidFeedback>{error}</InvalidFeedback>}
    </Container>
  );
};

export default React.memo(DatePicker);
