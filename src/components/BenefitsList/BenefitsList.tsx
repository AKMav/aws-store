import "./style.scss";
import { BenefitCard } from "../shared";
import { IProps } from "./types";
import { TestId } from "./constants";

export const BenefitsList = ({ benefits }: IProps) => {
  return (
    benefits.length && (
      <div className="benefits-list" data-testid={TestId}>
        {benefits.map(({ id, title, subtitle, iconsSrc }) => (
          <BenefitCard
            title={title}
            subtitle={subtitle}
            iconSrc={iconsSrc}
            key={id}
          />
        ))}
      </div>
    )
  );
};
