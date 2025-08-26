import { formatToCPF } from "../cpf/mask.ts";
import { formatToCNPJ } from "../cnpj/mask.ts";
import { formatToAlphaCNPJ } from "../alphacnpj/mask.ts";
import { whichDoc } from "./validate.ts";

/**
 * Formata automaticamente uma string para CPF, CNPJ ou CNPJ alfanumérico
 * conforme o tipo detectado por `whichDoc`.
 * Retorna "Documento inválido" quando não reconhecido.
 */
export const formatToCPFOrCNPJ = (doc: string): string => {
  const kind = whichDoc(doc);
  if (kind === "cpf") return formatToCPF(doc);
  if (kind === "cnpj") return formatToCNPJ(doc);
  if (kind === "alphacnpj") return formatToAlphaCNPJ(doc);
  return "Documento inválido";
};
