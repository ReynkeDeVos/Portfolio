import React from "react";
import { SectionHeader } from "../util/SectionHeader";
import { Project } from "./Project";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className="grid gap-12 grid-cols-1 md:grid-cols-2">
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Elder Gym Bro App",
    imgSrc: "project-imgs/elder-gym.jpg", // replace with actual image
    code: "https://github.com/MichalWollny/ElderGymBroApp",
    projectLink: "https://eldergymbro.netlify.app/",
    tech: ["React", "MaterialUI (MUI)", "Tailwind CSS", "Node.js", "Express", "MongoDB", "JWT"],
    description:
      "A Lovecraftian-themed fitness tracker developed as the final project of the WBS Coding School Bootcamp within 3 weeks. Built collaboratively with secure user authentication, progress tracking, password security using the 'Have I Been Pwned' API, and MaterialUI for interactive components.",
    modalContent: (
      <>
        <p>
          Elder Gym Bro App is a Lovecraftian-themed fitness tracker built to help users manage workouts and track
          progress. Developed as the final project for the WBS Coding School Bootcamp, it was built together with{" "}
          <a
            href="https://github.com/MichalWollny"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-300 hover:text-indigo-400">
            Michal
          </a>
          ,{" "}
          <a
            href="https://github.com/Sebastian-Weber"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-300 hover:text-indigo-400">
            Sebastian
          </a>
          , and{" "}
          <a
            href="https://github.com/Aero1004"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-300 hover:text-indigo-400">
            Alex
          </a>
          , with help from our mentor{" "}
          <a
            href="https://github.com/onureredo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-300 hover:text-indigo-400">
            Onur
          </a>
          . The project was completed within 3 weeks.
        </p>
        <p>
          The app features custom workout plans, progress tracking with visual stats, and secure authentication using{" "}
          <strong>JWT</strong>. For enhanced security, passwords are checked against the{" "}
          <a
            href="https://haveibeenpwned.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-300 hover:text-indigo-400">
            "Have I Been Pwned"
          </a>{" "}
          API to prevent the use of compromised credentials.
        </p>
        <p>
          The tech stack includes <strong>React</strong>, <strong>MaterialUI</strong> for interactive components,{" "}
          <strong>Tailwind CSS</strong> for the design system, and <strong>Node.js</strong>, <strong>Express</strong>,{" "}
          <strong>MongoDB</strong> for the back-end. The app was presented at the{" "}
          <strong>WBS Coding School Community Day</strong> in Berlin. You can watch our presentation{" "}
          <a
            href="https://drive.google.com/file/d/1Go1VKyl2T6hqnJUId6WIm35LU79QjVXS/view?usp=sharing&t=4077"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-300 hover:text-indigo-400">
            here
          </a>
          .
        </p>
      </>
    ),
  },
  {
    title: "WBS To-Do App",
    imgSrc: "project-imgs/todo-app.jpg",
    code: "https://github.com/sharonVko/TodoList",
    projectLink: "https://todo-by-the-best-team-ev4r.netlify.app/",
    tech: ["React", "JavaScript", "HTML", "Tailwind CSS", "Local Storage"],
    description:
      "A simple to-do app built with React, JavaScript, HTML5, and Tailwind CSS. Developed in collaboration with Frank and Sharon, this project was our first deep dive into React and local storage for data persistence.",
    modalContent: (
      <>
        <p>
          WBS To-Do App is a task management tool created during the WBS Coding School bootcamp. It was developed
          collaboratively with{" "}
          <a
            href="https://github.com/franx-repos"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-300 hover:text-indigo-400">
            Frank
          </a>{" "}
          and{" "}
          <a
            href="https://github.com/sharonVko"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-300 hover:text-indigo-400">
            Sharon
          </a>{" "}
          over the course of one week in the afternoons.
        </p>
        <p>
          This project marked our first deep dive into <strong>React</strong> and the use of{" "}
          <strong>local storage</strong> for persisting tasks across sessions. We also learned how to collaborate
          effectively using tools like <strong>Git</strong>, <strong>Excalidraw</strong>, and <strong>Trello</strong>.
        </p>
        <p>
          The app features a <strong>theme switcher</strong> that allows users to toggle between light and dark modes,
          using a combination of <strong>Tailwind CSS</strong> and <strong>CSS3</strong>. Although this was our first
          major React project, the learning experience was invaluable.
        </p>
      </>
    ),
  },
  {
    title: "Hacker News Search",
    imgSrc: "project-imgs/hackz0rs-news.jpg", // replace with actual image
    code: "https://github.com/HannoBielz/hacker-news",
    projectLink: "https://hackz0rs-news-search.netlify.app/",
    tech: ["React", "Tailwind CSS", "Axios"],
    description:
      "A clone of the popular Hacker News platform with advanced features like pagination and search functionality. This project marked our first time learning to use APIs, fetching data with Axios, and using Tailwind CSS after learning Bootstrap.",
    modalContent: (
      <>
        <p>
          Hacker News Search is a tech news aggregator built to mimic the functionality of Hacker News, with added
          pagination and search capabilities for an improved user experience. This project was developed in
          collaboration with{" "}
          <a
            href="https://github.com/HannoBielz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-300 hover:text-indigo-400">
            Hanno
          </a>{" "}
          and{" "}
          <a
            href="https://github.com/SGitHub2023"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-300 hover:text-indigo-400">
            Sabrina
          </a>
          .
        </p>
        <p>
          The project leverages <strong>React</strong> and <strong>Tailwind CSS</strong> for the frontend. This was our
          first time using <strong>Tailwind CSS</strong> after learning Bootstrap. Most importantly, we learned to use{" "}
          <strong>APIs</strong> and fetch data using <strong>Axios</strong>, with data fetched from the official Hacker
          News API and pagination ensuring smooth browsing through large datasets.
        </p>
        <p>
          This project was a great opportunity to explore front-end development, but it was especially valuable for
          learning API fetching.
        </p>
      </>
    ),
  },
  {
    title: "Pokebattle App",
    imgSrc: "project-imgs/pokebattle.webp",
    code: "https://github.com/EinKinddesWindes/PokemonBattle",
    projectLink: "https://pokebattler.netlify.app/",
    tech: ["React", "Global Context", "DaisyUI", "Tailwind CSS", "RESTful API"],
    description:
      "A Pokémon battle app allowing players to simulate battles. Built using React, DaisyUI, and Tailwind CSS for a dynamic frontend. This was our first time using React Context for state management, and we integrated the RESTful API from pokeapi.co for Pokémon data.",
    modalContent: (
      <>
        <p>
          Pokebattle App is a Pokémon battle simulator that gives users the ability to engage in battles between
          Pokémon. This project was developed collaboratively with{" "}
          <a
            href="https://github.com/Sebastian-Weber"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-300 hover:text-indigo-400">
            Sebastian
          </a>{" "}
          and{" "}
          <a
            href="https://github.com/EinKinddesWindes"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-300 hover:text-indigo-400">
            Clara
          </a>
          .
        </p>
        <p>
          The app uses <strong>React</strong> with <strong>Context API</strong> for state management, marking our first
          time working with React Context. We built the frontend with <strong>DaisyUI</strong> and{" "}
          <strong>Tailwind CSS</strong>, creating a responsive and visually engaging experience. Users can select their
          Pokémon and engage in battles, with real-time updates to health and attacks.
        </p>
        <p>
          The app further explored API usage, specifically integrating the <strong>RESTful API</strong> from{" "}
          <strong>pokeapi.co</strong> to fetch Pokémon data. This project helped us deepen our knowledge of API fetching
          and state management in React.
        </p>
      </>
    ),
  },
];
