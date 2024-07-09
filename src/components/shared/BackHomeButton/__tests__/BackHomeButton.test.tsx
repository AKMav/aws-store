import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { BackHomeButton } from "../BackHomeButton";
import { BUTTON_TITLE } from "./constants";

describe("BackHomeButton testing", () => {
  it("renders button link and check it by title", () => {
    const { getByText } = render(<BackHomeButton />, {
      wrapper: BrowserRouter,
    });
    expect(getByText(BUTTON_TITLE)).toBeInTheDocument();
  });

  it("renders button link and check it by role", () => {
    const { getByRole } = render(<BackHomeButton />, {
      wrapper: BrowserRouter,
    });
    expect(getByRole("button")).toBeInTheDocument();
    expect(getByRole("link")).toBeInTheDocument();
  });
});
