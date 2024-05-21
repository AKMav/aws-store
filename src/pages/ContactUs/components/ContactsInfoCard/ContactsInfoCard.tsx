import { FormCard } from "@/components/shared";
import PhoneIcon from "@/assets/icons/phone-icon.svg";
import MailIcon from "@/assets/icons/mail-icon.svg";
import "./style.scss";

export const ContactsInfoCard = () => {
  return (
    <FormCard className="contacts-info-card">
      <section className="contacts-info-card__section">
        <div className="section-row">
          <span className="section-row__image-wrapper">
            <img
              src={PhoneIcon}
              alt="phone icon"
              className="section-row__image"
              draggable="false"
            />
          </span>
          <h3 className="section-row__title">Call To Us</h3>
        </div>
        <p>We are available 24/7, 7 days a week.</p>
        <p>Phone: +8801611112222</p>
      </section>
      <span className="contacts-info-card__divider" />
      <section className="contacts-info-card__section">
        <div className="section-row">
          <span className="section-row__image-wrapper">
            <img
              src={MailIcon}
              alt="mail icon"
              className="section-row__image"
              draggable="false"
            />
          </span>
          <h3 className="section-row__title">Write To Us</h3>
        </div>
        <p>Fill out our form and we will contact you within 24 hours.</p>
        <p>Emails: customer@exclusive.com</p>
      </section>
    </FormCard>
  );
};
