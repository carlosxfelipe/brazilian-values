import { onlyDigits } from "../core/normalize.ts";

export const formatToCEP = (raw: string): string => {
  const digits = onlyDigits(raw);
  if (digits.length !== 8) return raw;
  return digits.replace(/^(\d{5})(\d{3})$/, "$1-$2");
};
