import { describe, it, expect, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { Link } from "../index";

describe("Testing button default render & disabled", () => {
  it("should render button element", () => {
    render(<Link to="/">Link Me</Link>);
    expect(screen.getByRole("link")).toBeVisible();
    expect(screen.getByRole("link")).toHaveAttribute("href", "/");
    expect(screen.getByRole("link")).toHaveTextContent("Link Me");
  });
});
