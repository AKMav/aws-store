import { Col, Row } from "react-bootstrap";
import { FormCard } from "@/components/shared";
import { FormField } from "../FormField/FormField";
import { IProps } from "./types";
import { useGetFullAddress } from "./hooks";
import "./style.scss";

export const ProfileFullInfo = ({ user }: IProps) => {
  const fullAddress = useGetFullAddress(user);
  return (
    <FormCard className="profile-full-info">
      <h2 className="profile-full-info__title">Your profile info</h2>
      {user?.image && (
        <img
          width={128}
          height={128}
          src={user.image}
          draggable={false}
          className="profile-full-info__image"
        />
      )}
      <Row>
        <Col>
          <FormField fieldName="First Name" value={user?.firstName ?? ""} />
        </Col>
        <Col>
          <FormField fieldName="Last Name" value={user?.lastName ?? ""} />
        </Col>
      </Row>
      <Row>
        <Col>
          <FormField fieldName="Email" value={user?.email ?? ""} />
        </Col>
        <Col>
          <FormField fieldName="Address" value={fullAddress ?? ""} />
        </Col>
      </Row>
      <Row>
        <Col>
          <FormField fieldName="Username" value={user?.username ?? ""} />
        </Col>
        <Col>
          <FormField fieldName="Password" value={user?.password ?? ""} />
        </Col>
      </Row>
    </FormCard>
  );
};
