import { SectionHeader } from "../util/SectionHeader";
import { Project } from "./Project";

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
    title: "Elder Gym Bro App",
    imgSrc: "/project-imgs/elder-gym.avif",
    blurDataURL:
      "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUEAAAD5bWV0YQAAAAAAAAAvaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAFBpY3R1cmVIYW5kbGVyAAAAAA5waXRtAAAAAAABAAAAHmlsb2MAAAAARAAAAQABAAAAAQAAASEAAAR/AAAAKGlpbmYAAAAAAAEAAAAaaW5mZQIAAAAAAQAAYXYwMUNvbG9yAAAAAGppcHJwAAAAS2lwY28AAAAUaXNwZQAAAAAAAACWAAABLQAAABBwaXhpAAAAAAMICAgAAAAMYXYxQ4EgAAAAAAATY29scm5jbHgAAQANAAaAAAAAF2lwbWEAAAAAAAAAAQABBAECgwQAAASHbWRhdAoNIAAAA8SssP/5oCGg0jLtCBAAkAAmsQeKgtTBwRFVAIDY1qTzrjBqRh0ZeLhy2iFoVqhWPO4By5XjRo/hT0m4pGphXleQD43bqT6Q7BfLoyxCtH7RTQzbgYkt76mCBcglV3dC1qPjTtep/Nbyr7jk2k5lQy89icpv1mI6L1miHOYG0sIgx1+VW9gLztsn2ZAT+32VyRsCq/s/9WLXLwDodcNMwzmJSbY6URnAeFylOQZD7hHISsimHnrxsScfBUXbarrgzFy/xZXADe3HqwK0XmhjzdslMPeQGoANnWYEzq58KEnOjo1g+ntLftz6lbNMxv46tdVNGMR2Dobkuiul6qx6n1532Fl2Os11zdeJfWuopdsaTdF6ncCh1eznyqNgqljPLA3mVHoBAASwiD98E65IOYGx4Rswq5HU3lFMaFT2TQB48eD8qYH3gaoTw2Iwzt66kJ/RWo/LKwmuTYsQ5Bg5Oi3VFKCaqyUbNOtB5rdKECIeQ/REB7vnV/K/5dtr2o3jiOIb1sZa52Okk6J3/+g4JyMxcybJMQ+JZQD3q+q17oOAKU+sxDLxJP+nt1LANgxqZQOF6QMbFS37rWs4oS8ff08/jJRsoDOQqUtAvoiiFveB87yKA2gSCffjCWVE7ElCqs3BnjGMf9tO5/h5JYzeSlttP4/avizAid95muxWY/y4i64z7hiKiORpLKkPRas9tFMmR93s8zcI1mySQKuHjUkMxzbIuLj39UllOM47mIbjAbzjP4JX0rBxOnAwVsj+7uis5j8VTOdknczRcLqlFdq84vV7in3klZ6SBWVGd6ZxL5yCCZBRmHynLwgeTjb5ND83EsCIomSvrlYQGmZmY3ciZk8wX61PuJ6DUxX+YZtYhYFAXDgAheydKQoFdhyS5pbqAQRg8mTQq2ER/5QDu3F0RLv3+BzFYy/jrsaP9yoomiFVo7nIsua85u/krJaNgCGZN9WyBK7cQ2Yx1frhFp4DRG5zV81GV80BP0oRegNfXs+sFl5ydyxJp9QlDDLwYqpnjUqNgF55NKwINOH0E87V8A15XgE+8mB1IKPuASJs41YLiChzzlZLHCZpiUYkemWfufd+x+iREOWZCHO4jBdPc4kUC3jtYxRoRphYpdU2O9x/Pqrp+/tdnwCSCEvCk5NtrNGLGK0CDkk80RYqqTu688LPApKJz8zuH5huDbNAh7qLNQ+qaMeU59KpvA5NWlTjppt9VBKFt7fAFfDWEyshayYib8FoRprzq5ZJ320gclW/HCHiptUA6RI0kikhi0ENzI9pkWTXCvbj4wfPCLlequDyDYFxGjh47MI6NPqLY9qfcOZULwrJKxgTpndvyS04eGS3QcpDPHxEO47M+wbsNNyfwyaxnaF31OYzMIkZEmXuLkUZXGbfZfPUEwG17Gk8JA8XIgmOg9b8ooJ6pt/ClN9GsCLX7QEj/1ULMOxrnR5J2mN146t7Krhz9QuG1ZvNaGE3tb0sPuZ3K9CqpklE9AsLhQGeVDTzH7mQ9MFktp314sXR1DvI",
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
          {/*
           */}
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
            &quot;Have I Been Pwned&quot;
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
          {/*
           */}
          .
        </p>
      </>
    ),
  },
  {
    title: "Pokebattle App",
    imgSrc: "/project-imgs/pokebattle.avif",
    blurDataURL:
      "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUEAAAD5bWV0YQAAAAAAAAAvaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAFBpY3R1cmVIYW5kbGVyAAAAAA5waXRtAAAAAAABAAAAHmlsb2MAAAAARAAAAQABAAAAAQAAASEAAARZAAAAKGlpbmYAAAAAAAEAAAAaaW5mZQIAAAAAAQAAYXYwMUNvbG9yAAAAAGppcHJwAAAAS2lwY28AAAAUaXNwZQAAAAAAAADIAAAAbQAAABBwaXhpAAAAAAMICAgAAAAMYXYxQ4EgAAAAAAATY29scm5jbHgAAQANAAaAAAAAF2lwbWEAAAAAAAAAAQABBAECgwQAAARhbWRhdAoNIAAAA7Y+w//mgIaDSDLHCBAAkAA0yemKQRgyKuDBdY0ASNfqvsqtMnhg/fsI02i7h/j1y/gI4T+sXoPGMEjA38oq7+p0K3pnH6hqJKniMThegNtItK1PohJzRPFB2i8qBzj6sRkutUX9nv0CiNEtJ7v9e1BhMew22IQcsWObAv+IsZM5Em3pipbOWA9QRgjnisbzmZzmFGLU1ouep6hOHuqk9gKyvwtVXItaVUnAwdDJB1O64miXk1MR3Olwh7Kf6XfbUJpl4XiFmE7xOxj1D1gVTNnv8cXwi1oEwf38yj1XeTGkNte9UKeqE9+8n4SqGex4DOyxzv/7iXk61ygucv8DW11Kztq6RFOudb03BpNUz6dX4ZaWRzx4Nqf/gacLr1/fFkLNnLLpX40d+NOlFILBV2tIc3mHpuk1d7QhAyr/O10DRNoO5Sj1sO7c+SnvwFwHdZpOU3tk5ZZgz5mO4wVjLLswo/VGjyGrLfCE4e5Qj2U/32TgWc41Xy/D44lZ0f7sbXnEz+1xNIwVL/aVhckSabqCcAMFuqxf9RxcGeqwxk3r0rLCsuJ8BnmJbn170EbDyoF8C2HMSXTaCMQc8/tLsxjGXo2d0oN8PMktd9CQG7QGk1vGBsS4PZyz8k7EdPYE8RxrajhjTD2HOruId+LNqOYs46jj0u9W5es7Ga2ez5nPr0E8U5zgdN3dm3yUgNpEldmAdl9DgznkJ6uMY8BumReLlW4A+AK0U1U9lksXmBpGDYhr52kixyqYcDbjwERKyVOse8gzdjy4g65Qah/5iTIEAW5Vi2ahdHRLZrao1XAc6GZi2vPsudvcjKqZEPyUS8OWJ2pMANRkXeKLBnUYacq1hAqJF0mykUb8to5gT0L+npgPGQdEQEy495sTXZJLIiFv8t1n4f+6zCRegN21R9SvjxscHQHoLmNGV61BzhV2p7uWgVMPAcSP2++tkjOOSIEjJiWrdauPMO+SulzVSKz7a4q651X4X3SH5/5fnAKlSwz89MYWoig9mskVS/QyVJ56WGF0eKYbAdqXlXjIcn1FVEKdZFfQjfJY/EbJl0xSfBPUv5dPcncl8n14tom0nCFx9773w+60aPxxBUJ2guAhcLqoYjTv+cT5JjWh3G66trOI+fSCj+B3mx+LVZUwnQu1kQaw0TwDXd74UgCvwxNx7+Rvp9Pg8qmAixb3u6RbjUS+AP8lFSFukWIy/lt+9oXIbZiVs1W0/B+koT0jvMBQo5NM2rkAhTohSIyRAzRwW9q2iGtlcbLBrTYDAxNR6oJVc3AMZfxluNvyu0v/98nfofTMPWkBHCrMIEaEor23xf6FQLsHlFGXF3xiQ9hMvlHjtR9MywO0u4aafCGM+G2fBWImilYP3ywoXZ2seDgSQZahl0OnXRwKufm/1Rfy5Jd6U/y+q+hFv4Auyh5LHf6VQy2o6s7Tvg1Pf1P9s7q0NEe07TgHNffEkYnvgpWhQwwtMA==",
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
          {/*
           */}
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
    imgSrc: "/project-imgs/todo-app.avif",
    blurDataURL:
      "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUEAAAD5bWV0YQAAAAAAAAAvaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAFBpY3R1cmVIYW5kbGVyAAAAAA5waXRtAAAAAAABAAAAHmlsb2MAAAAARAAAAQABAAAAAQAAASEAAAFUAAAAKGlpbmYAAAAAAAEAAAAaaW5mZQIAAAAAAQAAYXYwMUNvbG9yAAAAAGppcHJwAAAAS2lwY28AAAAUaXNwZQAAAAAAAADIAAAArAAAABBwaXhpAAAAAAMICAgAAAAMYXYxQ4EgAAAAAAATY29scm5jbHgAAQANAAaAAAAAF2lwbWEAAAAAAAAAAQABBAECgwQAAAFcbWRhdAoNIAAAA749Wf/zQENBpDLCAhQApAAQ4khxDQMgl6V+KepuCaW5ZY0g1VKrtkAYGiagsBS69k30UrstFxoFCzLkyAjwmEP0h8qZPB4+2KwKlIyMQR+9C2r3QhXlOm5aIQAVHs1yAh+I4ToqdjT4d97miObAqQiujspmcTwnMSpd3bRZBP4rKS3PEKCcTW4uEV12GfGUHxRExowlgWPYcdgoVHCcXrAOQ5qApZmxeinS7Ub2TiWZ/jrG37K3bOvjPl++OIbT0TLa218AG6Vb1uWgPIaL7tHeMBprEeBvxK7blLu5RIgoMWCl9bIkbHwQ2VODoOX/7xJs/HAr19dRdoFfleK9ScFtcI9W61yCjJyPjNRYei9pG0XGXGIgmuwMk04NiPkKvcQfxoaJymoXvQx78E4KJyGfq/eW6p5q3VW5WkzLSc73EaQIgqigPsGrE/B7ATo=",
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
    imgSrc: "/project-imgs/hackz0rs-news.avif",
    blurDataURL:
      "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUEAAAD5bWV0YQAAAAAAAAAvaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAFBpY3R1cmVIYW5kbGVyAAAAAA5waXRtAAAAAAABAAAAHmlsb2MAAAAARAAAAQABAAAAAQAAASEAAAC/AAAAKGlpbmYAAAAAAAEAAAAaaW5mZQIAAAAAAQAAYXYwMUNvbG9yAAAAAGppcHJwAAAAS2lwY28AAAAUaXNwZQAAAAAAAADIAAAAegAAABBwaXhpAAAAAAMICAgAAAAMYXYxQ4EgAAAAAAATY29scm5jbHgAAQANAAaAAAAAF2lwbWEAAAAAAAAAAQABBAECgwQAAADHbWRhdAoNIAAAA7Y/k//mgIaDSDKtARQAJAADgGGCkEgcqDj9a3HCIldWkg0z8CnYSywZNQwxzw8+9HBtaHkCubV5wFDAW/aqJQribLmyWZ0guyGKHdd5w1oqFUAPm7GbUgQpfbfQUK7Cbn+DA2yXvna/HFYp0aT+Q5Wr61+AYwKO2xN2bWYU6Vm7ddDkORHxs2tuGmF6npyfmDVF1YRfPmL83un2fglIUfHXyPvAO2lS4Y/ywra92K0BruD1BKcD28QY",
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
          {/*
           */}
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
