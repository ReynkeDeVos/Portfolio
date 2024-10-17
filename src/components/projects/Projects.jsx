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
    imgSrc: "/project-imgs/elder-gym.jpg",
    blurDataURL:
      "data:image/avif;base64,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",
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
    title: "Pokebattle App",
    imgSrc: "/project-imgs/pokebattle.webp",
    blurDataURL:
      "data:image/avif;base64,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",
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
  {
    title: "WBS To-Do App",
    imgSrc: "/project-imgs/todo-app.jpg",
    blurDataURL:
      "data:image/avif;base64,AAAAHGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZgAAAOptZXRhAAAAAAAAACFoZGxyAAAAAAAAAABwaWN0AAAAAAAAAAAAAAAAAAAAAA5waXRtAAAAAAABAAAAImlsb2MAAAAAREAAAQABAAAAAAEOAAEAAAAAAAAEIgAAACNpaW5mAAAAAAABAAAAFWluZmUCAAAAAAEAAGF2MDEAAAAAamlwcnAAAABLaXBjbwAAABNjb2xybmNseAABAA0ABoAAAAAMYXYxQ4EBDAAAAAAUaXNwZQAAAAAAAAH0AAABrwAAABBwaXhpAAAAAAMICAgAAAAXaXBtYQAAAAAAAAABAAEEAYIDBAAABCptZGF0EgAKChhiPnrmCAhoNCAykQgSAAKKKKFAwPpBr3EaxqlOmJJmrzpoI9bfOcO+Ebn1OVwJzs79m40Cuajryt2uxxDUeDoq1ZAafjkchMgB+5uySuRIJfA58VsBcle6aWbUHgDz9QFh/4va/DeteTRORLV5uN0h6v5NT7zrTfCZLiw3jqbISgOOo9XPky8kZoVeH5T52dnV5xeBfaPrcyzzIXICOiYoS0atQnUjvebF3BmEl9ZYgrPcnG2TnhErH0H5gos0sD8eEPpP3xygQKI+PvypErhZNj2dJzfaovK89DJuJ8xzlXYijABLQiKtJKKddzTibm8o21zDSZFiw12f2/JuJrNfpzGgC6AEq6gm98pgA6A9MTx4STc7O///ZxyI8OCT+9yr8AhWm1bKYebF3iQbNTw9+O0pSUuQG1yHFajmdf7/xmQWsOZzQ8GPf8ad5fP8ZbhH8Ej/bYm+Io7RXHs3atx0vT2IxxnucsFxL+LsWa2tez+02vLF+dX1mhguvoiU2s8CWzwFgfty4fR4E7y9OXJrPCLHG9DVIlbWnGr8ijXqxZgG87BK+M75lg4l6OTm0i8NvJa3l9x2TL9sBCDWYR7BiKRLIu9obphjtopz/erRxdyd2MvtyEc+r8MdeLGgdYpcv6L1W+TAgojq0LTB7qkYp2kKZiPsWSqx6J+GS0tOQVzePHbPGRJYbDVhmXQYRbUIyXjB5nMDuAZMNRk+eq1mRT/m1BsMhGuQ1cYxqv7/XG+stbTo6Mi5/0H/zLGyVohKThBJSVvMyOfnGuPiHq1FcifHkluzqO23enbbaU7cvNEstl+izxJz8PzkFa4gkdtnmoGl4les5un/vgZEIg4DftSq6V6oNZPhzkWpZJnc7yu6Yu7d5BlFSdQu2g5MnRFKYfrqOE0pJdUkw/nj2+w1jSyA4ecjXoVImS2Q6NmI/SqA/TgTVv1F4XrsXt4ROeuqdxheHYK/icqWwm35lMwT4tl1hNW5NY18ZiU/rY41Bwgu5jNgOXcOzQ++XyXqH9uIM2QgnuMOjvugg1KR4lgbvQzE8E7t3mwW2T3KgWiRcKFec80jdgLG/OkE8kxNID363guj/JTz2TsiHIRK3vmGzqtSnohXbrmUzq64e3uGepkVlSsXzyp/9hriarMdT98U2bjLB5xHWwdeSudH8VgwF1gG1SIk6NbRlUqUX5A4I9KdkX4hFgiuMtffm15R/IJeDOzUimNGFOYgTbfMGTv4Mg7/snRiBWG2Zt91MFldT2TqwOW9DOQHrpKbIuCpu25nT//IXzUKimf1Vni/V7xlgXmss6YyWLobKtmc8qaWDk8Rpp/Moivf3VfOST5m7ipqNrBajerZBUTOj7r3WDHclgW4rwJFRXfGlYc4bwIXT+SFys4IYiN72uMfE0Q=",
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
    imgSrc: "/project-imgs/hackz0rs-news.jpg",
    blurDataURL:
      "data:image/avif;base64,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",
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
];
