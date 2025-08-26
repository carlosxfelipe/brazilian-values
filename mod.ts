/**
 * `@carlosxfelipe/brazilian-values` — utilitários de validação e formatação
 * de valores brasileiros (CPF, CNPJ, CNPJ alfanumérico, CEP, telefone e BRL).
 *
 * Cada símbolo exportado possui exemplos de uso em sua JSDoc.
 */

// CPF
export { isCPF } from "./src/cpf/validate.ts";
export { formatToCPF } from "./src/cpf/mask.ts";

// CNPJ
export { isCNPJ } from "./src/cnpj/validate.ts";
export { formatToCNPJ } from "./src/cnpj/mask.ts";

// CNPJ alfanumérico (nomes novos)
export { isAlphaCNPJ } from "./src/alphacnpj/validate.ts";
export { formatToAlphaCNPJ } from "./src/alphacnpj/mask.ts";

// Compatibilidade (deprecated) — manter por 1–2 versões
/** @deprecated Use `isAlphaCNPJ` */
export { isNewAlphaCNPJ } from "./src/alphacnpj/validate.ts";
/** @deprecated Use `formatToAlphaCNPJ` */
export { formatToNewAlphaCNPJ } from "./src/alphacnpj/mask.ts";

// Auto detecção e máscaras
export { isCPFOrCNPJ, whichDoc } from "./src/document/validate.ts";
export { formatToCPFOrCNPJ } from "./src/document/mask.ts";

// Outros utilitários
export { formatToCEP } from "./src/cep/mask.ts";
export { formatToPhoneBR } from "./src/phone/mask.ts";
export { formatToBRL } from "./src/currency/format.ts";

export type { DocKind } from "./src/core/types.ts";
