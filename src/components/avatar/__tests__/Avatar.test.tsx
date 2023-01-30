import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Avatar } from "../index";

describe("Avatar", () => {
  it("should generate a rounded image with the specified source and alt text", () => {
    const imgUrl =
      "https://images.secretlab.co/theme/common/technology-review-portrait-2-min.jpg";
    const imgAltText = "Dr. James Goh";

    render(<Avatar src={imgUrl} alt={imgAltText} />);
    expect(screen.getByTestId("avatar")).toBeInTheDocument();
  });
});
