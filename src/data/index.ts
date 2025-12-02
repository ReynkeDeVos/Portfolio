import bielefeldLogo from '../assets/company_logos/UBielefeld.png';
import closelinkLogo from '../assets/company_logos/closelink.jpg';
import livLogo from '../assets/company_logos/liv.svg';
import ukeLogo from '../assets/company_logos/uke.svg';
import wbsLogo from '../assets/company_logos/wbs.png';
import type { Education, Experience, Project } from '../types';

export const experiences: Experience[] = [
  {
    company: 'WBS Coding School',
    shortName: 'WBS',
    role: 'Instructor Web Development Frontend & Backend',
    period: 'Present',
    description: [
      'Teaching modern web development technologies',
      'Frontend and backend curriculum development',
    ],
    logo: wbsLogo,
  },
  {
    company: 'Closelink',
    shortName: 'Closelink',
    role: 'Front-End Web Developer Intern',
    period: 'Nov 2024 – Dec 2024',
    description: [
      'Modernized UI with optimized React, TypeScript, and Formik components',
      'Improved design consistency collaborating with developers and designer',
      'Enhanced code readability following best practices',
    ],
    logo: closelinkLogo,
  },
  {
    company: 'Leibniz Institute for Virology (LIV)',
    shortName: 'LIV',
    role: 'Biological-Technical Assistant',
    period: 'Apr 2014 – Sep 2023',
    description: [
      'Hazardous materials officer: Implementation and training of software solutions',
      'Collaboration in multidisciplinary teams and lab management',
    ],
    logo: livLogo,
  },
  {
    company: 'University Medical Center Hamburg-Eppendorf (UKE)',
    shortName: 'UKE',
    role: 'Biological-Technical Assistant',
    period: 'Aug 2012 – Mar 2014',
    description: ['Sample analysis and database maintenance', 'Supervision of interns'],
    logo: ukeLogo,
  },
];

export const education: Education[] = [
  {
    institution: 'WBS Coding School',
    shortName: 'WBS',
    degree: 'Full-Stack Web & App Development Bootcamp',
    period: 'Mar 2024 – Jul 2024',
    description: [
      'Training in web development with focus on MERN stack technologies',
      'Capstone project: Elder Gym Bro App - Fitness tracker for nerds',
      'PokémonBattle - Pokémon arena with Context for smooth gameplay',
    ],
    logo: wbsLogo,
  },
  {
    institution: 'School of Life Science Hamburg GmbH',
    shortName: 'SLS',
    degree: 'State-Certified Biological-Technical Assistant',
    period: 'Aug 2010 – Jul 2012',
    description: [
      'Comprehensive training in biological and technical methods and analysis',
      'Second best in the training program (GPA: 1.6)',
    ],
    logo: ukeLogo,
  },
  {
    institution: 'Bielefeld University',
    shortName: 'UBI',
    degree: 'Bioinformatics and Genome Research (Bachelor)',
    period: 'Oct 2005 – Feb 2010',
    description: ['Studies without degree', 'Knowledge in Java and Haskell'],
    logo: bielefeldLogo,
  },
];

export const projects: Project[] = [
  {
    title: 'Elder Gym Bro App',
    description:
      'Fitness tracker for nerds. Implementation of user authentication, workout plan management, and progress tracking. Integration of APIs for external fitness data, user-friendly UI/UX design.',
    tech: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    source: 'https://github.com/ReynkeDeVos',
    type: 'private',
  },
  {
    title: 'PokémonBattle',
    description:
      'Pokémon arena with Context for smooth gameplay. Interactive game with React Context API for state management.',
    tech: ['React', 'Context API', 'CSS3', 'Node.js'],
    source: 'https://github.com/ReynkeDeVos',
    type: 'private',
  },
];
