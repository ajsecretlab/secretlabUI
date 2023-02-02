import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Button } from "../index";

describe("something truthy and falsy", () => {
  it("false to be false", () => {
    expect(false).toBe(false);
  });
});
