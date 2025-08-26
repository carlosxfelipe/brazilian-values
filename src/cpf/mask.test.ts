import { assertEquals } from "jsr:@std/assert";
import { formatToCPF } from "./mask.ts";

Deno.test("formatToCPF", () => {
  assertEquals(formatToCPF("12345678909"), "123.456.789-09");
  // inválido → retorna original
  assertEquals(formatToCPF("123"), "123");
});
