import { onlyDigits } from "../core/normalize.ts";

/**
 * Formata CPF para o padrão `XXX.XXX.XXX-XX`.
 * Retorna a entrada original se não houver exatamente 11 dígitos.
 *
 * @param raw String com CPF, com ou sem máscara.
 * @returns CPF formatado ou a string original.
 * @example
 * formatToCPF("12345678909"); // "123.456.789-09"
 */
export const formatToCPF = (raw: string): string => {
  const digits = onlyDigits(raw);
  if (!/^\d{11}$/.test(digits)) return raw;
  return digits.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3-$4");
};
