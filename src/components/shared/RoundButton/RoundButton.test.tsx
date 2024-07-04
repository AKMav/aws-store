import { ByRoleMatcher, render } from "@testing-library/react";
import { RoundButton } from "./RoundButton";

const NAME = "round-button-name";
const ROLE_BUTTON: ByRoleMatcher = "button";
const ROLE_LINK: ByRoleMatcher = "link";

describe("RoundButton testing", () => {
  it("renders the RoundButton component empty", () => {
    const { getByRole } = render(<RoundButton />);
    const button = getByRole(ROLE_BUTTON);
    expect(button).toBeDefined();
  });

  it("renders the RoundButton component with name", () => {
    const { getByText } = render(<RoundButton>{NAME}</RoundButton>);
    const button = getByText(NAME);
    expect(button).toBeDefined();
  });

  it("renders the RoundButton component with span", () => {
    const CHILD = <span>{NAME}</span>;
    const { getByText } = render(<RoundButton>{CHILD}</RoundButton>);
    const button = getByText(NAME);
    expect(button).toBeDefined();
  });

  it("renders the RoundButton component with link", () => {
    const CHILD = <a href="#" />;
    const { getByRole } = render(<RoundButton>{CHILD}</RoundButton>);
    const link = getByRole(ROLE_LINK);
    expect(link).toBeDefined();
  });
});
