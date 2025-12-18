import slsLogo from '../assets/company_logos/SLS.svg';
import bielefeldLogo from '../assets/company_logos/UBielefeld.avif';
import closelinkLogo from '../assets/company_logos/closelink.avif';
import livLogo from '../assets/company_logos/liv.svg';
import ukeLogo from '../assets/company_logos/uke.svg';
import wbsLogo from '../assets/company_logos/wbs.avif';
import type { Education, Experience, Project } from '../types';

export const experiences: Experience[] = [
  {
    company: 'WBS Coding School',
    shortName: 'WBS',
    role: 'Instructor Software Development Frontend & Backend',
    period: 'Mar 2025 – Present',
    description: [
      'Teaching modern web development technologies',
      // 'Frontend and backend curriculum development',
    ],
    logo: wbsLogo,
    websiteUrl: 'https://www.wbscodingschool.com/',
  },
  {
    company: 'Closelink',
    shortName: 'Closelink',
    role: 'Front-End Web Developer Intern',
    period: 'Nov 2024 – Dec 2024',
    description: [
      'Modernized UI with optimized React, TypeScript, and Formik components',
      'Improved design consistency collaborating with developers and designer',
    ],
    logo: closelinkLogo,
    websiteUrl: 'https://www.closelink.com/',
  },
  {
    company: 'Leibniz Institute for Virology (LIV)',
    shortName: 'LIV',
    role: 'Biological-Technical Assistant',
    period: 'Apr 2014 – Sep 2023',
    description: [
      "Researched the 'hijacking' strategies used by common viruses to infect human hosts",
      'Hazardous materials officer: Implementation and training of software solutions',
      'Collaboration in multidisciplinary teams and lab management',
    ],
    logo: livLogo,
    websiteUrl: 'https://www.leibniz-liv.de/en/research/research-units/virus-host-interaction',
  },
  {
    company: 'University Medical Center Hamburg-Eppendorf (UKE)',
    shortName: 'UKE',
    role: 'Biological-Technical Assistant',
    period: 'Aug 2012 – Mar 2014',
    description: [
      'Studied the fundamental triggers that cause breast cancer cells to break away and take root in new parts of the body',
      'Sample analysis and database maintenance',
      'Supervision of interns',
    ],
    logo: ukeLogo,
    websiteUrl:
      'https://www.uke.de/kliniken-institute/institute/institut-f%C3%BCr-tumorbiologie/index.html',
  },
  {
    company: 'University of Utah School of Medicine',
    shortName: 'Utah',
    role: 'Research Intern',
    period: 'Jan 2012 – Apr 2012',
    description: [
      'Reprogrammed patient skin cells into neurons to model and predict brain injury risks during heart transplantation',
      'Maintained and updated plasmid database',
    ],
    websiteUrl: 'https://medicine.utah.edu/',
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
      'Hands-on projects building full-stack applications',
    ],
    logo: wbsLogo,
    websiteUrl: 'https://www.wbscodingschool.com/',
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
    logo: slsLogo,
    websiteUrl:
      'https://www.uke.de/organisationsstruktur/tochtergesellschaften/school-of-life-science/index.html',
  },
  {
    institution: 'Bielefeld University',
    shortName: 'UBI',
    degree: 'Bioinformatics and Genome Research (Bachelor)',
    period: 'Oct 2005 – Feb 2010',
    description: ['Studies without degree', 'Knowledge in Java and Haskell'],
    logo: bielefeldLogo,
    websiteUrl:
      'https://ekvv.uni-bielefeld.de/sinfo/publ/bachelor/bioinformatik;jsessionid=DEC48FB00A23BC8E59B48932E0DFCAE8',
  },
];

export const projects: Project[] = [
  {
    title: 'Elder Gym Bro App',
    description:
      'Fitness tracker for nerds. Implementation of user authentication, workout plan management, and progress tracking. Integration of APIs for external fitness data, user-friendly UI/UX design.',
    tech: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'Mongoose', 'JWT'],
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
