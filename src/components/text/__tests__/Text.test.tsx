import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Text } from "../Text";

describe("Testing text variants", () => {
  it("should generate span tag", () => {
    render(<Text>Test</Text>);
    expect(screen.getByTestId("span")).toBeInTheDocument();
    expect(screen.getByText("Test")).toBeInTheDocument();
  });

  it("should generate span tag", () => {
    render(
      <Text variant="default" color="default" classes="border p-5">
        Test
      </Text>
    );
    expect(screen.getByTestId("span")).toBeInTheDocument();
  });

  it("should generate small tag", () => {
    render(
      <Text variant="small" color="default">
        Test
      </Text>
    );
    expect(screen.getByTestId("small")).toBeInTheDocument();
    expect(screen.getByTestId("small")).toHaveClass("text-sm");
  });
});

describe("Testing text color", () => {
  it("should generate h1 tag with primary color", () => {
    render(
      <Text variant="h1" color="primary">
        Test
      </Text>
    );
    expect(screen.getByTestId("h1")).toBeInTheDocument();
    expect(screen.getByTestId("h1")).toHaveClass("text-5xl text-primary");
  });
});
