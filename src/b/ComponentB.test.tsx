import { describe, test, expect } from "@jest/globals";
import ComponentB from "./ComponentB";

describe("ComponentB", () => {
  test("fake test case", () => {
    console.log(ComponentB);
    expect(true).toBe(true);
  });
});
