import { assertEquals } from "jsr:@std/assert";
import { formatToCEP } from "./mask.ts";

Deno.test("formatToCEP: formata CEP válido", () => {
  assertEquals(formatToCEP("12345678"), "12345-678");
});

Deno.test("formatToCEP: normaliza entrada com máscara parcial", () => {
  assertEquals(formatToCEP("12.345-678"), "12345-678");
});

Deno.test("formatToCEP: inválido retorna original", () => {
  assertEquals(formatToCEP("1234"), "1234");
  assertEquals(formatToCEP("abcdef"), "abcdef");
});
