import { Container } from "react-bootstrap";
import { WelcomeTitle, ProfileFullInfo } from "./components";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import "./style.scss";

const Profile = () => {
  const user = useSelector(({ profile }: RootState) => profile.user);

  return (
    <Container className="profile-page">
      <WelcomeTitle firstName={user?.firstName} lastName={user?.lastName} />
      <ProfileFullInfo user={user} />
    </Container>
  );
};

export default Profile;