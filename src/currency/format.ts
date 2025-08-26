/**
 * Formata valores numéricos para Real brasileiro (BRL).
 * Se o valor não for numérico, devolve a entrada como string.
 *
 * @param value Valor numérico ou string numérica.
 * @returns String formatada em BRL ou a entrada original quando não numérica.
 * @example
 * formatToBRL(1234.56);   // "R$ 1.234,56"
 * formatToBRL("9876.54"); // "R$ 9.876,54"
 * formatToBRL("abc");     // "abc"
 */
export const formatToBRL = (value: unknown): string => {
  const num = Number(value);
  if (isNaN(num)) return String(value);

  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(num);
};
