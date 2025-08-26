import { assert, assertEquals } from "jsr:@std/assert";
import { isCPF } from "./validate.ts";

Deno.test("isCPF: válido (com e sem máscara)", () => {
  assert(isCPF("123.456.789-09"));
  assert(isCPF("12345678909"));
});

Deno.test("isCPF: inválidos comuns", () => {
  assertEquals(isCPF("00000000000"), false);
  assertEquals(isCPF("11111111111"), false);
  assertEquals(isCPF("abc"), false);
  assertEquals(isCPF("123"), false);
});
