import { BackHomeButton } from "@/components/shared";
import { TestId } from "./constants";
import "./style.scss";

interface IProps {
  imageSrc: string;
  className?: string;
}

export const EmptyList = ({ imageSrc, className }: IProps) => {
  return (
    <div
      data-testid={TestId}
      className={className ? `empty-list ${className}` : "empty-list"}
    >
      <img
        src={imageSrc}
        draggable="false"
        alt="empty list image"
        className="empty-list__image"
      />
      <BackHomeButton />
    </div>
  );
};
