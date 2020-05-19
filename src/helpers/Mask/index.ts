import IMask from 'imask';

export type MaskType = 'Phone' | 'DDD' | 'CPF' | 'CNPJ' | 'CEP';

const PATTERNS_MASK = new Map<string, string | RegExp>([
  ['DDD', '(00)'],
  ['Phone', '00000-0000'],
  ['CPF', '000.000.000-00'],
  ['CNPJ', '00.000.000/0000-00'],
  ['CEP', '00000-000'],
]);

export function handleMaskedValue(maskType: MaskType, value: string | number) {
  const config: any = {
    mask: PATTERNS_MASK.get(maskType),
  };

  const handleSetMask = IMask.createPipe(config);

  return handleSetMask(value);
}
