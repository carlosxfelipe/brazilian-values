import { assert, assertEquals } from "jsr:@std/assert";
import { isCNPJ } from "./validate.ts";

Deno.test("isCNPJ: válido (com e sem máscara)", () => {
  assert(isCNPJ("11.222.333/0001-81"));
  assert(isCNPJ("11222333000181"));
});

Deno.test("isCNPJ: inválidos", () => {
  assertEquals(isCNPJ("00.000.000/0000-00"), false);
  assertEquals(isCNPJ("00000000000000"), false);
  assertEquals(isCNPJ("123"), false);
});
