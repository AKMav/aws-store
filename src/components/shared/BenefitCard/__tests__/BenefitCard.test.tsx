import { render } from "@testing-library/react";
import { BenefitCard } from "../BenefitCard";
import { TITLE, SUBTITLE, IMG_ALT, IMG_SRC, ROLES } from "./constants";

describe("BenefitCard testing", () => {
  it("renders BenefitCard and testing only img", () => {
    const { getByRole } = render(
      <BenefitCard title={IMG_ALT} subtitle={SUBTITLE} iconSrc={IMG_SRC} />
    );
    const img = getByRole(ROLES.IMG);
    expect(img).toBeInTheDocument();
    expect(img.getAttribute("alt")).toEqual(IMG_ALT);
    expect(img.getAttribute("src")).toEqual(IMG_SRC);
  });

  it("renders BenefitCard and testing h3 and paragraph", () => {
    const { getByRole } = render(
      <BenefitCard title={TITLE} subtitle={SUBTITLE} iconSrc="" />
    );
    const h3 = getByRole(ROLES.HEADER);
    expect(h3).toBeInTheDocument();
    expect(h3.textContent).toEqual(TITLE);
    const p = getByRole(ROLES.PARAGRAPH);
    expect(p).toBeInTheDocument();
    expect(h3.textContent).toEqual(TITLE);
  });
});
