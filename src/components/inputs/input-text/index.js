import React from 'react';
import PropTypes from 'prop-types';

import { Container, Label, Input } from './styles';

const InputText = ({ label, onChange, value }) => (
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
