import { onlyDigits } from "../core/normalize.ts";

/**
 * Valida um CPF (11 dígitos) calculando os dois dígitos verificadores.
 *
 * @param cpf CPF com ou sem máscara.
 * @returns `true` quando válido.
 * @example
 * isCPF("123.456.789-09");
 * isCPF("12345678909");
 */
export const isCPF = (cpf: string): boolean => {
  const v = onlyDigits(cpf);
  if (v.length !== 11 || /^(\d)\1+$/.test(v)) return false;

  let sum = 0;
  for (let i = 0; i < 9; i++) sum += Number(v[i]) * (10 - i);
  let rem = (sum * 10) % 11;
  if (rem === 10) rem = 0;
  if (rem !== Number(v[9])) return false;

  sum = 0;
  for (let i = 0; i < 10; i++) sum += Number(v[i]) * (11 - i);
  rem = (sum * 10) % 11;
  if (rem === 10) rem = 0;

  return rem === Number(v[10]);
};
