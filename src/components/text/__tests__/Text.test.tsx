import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Text } from "../Text";

describe("Atom/Text", () => {
  it("should generate span tag when no options set for the Text component", () => {
    render(<Text>Test</Text>);
    expect(screen.getByTestId("span")).toBeInTheDocument();
    expect(screen.getByText("Test")).toBeInTheDocument();
  });

  it("should generate span tag when default options set for the Text component", () => {
    render(
      <Text variant="default" color="default" classes="border p-5">
        Test
      </Text>
    );
    expect(screen.getByTestId("span")).toBeInTheDocument();
  });

  it("should generate small tag when default options set for the Text component", () => {
    render(
      <Text variant="small" color="default">
        Test
      </Text>
    );
    expect(screen.getByTestId("small")).toBeInTheDocument();
    expect(screen.getByTestId("small")).toHaveClass("text-sm");
  });

  it("should generate h1 tag with primary color when using h1 variant and primary color options", () => {
    render(
      <Text variant="h1" color="primary">
        Test
      </Text>
    );
    expect(screen.getByTestId("h1")).toBeInTheDocument();
    expect(screen.getByTestId("h1")).toHaveClass("text-5xl text-primary");
  });
});
