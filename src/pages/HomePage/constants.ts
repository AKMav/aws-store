import deliveryIcon from "@/assets/icons/delivery-icon.svg";
import callCentreIcon from "@/assets/icons/call-center-icon.svg";
import secureIcon from "@/assets/icons/secure-icon.svg";
import { IBenefitInfo } from "@/components/BenefitsList";

export const benefits: IBenefitInfo[] = [
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
