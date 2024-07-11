export interface IBenefitInfo {
  id: string;
  title: string;
  subtitle: string;
  iconsSrc: string;
}

export interface IProps {
  benefits: IBenefitInfo[];
}
