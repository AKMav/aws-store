import "./style.scss";
import { BenefitCard } from "../shared";
import { IProps } from "./types";

export const BenefitsList = ({ benefits }: IProps) => {
  return (
    <div className="benefits-list">
      {benefits.map(({ id, title, subtitle, iconsSrc }) => (
        <BenefitCard
          title={title}
          subtitle={subtitle}
          iconSrc={iconsSrc}
          key={id}
        />
      ))}
    </div>
  );
};
