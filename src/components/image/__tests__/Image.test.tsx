import { describe, it, expect, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { Image } from "../index";
import { variantStyles } from "../Image.styles";

describe("Testing image options", () => {
  const imageURL =
    "https://images.secretlab.co/theme/common/homepage-bg-esports-manufacturing.jpg";
  const imageAlt = "imageTest";

  it("should render default image element", () => {
    render(<Image src={imageURL} alt={imageAlt} />);
    expect(screen.getByRole("img")).toBeVisible();
    expect(screen.getByRole("img")).toHaveAttribute("src", imageURL);
    expect(screen.getByRole("img")).toHaveAttribute("alt", imageAlt);
  });

  it("should render fit image element", () => {
    render(<Image src={imageURL} alt={imageAlt} variant="fit" />);
    expect(screen.getByRole("img")).toBeVisible();
    expect(screen.getByRole("img")).toHaveAttribute("src", imageURL);
    expect(screen.getByRole("img")).toHaveAttribute("alt", imageAlt);
    expect(screen.getByRole("img")).toHaveClass(variantStyles["fit"]);
  });

  it("should render background image element", () => {
    render(<Image src={imageURL} alt={imageAlt} variant="background" />);
    expect(screen.getByRole("img")).toBeVisible();
    expect(screen.getByRole("img")).toHaveAttribute("src", imageURL);
    expect(screen.getByRole("img")).toHaveAttribute("alt", imageAlt);
    expect(screen.getByRole("img")).toHaveClass(variantStyles["background"]);
  });
});
