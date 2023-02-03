import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Avatar } from "../index";

const imgUrl =
  "https://images.secretlab.co/theme/common/technology-review-portrait-2-min.jpg";
const imgAltText = "Dr. James Goh";

describe("Testing Avatar size", () => {
  it("should generate a rounded image with the specified source and alt text with default medium size", () => {
    render(<Avatar src={imgUrl} alt={imgAltText} />);
    expect(screen.getByTestId("avatar")).toBeInTheDocument();
    expect(screen.getByTestId("avatar")).toHaveClass("rounded-full");
    expect(screen.getByTestId("avatar")).toHaveAttribute("width", "75");
    expect(screen.getByTestId("avatar")).toHaveAttribute("height", "75");
    expect(screen.getByTestId("avatar")).toHaveAttribute("alt", imgAltText);
    expect(screen.getByTestId("avatar")).toHaveAttribute("src", imgUrl);
  });

  it("should generate a rounded image small size", () => {
    render(<Avatar src={imgUrl} alt={imgAltText} size="small" />);
    expect(screen.getByTestId("avatar")).toBeInTheDocument();
    expect(screen.getByTestId("avatar")).toHaveClass("rounded-full");
    expect(screen.getByTestId("avatar")).toHaveAttribute("width", "50");
    expect(screen.getByTestId("avatar")).toHaveAttribute("height", "50");
    expect(screen.getByTestId("avatar")).toHaveAttribute("alt", imgAltText);
    expect(screen.getByTestId("avatar")).toHaveAttribute("src", imgUrl);
  });

  it("should generate a rounded image large size", () => {
    render(<Avatar src={imgUrl} alt={imgAltText} size="large" />);
    expect(screen.getByTestId("avatar")).toBeInTheDocument();
    expect(screen.getByTestId("avatar")).toHaveClass("rounded-full");
    expect(screen.getByTestId("avatar")).toHaveAttribute("width", "100");
    expect(screen.getByTestId("avatar")).toHaveAttribute("height", "100");
  });
});
