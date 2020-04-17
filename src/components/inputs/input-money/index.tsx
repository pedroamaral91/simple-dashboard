import React, { useEffect, useState, useCallback } from 'react';
import formatCurrency from '../../../helpers/Money';
import { Container, Label, Input } from '../input-text/styles';

interface InputMoneyProps {
  name: string;
  value: number;
  onChange(value: number): void;

  error?: string;
  label?: string;
  width?: string;
  height?: string;
  disabled?: boolean;
}
const InputMoney = ({
  name,
  value,
  onChange,
  error = '',
  label,
  width,
  height,
  disabled = false,
}: InputMoneyProps) => {
  const [maskedValue, setMaskedValue] = useState<string>(String(value));
  const [numericValue, setNumericValue] = useState<number>(value);

  const normalizeValue = useCallback((number: string) => {
    return Number(number.toString().replace(/[^0-9-]/g, '')) / 10 ** 2;
  }, []);

  const calculateValues = useCallback(
    (inputFieldValue: string): [number, string] => {
      // Normalizo o valor do input
      const valueNormalize = normalizeValue(inputFieldValue);

      const formattedValue = formatCurrency(valueNormalize);

      const maskedValueReplaced = formattedValue.replace('R$', '');

      return [valueNormalize, maskedValueReplaced];
    },
    [normalizeValue],
  );

  const updateValues = useCallback(
    (currentValue: string): [number, string] => {
      const [calculatedValue, calculatedMaskedValue] = calculateValues(
        currentValue,
      );

      const maskedValueReplaced = calculatedMaskedValue.replace('R$', '');

      setMaskedValue(maskedValueReplaced);
      setNumericValue(calculatedValue);

      return [calculatedValue, maskedValueReplaced];
    },
    [calculateValues],
  );

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      event.preventDefault();

      updateValues(event.target.value);
    },
    [updateValues],
  );

  const handleBlur = useCallback(() => {
    onChange(numericValue);
  }, [numericValue, onChange]);

  useEffect(() => {
    const currentValue = formatCurrency(value);

    // Aplico desestruturação e pego o 2º parâmetro que contém o valor atual mascarado
    const [currentNumericValue, currentMaskedValue] = calculateValues(
      currentValue,
    );

    // Atualizo o estado da máscara
    setMaskedValue(currentMaskedValue);
    setNumericValue(currentNumericValue);
  }, [value, calculateValues]);

  return (
    <Container style={{ width, height }}>
      <Label>
        {label}
        &nbsp;
      </Label>

      <Input
        name={name}
        // error={error}
        value={maskedValue}
        onChange={handleChange}
        disabled={disabled}
        onBlur={handleBlur}
      />

      {/* {error && <InvalidFeedback>{error}</InvalidFeedback>} */}
    </Container>
  );
};

export default React.memo(InputMoney);
