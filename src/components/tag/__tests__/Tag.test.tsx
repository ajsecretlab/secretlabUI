import { describe, it, expect, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { Tag } from "../index";

describe("Testing tag default render", () => {
  it("should render tag element", () => {
    render(<Tag>Tag Content</Tag>);
    expect(screen.getByTestId("tag")).toBeVisible();
    expect(screen.getByTestId("tag")).toHaveClass("tag");
    expect(screen.getByTestId("tag")).toHaveTextContent("Tag Content");
  });
});
