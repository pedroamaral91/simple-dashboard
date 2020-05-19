import React, { useState, useCallback, useEffect } from 'react';
import Icon from '../../icons';

import {
  Container,
  Label,
  WrapperSelect,
  Input,
  List,
  Option,
  InvalidFeedback,
  IconWrapper,
} from './styles';

type Option = {
  label: string;
  value: string | number;
};

interface CommonSelectProps {
  options: Option[];
  value: string | number;
  label?: string;
  error?: string;
  onChange: React.Dispatch<React.SetStateAction<any>>;
  placeholder?: string;
  isSearchable?: boolean;
}

const CommonSelect = ({
  options,
  value,
  label,
  error = '',
  placeholder = 'Selecione ...',
  onChange,
  isSearchable = true,
}: CommonSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [, setSearch] = useState('');

  const [selectedOption, setSelectedOption] = useState<Option>({
    label: '',
    value: '',
  });

  const handleOnMouseDown = useCallback(option => {
    setSelectedOption(option);
    setSearch(option.label);
    setIsOpen(false);
  }, []);

  const handleOnFocus = useCallback(() => {
    setIsOpen(!isOpen);
  }, []);

  const handleOnBlur = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleOpenSelect = useCallback(
    e => {
      e.preventDefault();
      setIsOpen(!isOpen);
    },
    [isOpen],
  );

  const handleChangeInput = useCallback(e => {
    setSearch(e.target.value);
  }, []);

  useEffect(() => {
    onChange(selectedOption.value);
  }, [selectedOption]);

  return (
    <Container>
      <Label>
        {label}
        &nbsp;
      </Label>

      <WrapperSelect>
        <Input
          readOnly={isSearchable}
          placeholder={placeholder}
          error={error}
          value={value}
          onBlur={handleOnBlur}
          onFocus={handleOnFocus}
          onChange={handleChangeInput}
        />
        <IconWrapper onMouseDown={handleOpenSelect}>
          <Icon icon="fa-arrow-down" />
        </IconWrapper>
        {isOpen && (
          <List>
            {options.map(option => (
              <Option
                key={option.value}
                onMouseDown={() => handleOnMouseDown(option)}
              >
                {option.label}
              </Option>
            ))}
          </List>
        )}
      </WrapperSelect>
      {error && <InvalidFeedback>{error}</InvalidFeedback>}
    </Container>
  );
};

export default React.memo(CommonSelect);
