import { assertEquals } from "jsr:@std/assert";
import { formatToAlphaCNPJ, formatToNewAlphaCNPJ } from "./mask.ts";

const FULL = "12ABC34501DE35";
const MASK = "12.ABC.345/01DE-35";

Deno.test("formatToAlphaCNPJ", () => {
  assertEquals(formatToAlphaCNPJ(FULL), MASK);
  assertEquals(formatToAlphaCNPJ(MASK), MASK);
  // inválido → retorna original
  assertEquals(formatToAlphaCNPJ("123"), "123");
});

Deno.test("formatToNewAlphaCNPJ (deprecated) aponta para o novo", () => {
  assertEquals(formatToNewAlphaCNPJ(FULL), MASK);
});
