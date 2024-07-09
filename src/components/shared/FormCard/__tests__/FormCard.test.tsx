import { render } from "@testing-library/react";
import { FormCard } from "../FormCard";
import { TEXT, TEXT_REGULAR, ROLE_LINK, TEST_CLASS } from "./constants";

describe("FormCard testing", () => {
  it("renders the FormCard component with a text as a child", () => {
    const { getByText } = render(<FormCard>{TEXT}</FormCard>);
    const form = getByText(TEXT_REGULAR);
    expect(form).toBeInTheDocument();
  });

  it("renders the FormCard component with a link as a child", () => {
    const LINK = <a href="#" />;
    const { getByRole } = render(<FormCard>{LINK}</FormCard>);
    const form = getByRole(ROLE_LINK);
    expect(form).toBeInTheDocument();
  });

  it("renders the FormCard component with a classes given as a props", () => {
    const { container } = render(
      <FormCard className={TEST_CLASS}>{TEST_CLASS}</FormCard>
    );
    expect(container.querySelector(`.${TEST_CLASS}`)).toBeInTheDocument();
  });
});
