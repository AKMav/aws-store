import { RoundButton } from "@/components/shared";
import UserLogo from "@/assets/icons/user.svg";
import "./style.scss";

interface IProps {
  openProfile: () => void;
}

export const UserButton = ({ openProfile }: IProps) => {
  return (
    <RoundButton clickHandle={openProfile} className="user-button">
      <img
        src={UserLogo}
        alt="user icon"
        draggable="false"
        className="user-button__image"
      />
    </RoundButton>
  );
};
