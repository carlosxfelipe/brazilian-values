import { assertEquals } from "jsr:@std/assert";
import { onlyAlphaNumUpper, onlyDigits, stripCommonMask } from "./normalize.ts";

Deno.test("onlyDigits", () => {
  assertEquals(onlyDigits("a1b2c3"), "123");
  assertEquals(onlyDigits("123-456"), "123456");
});

Deno.test("onlyAlphaNumUpper", () => {
  assertEquals(onlyAlphaNumUpper("a1b2c3"), "A1B2C3");
  assertEquals(onlyAlphaNumUpper("12.abc-XY"), "12ABCXY");
});

Deno.test("stripCommonMask", () => {
  assertEquals(stripCommonMask("12.345.678/0001-90"), "12345678000190");
  assertEquals(stripCommonMask("12.ABC.345/01DE-35"), "12ABC34501DE35");
});
