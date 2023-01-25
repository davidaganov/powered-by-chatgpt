import React from "react";
import styles from "./Projects.module.css";

interface Props {
  projects: {
    title: string;
    description: string;
    technologies: string[];
    demoLink: string;
  }[];
}

export const Projects: React.FC<Props> = ({ projects }) => {
  return (
    <div className={styles.projects}>
      <h2 className={styles.projects_title}>Projects</h2>
      <ul className={styles.projects_list}>
        {projects.map((project) => (
          <li key={project.title} className={styles.projects_list_item}>
            <a
              href={project.demoLink}
              className={styles.projects_list_item_link}
            >
              {project.title}
            </a>{" "}
            - {project.description}
            <br />
            Technologies used: {project.technologies.join(", ")}
          </li>
        ))}
      </ul>
    </div>
  );
};
