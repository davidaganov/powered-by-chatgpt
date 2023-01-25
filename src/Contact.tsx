import React from "react";
import styles from "./Contact.module.css";

interface Props {
  phone: string;
  email: string;
}

export const Contact: React.FC<Props> = ({ phone, email }) => {
  return (
    <div className={styles.contact}>
      <h2 className={styles.contact_title}>Contact</h2>
      <p className={styles.contact_info}>
        Phone: {phone}
        <br />
        Email: {email}
      </p>
    </div>
  );
};
