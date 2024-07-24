import { describe, it, expect } from "vitest";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import { EmptyList } from "../EmptyList";
import { TestClassName, TestImageSrc } from "./constants";
import { TestId } from "../constants";

describe("EmptyList", () => {
  it("Наличие тега img", () => {
    const { getByRole } = render(<EmptyList imageSrc={TestImageSrc} />, {
      wrapper: BrowserRouter,
    });
    const img = getByRole("img");
    expect(img).toBeInTheDocument();
    expect(img.getAttribute("src")).toEqual(TestImageSrc);
  });

  it("Наличие переданного в пропс класса", () => {
    const { getByTestId } = render(
      <EmptyList imageSrc={TestImageSrc} className={TestClassName} />,
      {
        wrapper: BrowserRouter,
      }
    );
    expect(getByTestId(TestId).classList.contains(TestClassName));
  });
});
