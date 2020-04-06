import React from 'react';
import PropTypes from 'prop-types';

import { Container, Label, Input } from './styles';

interface InputText {
  label: string;
  value: string;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
}

const InputText: React.FC<InputText> = ({ label, onChange, value }) => (
  <Container>
    <Label>{label}</Label>
    <Input type="text" onChange={onChange} value={value} />
  </Container>
);

InputText.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default InputText;
