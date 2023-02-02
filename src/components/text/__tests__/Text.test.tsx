import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Text } from "../index";

describe("App", () => {
  it("should work as expected", () => {
    render(<Text>Test</Text>);
    expect(1 + 1).toBe(2);
  });
});

describe("something truthy and falsy", () => {
  it("true to be true", () => {
    expect(true).toBe(true);
  });

  it("false to be false", () => {
    expect(false).toBe(false);
  });
});
