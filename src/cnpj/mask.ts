import { onlyDigits } from "../core/normalize.ts";

/**
 * Formata CNPJ para o padrão `XX.XXX.XXX/XXXX-XX`.
 * Retorna a entrada original se não houver exatamente 14 dígitos.
 *
 * @param raw String com CNPJ, com ou sem máscara.
 * @returns CNPJ formatado ou a string original.
 * @example
 * formatToCNPJ("11222333000181"); // "11.222.333/0001-81"
 */
export const formatToCNPJ = (raw: string): string => {
  const digits = onlyDigits(raw);
  if (!/^\d{14}$/.test(digits)) return raw;
  return digits.replace(
    /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,
    "$1.$2.$3/$4-$5",
  );
};
