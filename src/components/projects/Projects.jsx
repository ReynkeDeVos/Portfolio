import React from 'react';
import { SectionHeader } from '../util/SectionHeader';
import { Project } from './Project';

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: 'Elder Gym Bro App',
    imgSrc: '/project-imgs/elder-gym.avif',
    blurDataURL:
      'data:image/avif;base64,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',
    code: 'https://github.com/MichalWollny/ElderGymBroApp',
    projectLink: 'https://eldergymbro.netlify.app/',
    tech: ['React', 'MaterialUI (MUI)', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    description:
      "A Lovecraftian-themed fitness tracker developed as the final project of the WBS Coding School Bootcamp within 3 weeks. Built collaboratively with secure user authentication, progress tracking, password security using the 'Have I Been Pwned' API, and MaterialUI for interactive components.",
    modalContent: (
      <>
        <p>
          Elder Gym Bro App is a Lovecraftian-themed fitness tracker built to help users manage workouts and track
          progress. Developed as the final project for the WBS Coding School Bootcamp, it was built together with{' '}
          <a
            href="https://github.com/MichalWollny"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-300 hover:text-indigo-400">
            Michal
          </a>
          ,{' '}
          <a
            href="https://github.com/Sebastian-Weber"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-300 hover:text-indigo-400">
            Sebastian
          </a>
          , and{' '}
          <a
            href="https://github.com/Aero1004"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-300 hover:text-indigo-400">
            Alex
          </a>
          , with help from our mentor{' '}
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
          The app features custom workout plans, progress tracking with visual stats, and secure authentication using{' '}
          <strong>JWT</strong>. For enhanced security, passwords are checked against the{' '}
          <a
            href="https://haveibeenpwned.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-300 hover:text-indigo-400">
            &quot;Have I Been Pwned&quot;
          </a>{' '}
          API to prevent the use of compromised credentials.
        </p>
        <p>
          The tech stack includes <strong>React</strong>, <strong>MaterialUI</strong> for interactive components,{' '}
          <strong>Tailwind CSS</strong> for the design system, and <strong>Node.js</strong>, <strong>Express</strong>,{' '}
          <strong>MongoDB</strong> for the back-end. The app was presented at the{' '}
          <strong>WBS Coding School Community Day</strong> in Berlin. You can watch our presentation{' '}
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
    title: 'Pokebattle App',
    imgSrc: '/project-imgs/pokebattle.avif',
    blurDataURL:
      'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAAD5bWV0YQAAAAAAAAAvaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAFBpY3R1cmVIYW5kbGVyAAAAAA5waXRtAAAAAAABAAAAHmlsb2MAAAAARAAAAQABAAAAAQAAASEAAAKrAAAAKGlpbmYAAAAAAAEAAAAaaW5mZQIAAAAAAQAAYXYwMUNvbG9yAAAAAGppcHJwAAAAS2lwY28AAAAUaXNwZQAAAAAAAADIAAAAbQAAABBwaXhpAAAAAAMICAgAAAAMYXYxQ4EADAAAAAATY29scm5jbHgAAgACAAIAAAAAF2lwbWEAAAAAAAAAAQABBAECgwQAAAKzbWRhdAoKAAAAA7Y+w//mATKcBRAAkAAqgegKQQzSIOD/olLfqMLdnEuGTlh722L4WJSYSZTCkeJyhVv1XyWGlIE0tezROZ9485V8KEyTBbFiDlzacjrNf53CwVkCLryHibz3++GD5sUzPil/QRBAo7rBamlm8naNvLhigaoe9Jn4JjgMhrAsraNXcD1netfvZ7XkhgYqQ1qTd7X/woUe/fp1TrFXfl6ppg7LtgC/xVS+svkKnNZ1lMbmbHlAxVys9WnyQ+w4CY0Ju74RGCkLDTsupNFTyc5rxH75L+r/yOzbPnoO40qmv2dAn/h0If/UWFKozRV21HCqvsC/4i7pDm2noqRBPciNj9otWPcrWUDmDYnfwgu760gyARhOcACeTGa2zKfVCk9MlaGYABtGv0vvZwYHz3ceVfTI0forL+13UUg2pjF+HWLxWBd+k6OaUXsEpBgO7fcqN4RpOxDdzDQzXYAdo8jFKiFS17P5BM5w/DMwv3pZC4dg/DqcwOfiJnKRGSYFwhnwdf26j6vqhmR2ZpjIqV87YL8NWikPf6MRLRsv3CCoHssGQKPjfnN8D9l5OvUxHLDFaOkte3Ww2ldFfe4s0g5C0eI546t/5fmhjS1KSviQXQgVNtVayumvI69rAYPSb1Rqd894uOIVpFoEReb5GT+RLBXU6h1uf4xFKdrcfPAXWmNDPvwMkAWOLCctu15d3nh5rRbN9i4pDoJt9ZS4eDYGVkRBMjNWWo190/SMQR/Pnpey0W920nO6H1FcCSNA4YJ18KeHfrjpGwTqPA4+T4+duV3BQroj4vlhSMLkXVNUUdHJdWqJ+WfVN9NUD5uyI3fMtee+Zqz1y6UkcLZI9OxenYM3fHeqGSFiOgrnlSkFmsSw7WS15WLJC4LO9nUt/FUJu58+PMKC',
    code: 'https://github.com/EinKinddesWindes/PokemonBattle',
    projectLink: 'https://pokebattler.netlify.app/',
    tech: ['React', 'Global Context', 'DaisyUI', 'Tailwind CSS', 'RESTful API'],
    description:
      'A Pokémon battle app allowing players to simulate battles. Built using React, DaisyUI, and Tailwind CSS for a dynamic frontend. This was our first time using React Context for state management, and we integrated the RESTful API from pokeapi.co for Pokémon data.',
    modalContent: (
      <>
        <p>
          Pokebattle App is a Pokémon battle simulator that gives users the ability to engage in battles between
          Pokémon. This project was developed collaboratively with{' '}
          <a
            href="https://github.com/Sebastian-Weber"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-300 hover:text-indigo-400">
            Sebastian
          </a>{' '}
          and{' '}
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
          time working with React Context. We built the frontend with <strong>DaisyUI</strong> and{' '}
          <strong>Tailwind CSS</strong>, creating a responsive and visually engaging experience. Users can select their
          Pokémon and engage in battles, with real-time updates to health and attacks.
        </p>
        <p>
          The app further explored API usage, specifically integrating the <strong>RESTful API</strong> from{' '}
          <strong>pokeapi.co</strong> to fetch Pokémon data. This project helped us deepen our knowledge of API fetching
          and state management in React.
        </p>
      </>
    ),
  },
  {
    title: 'WBS To-Do App',
    imgSrc: '/project-imgs/todo-app.avif',
    blurDataURL:
      'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAAD5bWV0YQAAAAAAAAAvaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAFBpY3R1cmVIYW5kbGVyAAAAAA5waXRtAAAAAAABAAAAHmlsb2MAAAAARAAAAQABAAAAAQAAASEAAAKrAAAAKGlpbmYAAAAAAAEAAAAaaW5mZQIAAAAAAQAAYXYwMUNvbG9yAAAAAGppcHJwAAAAS2lwY28AAAAUaXNwZQAAAAAAAADIAAAAbQAAABBwaXhpAAAAAAMICAgAAAAMYXYxQ4EADAAAAAATY29scm5jbHgAAgACAAIAAAAAF2lwbWEAAAAAAAAAAQABBAECgwQAAAKzbWRhdAoKAAAAA7Y+w//mATKcBRAAkAAqgegKQQzSIOD/olLfqMLdnEuGTlh722L4WJSYSZTCkeJyhVv1XyWGlIE0tezROZ9485V8KEyTBbFiDlzacjrNf53CwVkCLryHibz3++GD5sUzPil/QRBAo7rBamlm8naNvLhigaoe9Jn4JjgMhrAsraNXcD1netfvZ7XkhgYqQ1qTd7X/woUe/fp1TrFXfl6ppg7LtgC/xVS+svkKnNZ1lMbmbHlAxVys9WnyQ+w4CY0Ju74RGCkLDTsupNFTyc5rxH75L+r/yOzbPnoO40qmv2dAn/h0If/UWFKozRV21HCqvsC/4i7pDm2noqRBPciNj9otWPcrWUDmDYnfwgu760gyARhOcACeTGa2zKfVCk9MlaGYABtGv0vvZwYHz3ceVfTI0forL+13UUg2pjF+HWLxWBd+k6OaUXsEpBgO7fcqN4RpOxDdzDQzXYAdo8jFKiFS17P5BM5w/DMwv3pZC4dg/DqcwOfiJnKRGSYFwhnwdf26j6vqhmR2ZpjIqV87YL8NWikPf6MRLRsv3CCoHssGQKPjfnN8D9l5OvUxHLDFaOkte3Ww2ldFfe4s0g5C0eI546t/5fmhjS1KSviQXQgVNtVayumvI69rAYPSb1Rqd894uOIVpFoEReb5GT+RLBXU6h1uf4xFKdrcfPAXWmNDPvwMkAWOLCctu15d3nh5rRbN9i4pDoJt9ZS4eDYGVkRBMjNWWo190/SMQR/Pnpey0W920nO6H1FcCSNA4YJ18KeHfrjpGwTqPA4+T4+duV3BQroj4vlhSMLkXVNUUdHJdWqJ+WfVN9NUD5uyI3fMtee+Zqz1y6UkcLZI9OxenYM3fHeqGSFiOgrnlSkFmsSw7WS15WLJC4LO9nUt/FUJu58+PMKC',
    code: 'https://github.com/sharonVko/TodoList',
    projectLink: 'https://todo-by-the-best-team-ev4r.netlify.app/',
    tech: ['React', 'JavaScript', 'HTML', 'Tailwind CSS', 'Local Storage'],
    description:
      'A simple to-do app built with React, JavaScript, HTML5, and Tailwind CSS. Developed in collaboration with Frank and Sharon, this project was our first deep dive into React and local storage for data persistence.',
    modalContent: (
      <>
        <p>
          WBS To-Do App is a task management tool created during the WBS Coding School bootcamp. It was developed
          collaboratively with{' '}
          <a
            href="https://github.com/franx-repos"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-300 hover:text-indigo-400">
            Frank
          </a>{' '}
          and{' '}
          <a
            href="https://github.com/sharonVko"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-300 hover:text-indigo-400">
            Sharon
          </a>{' '}
          over the course of one week in the afternoons.
        </p>
        <p>
          This project marked our first deep dive into <strong>React</strong> and the use of{' '}
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
    title: 'Hacker News Search',
    imgSrc: '/project-imgs/hackz0rs-news.avif',
    blurDataURL:
      'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUEAAAD5bWV0YQAAAAAAAAAvaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAFBpY3R1cmVIYW5kbGVyAAAAAA5waXRtAAAAAAABAAAAHmlsb2MAAAAARAAAAQABAAAAAQAAASEAAAC/AAAAKGlpbmYAAAAAAAEAAAAaaW5mZQIAAAAAAQAAYXYwMUNvbG9yAAAAAGppcHJwAAAAS2lwY28AAAAUaXNwZQAAAAAAAADIAAAAegAAABBwaXhpAAAAAAMICAgAAAAMYXYxQ4EgAAAAAAATY29scm5jbHgAAQANAAaAAAAAF2lwbWEAAAAAAAAAAQABBAECgwQAAADHbWRhdAoNIAAAA7Y/k//mgIaDSDKtARQAJAADgGGCkEgcqDj9a3HCIldWkg0z8CnYSywZNQwxzw8+9HBtaHkCubV5wFDAW/aqJQribLmyWZ0guyGKHdd5w1oqFUAPm7GbUgQpfbfQUK7Cbn+DA2yXvna/HFYp0aT+Q5Wr61+AYwKO2xN2bWYU6Vm7ddDkORHxs2tuGmF6npyfmDVF1YRfPmL83un2fglIUfHXyPvAO2lS4Y/ywra92K0BruD1BKcD28QY',
    code: 'https://github.com/HannoBielz/hacker-news',
    projectLink: 'https://hackz0rs-news-search.netlify.app/',
    tech: ['React', 'Tailwind CSS', 'Axios'],
    description:
      'A clone of the popular Hacker News platform with advanced features like pagination and search functionality. This project marked our first time learning to use APIs, fetching data with Axios, and using Tailwind CSS after learning Bootstrap.',
    modalContent: (
      <>
        <p>
          Hacker News Search is a tech news aggregator built to mimic the functionality of Hacker News, with added
          pagination and search capabilities for an improved user experience. This project was developed in
          collaboration with{' '}
          <a
            href="https://github.com/HannoBielz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-300 hover:text-indigo-400">
            Hanno
          </a>{' '}
          and{' '}
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
          first time using <strong>Tailwind CSS</strong> after learning Bootstrap. Most importantly, we learned to use{' '}
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
