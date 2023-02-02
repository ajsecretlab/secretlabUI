import { describe, it, expect, afterEach } from "vitest";
import { render, cleanup, screen } from "@testing-library/react";
import { Button } from "../index";

describe("Testing button default render & disabled", () => {
  it("should render button element", () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByRole("button")).toBeVisible();
  });

  it("button should disabled", () => {
    render(<Button disabled>Click Me</Button>);
    expect(screen.getByRole("button")).toBeDisabled();
  });
});

describe("Testing button colors", () => {
  it("should be class primary", () => {
    render(<Button color="primary">Click Me</Button>);
    expect(screen.getByRole("button")).not.toBeDisabled();
    expect(screen.getByRole("button")).toHaveClass("bg-primary");
  });
  it("should be class secondary", () => {
    render(<Button color="secondary">Click Me</Button>);
    expect(screen.getByRole("button")).toHaveClass("bg-secondary");
  });
  it("should be class sucess", () => {
    render(<Button color="success">Click Me</Button>);
    expect(screen.getByRole("button")).toHaveClass("bg-success");
  });
});

describe("Testing button classes", () => {
  it("should be CUSTOM classes", () => {
    render(<Button classes="custom">Click Me</Button>);
    expect(screen.getByRole("button")).toHaveClass("custom");
  });
});
