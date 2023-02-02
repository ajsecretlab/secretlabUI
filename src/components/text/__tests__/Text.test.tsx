import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Text } from ".";

describe("Atom/TextBlock", () => {
  it("should generate paragraph tag when type paragraph is selected", () => {
    render(
      <Text variant="paragraph" classes="border p-5">
        Test
      </Text>
    );
    expect(screen.getByTestId("text-block-paragraph")).toBeInTheDocument();
  });
});
