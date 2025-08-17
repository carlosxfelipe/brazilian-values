import { formatToCPF } from "../cpf/mask.ts";
import { formatToCNPJ } from "../cnpj/mask.ts";
import { formatToNewAlphaCNPJ } from "../alphacnpj/mask.ts";
import { whichDoc } from "./validate.ts";

export const formatToCPFOrCNPJ = (doc: string): string => {
  const kind = whichDoc(doc);
  if (kind === "cpf") return formatToCPF(doc);
  if (kind === "cnpj") return formatToCNPJ(doc);
  if (kind === "alphacnpj") return formatToNewAlphaCNPJ(doc);
  return "Documento inválido";
};
