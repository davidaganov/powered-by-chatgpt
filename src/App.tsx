import React from "react";
import { AboutMe } from "./AboutMe";
import { Projects } from "./Projects";
import { Resume } from "./Resume";
import { Reviews } from "./Reviews";
import { Contact } from "./Contact";
import styles from "./App.module.css";

interface Props {}

interface State {
  aboutMe: {
    name: string;
    role: string;
  };
  projects: {
    title: string;
    description: string;
    technologies: string[];
    demoLink: string;
  }[];
  resume: {
    skills: string[];
    workExperience: {
      company: string;
      duration: string;
      role: string;
    }[];
  };
  reviews: string[];
  contact: {
    phone: string;
    email: string;
  };
}

export class App extends React.Component<Props, State> {
  state = {
    aboutMe: {
      name: "David Aganov",
      role: "Web Developer",
    },
    projects: [
      {
        title: "Project 1",
        description: "A website for a local restaurant",
        technologies: ["HTML", "CSS", "JavaScript", "React"],
        demoLink: "https://project1.com",
      },
      {
        title: "Project 2",
        description: "An e-commerce platform for a clothing store",
        technologies: ["HTML", "CSS", "JavaScript", "Vue"],
        demoLink: "https://project2.com",
      },
      {
        title: "Project 3",
        description: "A web application for tracking personal finances",
        technologies: ["HTML", "CSS", "JavaScript", "Angular"],
        demoLink: "https://project3.com",
      },
      {
        title: "Project 4",
        description: "A landing page for a new app",
        technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
        demoLink: "https://project4.com",
      },
    ],
    resume: {
      skills: [
        "Web development",
        "JavaScript",
        "React",
        "Angular",
        "Vue",
        "Node",
        "Bootstrap",
        "CSS",
        "HTML",
      ],
      workExperience: [
        {
          company: "ACME Inc.",
          duration: "2 years",
          role: "Web Developer",
        },
        {
          company: "XYZ Corp.",
          duration: "1 year",
          role: "Front-end Developer",
        },
        {
          company: "ABC LLC",
          duration: "3 years",
          role: "Full-stack Developer",
        },
      ],
    },
    reviews: [
      "David is a great web developer. He was able to understand our requirements and deliver a high-quality product that exceeded our expectations.",
      "David's attention to detail and problem-solving skills made him a valuable asset to our team.",
      "David was easy to work with and always willing to go the extra mile to ensure the success of our project.",
      "David is a dedicated developer, he is always willing to learn new things and improve his skills. I strongly recommend him.",
    ],
    contact: {
      phone: "+1234567890",
      email: "davidaganov@email.com",
    },
  };

  render() {
    return (
      <div className={styles.app}>
        <header className={styles.header}>
          <nav className={styles.nav}>
            <a href="#aboutMe" className={styles.nav_link}>
              About Me
            </a>
            <a href="#projects" className={styles.nav_link}>
              Projects
            </a>
            <a href="#resume" className={styles.nav_link}>
              Resume
            </a>
            <a href="#reviews" className={styles.nav_link}>
              Reviews
            </a>
            <a href="#contact" className={styles.nav_link}>
              Contact
            </a>
          </nav>
        </header>
        <main>
          <AboutMe
            name={this.state.aboutMe.name}
            role={this.state.aboutMe.role}
          />
          <Projects projects={this.state.projects} />
          <Resume
            skills={this.state.resume.skills}
            workExperience={this.state.resume.workExperience}
          />
          <Reviews reviews={this.state.reviews} />
          <Contact
            phone={this.state.contact.phone}
            email={this.state.contact.email}
          />
        </main>
        <footer className={styles.footer}>
          <p className={styles.footer_text}>Copyright © 2021 David Aganov</p>
        </footer>

        {/* -- Author Code -- */}

        <a
          href="https://habr.com/ru/articles/713532/"
          className={styles.article}
        >
          Статья на Habr
        </a>

        {/* ---- */}
      </div>
    );
  }
}
