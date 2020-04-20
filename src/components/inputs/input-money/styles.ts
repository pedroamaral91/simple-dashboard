import Big from 'big.js';

export default function formatCurrency(value: number): string {
  const formatter = new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return formatter.format(Big(value));
}
