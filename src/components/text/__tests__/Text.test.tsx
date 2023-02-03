import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Text } from "../Text";

describe("Testing text variants", () => {
  it("should just print out text", () => {
    render(<Text>Test</Text>);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });

  it("should generate span tag when no variant specified but have classes", () => {
    render(<Text classes="text-primary">Test</Text>);
    expect(screen.getByTestId("span")).toBeInTheDocument();
    expect(screen.getByTestId("span")).toHaveClass("text-primary");
  });

  it("should generate span tag", () => {
    render(<Text variant="default">Test</Text>);
    expect(screen.getByTestId("span")).toBeInTheDocument();
  });

  it("should generate small tag", () => {
    render(<Text variant="small">Test</Text>);
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
