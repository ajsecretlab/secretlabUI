import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { TextBlock } from "../index";

describe("Atom/TextBlock", () => {
  it("should generate paragraph tag when type paragraph is selected", () => {
    render(
      <TextBlock type="paragraph" classes="border p-5">
        Test
      </TextBlock>
    );
    expect(screen.getByTestId("text-block-paragraph")).toBeInTheDocument();
  });

  it("should generate paragraph tag when type p is selected", () => {
    render(
      <TextBlock type="p" classes="border p-5">
        Test
      </TextBlock>
    );
    expect(screen.getByTestId("text-block-paragraph")).toBeInTheDocument();
  });

  it("should generate div tag when type div is selected", () => {
    render(
      <TextBlock type="div" classes="border p-5">
        Test
      </TextBlock>
    );
    expect(screen.getByTestId("text-block-div")).toBeInTheDocument();
  });

  it("should generate div tag when type d is selected", () => {
    render(
      <TextBlock type="d" classes="border p-5">
        Test
      </TextBlock>
    );
    expect(screen.getByTestId("text-block-div")).toBeInTheDocument();
  });

  it("should generate span tag when type span is selected", () => {
    render(
      <TextBlock type="span" classes="border p-5">
        Test
      </TextBlock>
    );
    expect(screen.getByTestId("text-block-span")).toBeInTheDocument();
  });

  it("should generate span tag when type s is selected", () => {
    render(
      <TextBlock type="s" classes="border p-5">
        Test
      </TextBlock>
    );
    expect(screen.getByTestId("text-block-span")).toBeInTheDocument();
  });
});
