import "./style.scss";
import deliveryIcon from "@/assets/icons/delivery-icon.svg";
import callCentreIcon from "@/assets/icons/call-center-icon.svg";
import secureIcon from "@/assets/icons/secure-icon.svg";
import { BenefitCard } from "../UIKit";

export const BenefitsList = () => {
  const benefits = [
    {
      id: "delivery",
      title: "FREE AND FAST DELIVERY",
      subtitle: "Free delivery for all orders over $140",
      iconsSrc: deliveryIcon,
    },
    {
      id: "callCenter",
      title: "24/7 CUSTOMER SERVICE",
      subtitle: "Friendly 24/7 customer support",
      iconsSrc: callCentreIcon,
    },
    {
      id: "secure",
      title: "MONEY BACK GUARANTEE",
      subtitle: "We reurn money within 30 days",
      iconsSrc: secureIcon,
    },
  ];
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
