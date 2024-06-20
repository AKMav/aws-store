import "./style.scss";

interface IProps {
  userName: string;
}

export const WelcomeTitle = ({ userName }: IProps) => {
  return (
    <p className="welcome-title">
      Welcome <span className="welcome-title__username">{userName}</span>
    </p>
  );
};
