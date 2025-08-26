import { onlyDigits } from "../core/normalize.ts";

/**
 * Formata CEP para `XXXXX-XXX`.
 * Retorna a entrada original se não houver exatamente 8 dígitos.
 *
 * @param raw String com CEP, com ou sem máscara.
 * @returns CEP formatado ou a string original.
 * @example
 * formatToCEP("12345678"); // "12345-678"
 */
export const formatToCEP = (raw: string): string => {
  const digits = onlyDigits(raw);
  if (digits.length !== 8) return raw;
  return digits.replace(/^(\d{5})(\d{3})$/, "$1-$2");
};
