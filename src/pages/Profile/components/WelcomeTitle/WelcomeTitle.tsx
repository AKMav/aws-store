import "./style.scss";

interface IProps {
  firstName?: string;
  lastName?: string;
}

export const WelcomeTitle = ({ firstName, lastName }: IProps) => {
  return (
    <div className="welcome-title">
      <span>Welcome!</span>
      {firstName && (
        <span className="welcome-title__username"> {firstName.trim()} </span>
      )}
      {lastName && (
        <span className="welcome-title__username">{lastName.trim()}</span>
      )}
    </div>
  );
};
