// CPF
export { isCPF } from "./cpf/validate.ts";
export { formatToCPF } from "./cpf/mask.ts";

// CNPJ
export { isCNPJ } from "./cnpj/validate.ts";
export { formatToCNPJ } from "./cnpj/mask.ts";

// CNPJX (novo CNPJ alfanumérico)
export { isCNPJX } from "./cnpjx/validate.ts";
export { formatToCNPJX } from "./cnpjx/mask.ts";

// Genéricos
export { isCPFOrCNPJ } from "./document/validate.ts";
export { formatToCPFOrCNPJ } from "./document/mask.ts";

// Outros formatos
export { formatToCEP } from "./cep/mask.ts";
export { formatToPhoneBR } from "./phone/mask.ts";
export { formatToBRL } from "./currency/format.ts";
