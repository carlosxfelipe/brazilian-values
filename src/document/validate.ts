import { isCPF } from "../cpf/validate.ts";
import { isCNPJ } from "../cnpj/validate.ts";
import { isCNPJX } from "../cnpjx/validate.ts";
import type { DocKind } from "../core/types.ts";

export const whichDoc = (doc: string): DocKind | null => {
  if (isCPF(doc)) return "cpf";
  if (isCNPJ(doc)) return "cnpj";
  if (isCNPJX(doc)) return "cnpjx";
  return null;
};

export const isCPFOrCNPJ = (doc: string): boolean => whichDoc(doc) !== null;
