import React from "react";
import styles from "./Resume.module.css";

interface Props {
  skills: string[];
  workExperience: {
    company: string;
    duration: string;
    role: string;
  }[];
}

export const Resume: React.FC<Props> = ({ skills, workExperience }) => {
  return (
    <div className={styles.resume}>
      <h2 className={styles.resume_title}>Resume</h2>
      <h3 className={styles.resume_subtitle}>Skills</h3>
      <ul className={styles.resume_list}>
        {skills.map((skill) => (
          <li key={skill} className={styles.resume_list_item}>
            {skill}
          </li>
        ))}
      </ul>
      <h3 className={styles.resume_subtitle}>Work Experience</h3>
      <ul className={styles.resume_list}>
        {workExperience.map((work) => (
          <li key={work.company} className={styles.resume_list_item}>
            {work.company} - {work.role} ({work.duration})
          </li>
        ))}
      </ul>
    </div>
  );
};
