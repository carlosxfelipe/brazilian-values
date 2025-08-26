import { assert, assertEquals } from "jsr:@std/assert";
import { formatToBRL } from "./format.ts";

Deno.test("formatToBRL: número", () => {
  const s = formatToBRL(1234.56);
  assert(s.includes("R$"));
  assert(s.includes("1.234,56"));
});

Deno.test("formatToBRL: string numérica", () => {
  const s = formatToBRL("9876.54");
  assert(s.includes("R$"));
  assert(s.includes("9.876,54"));
});

Deno.test("formatToBRL: não numérico retorna original", () => {
  assertEquals(formatToBRL("abc"), "abc");
  assertEquals(formatToBRL({} as unknown as number), "[object Object]");
});
