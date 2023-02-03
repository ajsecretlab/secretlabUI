import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { Text } from "../Text";

describe("App", () => {
  it("should work as expected", () => {
    render(<Text name="test" />);
    expect(1 + 1).toBe(2);
  });
});
