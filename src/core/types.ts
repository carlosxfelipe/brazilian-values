/**
 * Tipos de documento suportados por `whichDoc`.
 * - `"cpf"` — Cadastro de Pessoa Física
 * - `"cnpj"` — Cadastro Nacional da Pessoa Jurídica
 * - `"alphacnpj"` — CNPJ alfanumérico (12 + 2 DVs)
 */
export type DocKind = "cpf" | "cnpj" | "alphacnpj";
