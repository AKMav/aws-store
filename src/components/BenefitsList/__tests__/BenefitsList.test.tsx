import { render } from "@testing-library/react";
import { BenefitsList } from "../BenefitsList";
import { benefit } from "./constants";
import { TestId } from "../constants";

describe("BenefitsList testing", () => {
  it("testing to show list with 1 element", () => {
    const { getByTestId } = render(<BenefitsList benefits={[benefit]} />);
    expect(getByTestId(TestId).children.length).toEqual(1);
  });

  it("testing to show list with 3 elements", () => {
    const { getByTestId } = render(
      <BenefitsList benefits={[benefit, benefit, benefit]} />
    );
    expect(getByTestId(TestId).children.length).toEqual(3);
  });

  it("testing empty list", () => {
    const { queryByTestId } = render(<BenefitsList benefits={[]} />);
    expect(queryByTestId(TestId)).not.toBeInTheDocument();
  });
});
