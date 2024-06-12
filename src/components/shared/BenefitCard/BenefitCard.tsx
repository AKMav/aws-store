import "./style.scss";

interface IProps {
  title: string;
  subtitle: string;
  iconSrc: string;
}

export const BenefitCard = ({ title, subtitle, iconSrc }: IProps) => {
  return (
    <div className="benefit-card">
      <div className="benefit-card__circle">
        <img
          src={iconSrc}
          alt={title}
          width={40}
          height={40}
          draggable="false"
        />
      </div>
      <div>
        <h3 className="benefit-card__title">{title}</h3>
        <p className="benefit-card__subtitle">{subtitle}</p>
      </div>
    </div>
  );
};
