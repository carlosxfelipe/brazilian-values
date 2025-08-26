import { onlyDigits } from "../core/normalize.ts";

/**
 * Formata telefone brasileiro (fixo ou celular).
 * - 11 dígitos ⇒ `(DD) 9XXXX-XXXX`
 * - 10 dígitos ⇒ `(DD) XXXX-XXXX`
 * Caso contrário, retorna a entrada original.
 *
 * @param raw String com telefone.
 * @returns Telefone formatado ou a string original.
 * @example
 * formatToPhoneBR("11987654321"); // "(11) 98765-4321"
 * formatToPhoneBR("1132654321");  // "(11) 3265-4321"
 */
export const formatToPhoneBR = (raw: string): string => {
  const digits = onlyDigits(raw);

  if (digits.length === 11) {
    return digits.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");
  }

  if (digits.length === 10) {
    return digits.replace(/^(\d{2})(\d{4})(\d{4})$/, "($1) $2-$3");
  }

  return raw;
};
