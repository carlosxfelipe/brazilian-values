import { onlyDigits } from "../core/normalize.ts";

/**
 * Valida um CNPJ (14 dígitos) pelo algoritmo de módulo 11.
 * Aceita string, número ou array de dígitos.
 *
 * @param cnpj CNPJ com ou sem máscara, ou representação numérica/array.
 * @returns `true` quando válido.
 * @example
 * isCNPJ("11.222.333/0001-81"); // true
 * isCNPJ([1,1,2,2,2,3,3,3,0,0,0,1,8,1]); // true
 */
const calcDV = (digits: string, weights: number[]) => {
  const sum = digits.split("").reduce(
    (acc, n, i) => acc + Number(n) * weights[i],
    0,
  );
  const mod = sum % 11;
  return mod < 2 ? 0 : 11 - mod;
};

export const isCNPJ = (cnpj: string | number | number[]): boolean => {
  if (cnpj === undefined || cnpj === null) return false;

  const digits = Array.isArray(cnpj)
    ? cnpj.join("")
    : typeof cnpj === "number"
    ? String(cnpj)
    : String(cnpj);

  const only = onlyDigits(digits);
  if (only.length !== 14) return false;
  if (/^(\d)\1{13}$/.test(only)) return false;

  const d1 = calcDV(only.slice(0, 12), [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]);
  const d2 = calcDV(only.slice(0, 12) + d1, [
    6,
    5,
    4,
    3,
    2,
    9,
    8,
    7,
    6,
    5,
    4,
    3,
    2,
  ]);
  return only.endsWith(`${d1}${d2}`);
};
