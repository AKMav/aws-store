import { describe, it, expect } from "vitest";
import { BrowserRouter } from "react-router-dom";
import { render, fireEvent } from "@testing-library/react";
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

  it("проверяем редирект на домашнюю страницу по клику на кнопку", () => {
    const { getByText } = render(<BackHomeButton />, {
      wrapper: BrowserRouter,
    });
    const button = getByText(BUTTON_TITLE);
    fireEvent.click(button);
    expect(window.location.pathname === "/");
  });
});
