import { test, runIfMain } from "https://deno.land/std/testing/mod.ts";
import {
  assert,
  assertEquals,
  assertStrictEq,
  assertThrows,
  assertThrowsAsync
} from "https://deno.land/std/testing/asserts.ts";

test(function randomTest(): void {
  console.log("HI");
});
