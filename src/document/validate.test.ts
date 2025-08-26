import { assert, assertEquals } from "jsr:@std/assert";
import { isCPFOrCNPJ, whichDoc } from "./validate.ts";

Deno.test("whichDoc", () => {
  assertEquals(whichDoc("123.456.789-09"), "cpf");
  assertEquals(whichDoc("11.222.333/0001-81"), "cnpj");
  assertEquals(whichDoc("12.ABC.345/01DE-35"), "alphacnpj");
  assertEquals(whichDoc("foo"), null);
});

Deno.test("isCPFOrCNPJ", () => {
  assert(isCPFOrCNPJ("12345678909"));
  assert(isCPFOrCNPJ("11222333000181"));
  assert(isCPFOrCNPJ("12ABC34501DE35"));
  assertEquals(isCPFOrCNPJ("foo"), false);
});
