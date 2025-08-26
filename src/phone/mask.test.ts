import { assertEquals } from "jsr:@std/assert";
import { formatToPhoneBR } from "./mask.ts";

Deno.test("formatToPhoneBR: celular (11 dígitos)", () => {
  assertEquals(formatToPhoneBR("11987654321"), "(11) 98765-4321");
});

Deno.test("formatToPhoneBR: fixo (10 dígitos)", () => {
  assertEquals(formatToPhoneBR("1132654321"), "(11) 3265-4321");
});

Deno.test("formatToPhoneBR: inválido retorna original", () => {
  assertEquals(formatToPhoneBR("118765432"), "118765432");
  assertEquals(formatToPhoneBR("abc"), "abc");
});
