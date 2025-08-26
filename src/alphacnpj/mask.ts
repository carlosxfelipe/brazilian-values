import { onlyAlphaNumUpper } from "../core/normalize.ts";

/**
 * Formata um **CNPJ alfanumérico** para o padrão `99.AAA.999/99AA-99`.
 *
 * - Aceita entrada com ou sem máscara.
 * - Letras minúsculas são convertidas para maiúsculas.
 * - Se a entrada não tiver exatamente 14 caracteres alfanuméricos,
 *   retorna a string original sem alteração.
 *
 * @param raw String representando um CNPJ alfanumérico (com ou sem máscara).
 * @returns CNPJ alfanumérico formatado ou a entrada original.
 *
 * @example
 * formatToAlphaCNPJ("12ABC34501DE35");      // "12.ABC.345/01DE-35"
 * formatToAlphaCNPJ("12.ABC.345/01DE-35");  // "12.ABC.345/01DE-35"
 * formatToAlphaCNPJ("123");                 // "123" (inválido, retorna original)
 */
export const formatToAlphaCNPJ = (raw: string): string => {
  const s = onlyAlphaNumUpper(raw);
  if (s.length !== 14) return raw;
  return s.replace(/^(.{2})(.{3})(.{3})(.{4})(.{2})$/, "$1.$2.$3/$4-$5");
};

/** @deprecated Use `formatToAlphaCNPJ` */
export const formatToNewAlphaCNPJ = formatToAlphaCNPJ;
