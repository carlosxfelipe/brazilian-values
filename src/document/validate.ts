import { isCPF } from "../cpf/validate.ts";
import { isCNPJ } from "../cnpj/validate.ts";
import { isAlphaCNPJ } from "../alphacnpj/validate.ts";
import type { DocKind } from "../core/types.ts";

/**
 * Detecta o tipo de documento na string.
 * Retorna `"cpf"`, `"cnpj"` ou `"alphacnpj"`.
 * @returns `null` quando nenhum padrão válido for detectado.
 */
export const whichDoc = (doc: string): DocKind | null => {
  if (isCPF(doc)) return "cpf";
  if (isCNPJ(doc)) return "cnpj";
  if (isAlphaCNPJ(doc)) return "alphacnpj";
  return null;
};

/**
 * Atalho que retorna `true` quando a string é um CPF, CNPJ ou
 * CNPJ alfanumérico válido.
 */
export const isCPFOrCNPJ = (doc: string): boolean => whichDoc(doc) !== null;
