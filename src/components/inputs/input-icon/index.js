import React from 'react';
import PropTypes from 'prop-types';

import { Container, Input, IconWrapper } from './styles';
import Icon from '../../icons';

const InputIcon = ({ icon, placeholder, type = 'text', value, onChange }) => (
  <Container>
    <IconWrapper>
      <Icon icon={icon} />
    </IconWrapper>
    <Input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  </Container>
);

InputIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string], [PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputIcon;
