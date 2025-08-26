import { assertEquals } from "jsr:@std/assert";
import { formatToCPFOrCNPJ } from "./mask.ts";

Deno.test("formatToCPFOrCNPJ", () => {
  assertEquals(formatToCPFOrCNPJ("12345678909"), "123.456.789-09");
  assertEquals(formatToCPFOrCNPJ("11222333000181"), "11.222.333/0001-81");
  assertEquals(formatToCPFOrCNPJ("12ABC34501DE35"), "12.ABC.345/01DE-35");
  assertEquals(formatToCPFOrCNPJ("foo"), "Documento inválido");
});
