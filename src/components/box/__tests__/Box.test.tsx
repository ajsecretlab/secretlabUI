import { describe, it, expect, afterEach } from "vitest";
import { render, cleanup, screen } from "@testing-library/react";
import { Box } from "../index";

describe("Testing box variants", () => {
  it("should be span", () => {
    render(<Box>Test</Box>);
    expect(screen.getByRole("span")).toBeVisible();
    expect(screen.getByRole("span")).toHaveTextContent("Test");
  });
  it("should be paragraph", () => {
    render(<Box variant="paragraph">Test</Box>);
    expect(screen.getByRole("paragraph")).toBeVisible();
  });
  it("should be div", () => {
    render(<Box variant="div">Test</Box>);
    expect(screen.getByRole("div")).toBeVisible();
  });
});
