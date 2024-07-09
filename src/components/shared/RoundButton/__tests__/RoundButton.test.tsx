import { render } from "@testing-library/react";
import { NAME, NAME_REGULAR, ROLE_BUTTON, ROLE_LINK } from "./constants";
import { RoundButton } from "../RoundButton";

describe("RoundButton testing", () => {
  it("renders the RoundButton component empty", () => {
    const { getByRole } = render(<RoundButton />);
    const button = getByRole(ROLE_BUTTON);
    expect(button).toBeInTheDocument();
  });

  it("renders the RoundButton component with name", () => {
    const { getByText } = render(<RoundButton>{NAME}</RoundButton>);
    const button = getByText(NAME_REGULAR);
    expect(button).toBeInTheDocument();
  });

  it("renders the RoundButton component with span", () => {
    const CHILD = <span>{NAME}</span>;
    const { getByText } = render(<RoundButton>{CHILD}</RoundButton>);
    const button = getByText(NAME_REGULAR);
    expect(button).toBeInTheDocument();
  });

  it("renders the RoundButton component with link", () => {
    const CHILD = <a href="#" />;
    const { getByRole } = render(<RoundButton>{CHILD}</RoundButton>);
    const link = getByRole(ROLE_LINK);
    expect(link).toBeInTheDocument();
  });
});
