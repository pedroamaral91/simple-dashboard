import React from 'react';
import {
  CheckboxWrapper,
  HiddenCheckbox,
  StyledCheckbox,
  Icon,
  Label,
  TextLabel,
} from './styles';

interface InputCheckboxProps {
  value: boolean;
  label: string;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
}

const InputCheckbox = ({ value, onChange, label }: InputCheckboxProps) => {
  return (
    <Label>
      <CheckboxWrapper>
        <HiddenCheckbox checked={value} onChange={onChange} />
        <StyledCheckbox checked={value}>
          <Icon viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" />
          </Icon>
        </StyledCheckbox>
      </CheckboxWrapper>
      <TextLabel>{label}</TextLabel>
    </Label>
  );
};

export default React.memo(InputCheckbox);
