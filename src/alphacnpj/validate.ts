import { onlyAlphaNumUpper, stripCommonMask } from "../core/normalize.ts";

/**
 * Converte um caractere [0-9A-Z] para o valor numérico usado no cálculo
 * do dígito verificador do CNPJ alfanumérico.
 *
 * Regra: `0-9 → 0-9` e `A-Z → 17-42` (valor = ASCII - 48).
 *
 * @param char Caractere único (0-9 ou A-Z).
 * @returns Valor numérico para cálculo do DV.
 * @example
 * charToValue("0") // 0
 * charToValue("A") // 17
 */
const charToValue = (char: string): number => {
  if (char >= "0" && char <= "9") return char.charCodeAt(0) - 48;
  if (char >= "A" && char <= "Z") return char.charCodeAt(0) - 65 + 17;
  return 0;
};

/**
 * Calcula um dígito verificador (DV) pelo método do módulo 11,
 * multiplicando cada valor pelo peso correspondente.
 *
 * @param values Array de valores numéricos da base (caracteres convertidos).
 * @param weights Pesos aplicados da esquerda para a direita.
 * @returns Dígito verificador (0 a 9).
 * @example
 * calcCheckDigit([1,2,17], [5,4,3])
 */
const calcCheckDigit = (values: number[], weights: number[]): number => {
  const sum = values.reduce((acc, val, i) => acc + val * weights[i], 0);
  const r = sum % 11;
  return r < 2 ? 0 : 11 - r;
};

/**
 * Verifica se uma string representa um **CNPJ alfanumérico** válido.
 *
 * Aceita entrada com ou sem máscara (`99.AAA.999/99AA-99`).
 * Letras minúsculas são convertidas para maiúsculas.
 *
 * **Algoritmo**:
 * - Converta cada char para número com `valor = ASCII - 48` (0..9 ⇒ 0..9, A..Z ⇒ 17..42).
 * - 1º DV: pesos `[5,4,3,2,9,8,7,6,5,4,3,2]` e módulo 11.
 * - 2º DV: pesos `[6,5,4,3,2,9,8,7,6,5,4,3,2]` sobre base + 1º DV.
 * - Resto `< 2` ⇒ DV = 0; caso contrário `11 - resto`.
 *
 * @param alphacnpj String contendo 14 caracteres (12 base + 2 DVs) com ou sem máscara.
 * @returns `true` se o CNPJ alfanumérico for válido, `false` caso contrário.
 *
 * @example
 * isAlphaCNPJ("12ABC34501DE35")     // true
 * isAlphaCNPJ("12.ABC.345/01DE-35") // true
 * isAlphaCNPJ("12ABC34501DE00")     // false
 */
export const isAlphaCNPJ = (alphacnpj: string): boolean => {
  if (!/^[0-9A-Za-z.\/-]+$/.test(alphacnpj)) return false;

  const cleaned = onlyAlphaNumUpper(stripCommonMask(alphacnpj));
  if (cleaned.length !== 14) return false;

  const base = cleaned.slice(0, 12);
  const expected = cleaned.slice(12);

  const w1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  const w2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

  const arr = base.split("").map(charToValue);
  const d1 = calcCheckDigit(arr, w1);
  const d2 = calcCheckDigit([...arr, d1], w2);

  return expected === `${d1}${d2}`;
};

/** @deprecated Use `isAlphaCNPJ` */
export const isNewAlphaCNPJ = isAlphaCNPJ;
