# brazilian-values

Biblioteca para validar e formatar valores brasileiros (CPF, CNPJ, novo CNPJ
alfa-numérico - CNPJX, CEP, telefone, moeda) usando **Deno** e **TypeScript**.

## Instalação

```ts
import { formatToBRL, isCPFOrCNPJ } from "jsr:@carlosxfelipe/brazilian-values";
```

## Exemplos

```ts
import {
  formatToBRL,
  formatToCEP,
  formatToCPFOrCNPJ,
  formatToPhoneBR,
  isCPFOrCNPJ,
} from "jsr:@carlosxfelipe/brazilian-values";

// CPF
console.log("CPF com máscara:", isCPFOrCNPJ("123.456.789-09"));
console.log("CPF sem máscara:", isCPFOrCNPJ("12345678909"));

// CNPJ
console.log("CNPJ com máscara:", isCPFOrCNPJ("11.222.333/0001-81"));
console.log("CNPJ sem máscara:", isCPFOrCNPJ("11222333000181"));

// Novo CNPJ alfa-numérico
console.log("Novo CNPJ com máscara:", isCPFOrCNPJ("1A.23B.45C/678D-01"));
console.log("Novo CNPJ sem máscara:", isCPFOrCNPJ("1A23B45C678D01"));

// Máscaras automáticas
console.log("CPF:", formatToCPFOrCNPJ("12345678909"));
console.log("CNPJ:", formatToCPFOrCNPJ("11222333000181"));
console.log("Novo CNPJ:", formatToCPFOrCNPJ("1A23B45C678D01"));

// CEP
console.log("CEP válido:", formatToCEP("12345678")); // 12345-678
console.log("CEP inválido:", formatToCEP("1234")); // 1234

// Telefone
console.log("Telefone celular:", formatToPhoneBR("11987654321")); // (11) 98765-4321
console.log("Telefone fixo:", formatToPhoneBR("1132654321")); // (11) 3265-4321
console.log("Telefone inválido:", formatToPhoneBR("118765432")); // 118765432

// Moeda (BRL)
console.log("Moeda válida:", formatToBRL(1234.56)); // R$ 1.234,56
console.log("Moeda string:", formatToBRL("9876.54")); // R$ 9.876,54
console.log("Moeda inválida:", formatToBRL("abc")); // abc
```

## Funções disponíveis

- `formatToBRL(valor: number | string): string` — Formata número para Real
  brasileiro.
- `formatToCEP(cep: string): string` — Formata CEP para padrão `XXXXX-XXX`.
- `formatToCNPJ(cnpj: string): string` — Formata CNPJ para padrão
  `XX.XXX.XXX/XXXX-XX`.
- `formatToNewAlphaCNPJ(cnpjx: string): string` — Formata **novo CNPJ
  alfa-numérico (CNPJX)**.
- `formatToCPF(cpf: string): string` — Formata CPF para padrão `XXX.XXX.XXX-XX`.
- `isCPF(cpf: string): boolean` — Valida CPF.
- `isCNPJ(cnpj: string): boolean` — Valida CNPJ.
- `isNewAlphaCNPJ(cnpjx: string): boolean` — Valida **novo CNPJ alfa-numérico
  (CNPJX)**.
- `isCPFOrCNPJ(valor: string): boolean` — Valida se é CPF, CNPJ ou CNPJX.
- `formatToCPFOrCNPJ(valor: string): string` — Formata automaticamente para CPF,
  CNPJ ou CNPJX.
- `formatToPhoneBR(telefone: string): string` — Formata telefone fixo ou celular
  brasileiro.

## Licença

MIT
