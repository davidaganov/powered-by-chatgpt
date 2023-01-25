import React from "react";
import styles from "./AboutMe.module.css";

interface Props {
  name: string;
  role: string;
}

export const AboutMe: React.FC<Props> = ({ name, role }) => {
  return (
    <div className={styles.aboutMe}>
      <h2 className={styles.aboutMe_title}>About Me</h2>
      <p className={styles.aboutMe_info}>
        My name is {name} and I am a {role}. I have experience working with a
        variety of technologies and enjoy building clean, user-friendly websites
        and web applications.
      </p>
    </div>
  );
};
