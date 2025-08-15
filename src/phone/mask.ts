import { onlyDigits } from "../core/normalize.ts";

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
