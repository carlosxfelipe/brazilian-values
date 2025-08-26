import { assertEquals } from "jsr:@std/assert";
import { formatToCNPJ } from "./mask.ts";

Deno.test("formatToCNPJ", () => {
  assertEquals(formatToCNPJ("11222333000181"), "11.222.333/0001-81");
  // inválido → retorna original
  assertEquals(formatToCNPJ("11222333"), "11222333");
});
