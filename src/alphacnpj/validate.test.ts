import { assert, assertEquals } from "jsr:@std/assert";
import { isAlphaCNPJ, isNewAlphaCNPJ } from "./validate.ts";

const FULL = "12ABC34501DE35";
const MASK = "12.ABC.345/01DE-35";

Deno.test("isAlphaCNPJ: válido (com e sem máscara; case-insensitive)", () => {
  assert(isAlphaCNPJ(FULL));
  assert(isAlphaCNPJ(MASK));
  assert(isAlphaCNPJ(FULL.toLowerCase()));
});

Deno.test("isAlphaCNPJ: inválidos", () => {
  assertEquals(isAlphaCNPJ("12ABC34501DE00"), false); // DV errado
  assertEquals(isAlphaCNPJ("12ABC34501DE"), false); // faltando DV
  assertEquals(isAlphaCNPJ("###"), false); // chars inválidos
});

Deno.test("isNewAlphaCNPJ (deprecated) continua funcionando", () => {
  assert(isNewAlphaCNPJ(FULL));
});
