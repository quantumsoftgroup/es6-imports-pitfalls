import { describe, test, expect } from "@jest/globals";
import ComponentA from "./ComponentA";

describe("ComponentA", () => {
  test("fake test case", () => {
    console.log(ComponentA);
    expect(true).toBe(true);
  });
});
