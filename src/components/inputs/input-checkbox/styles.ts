import React from 'react';
import styled from 'styled-components';

interface StyledCheckboxProps {
  checked: boolean;
}

export const Label = styled.label`
  margin-bottom: 0.5rem;
  color: ${props => props.theme.text.colors.dark};
`;

export const TextLabel = styled.span`
  margin-left: 8px;
`;

export const CheckboxWrapper = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

export const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const StyledCheckbox = styled.div<StyledCheckboxProps>`
  display: inline-block;
  width: 20px;
  height: 20px;
  background: ${props =>
    props.checked ? props.theme.semantic.primary : props.theme.semantic.light};
  border: ${props => `1px solid ${props.theme.semantic.primary}}`};
  border-radius: 3px;
  transition: all 150ms;

  ${HiddenCheckbox}:focus + & {
    box-shadow: ${props => props.theme.focus.primary};
  }

  ${Icon} {
    visibility: ${props => (props.checked ? 'visible' : 'hidden')};
  }
`;
