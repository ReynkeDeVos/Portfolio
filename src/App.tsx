import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Atom,
  Code2,
  Database,
  ExternalLink,
  FileDown,
  Github,
  Linkedin,
  Mail,
  Network,
  Server,
  Sparkles,
} from 'lucide-react';

import profileImage from './assets/DSC05590.avif';

type Project = {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  source?: string;
  type: 'private' | 'client';
};

type Experience = {
  company: string;
  shortName: string;
  role: string;
  period: string;
  description: string[];
  link?: { label: string; url: string };
};

type Education = {
  institution: string;
  shortName: string;
  degree: string;
  period: string;
  description?: string[];
};

// Obfuscated email to prevent spam bots
const getEmail = () => {
  const user = 'renke.brixel';
  const domain = 'gmail.com';
  return `${user}@${domain}`;
};

const handleEmailClick = (e: React.MouseEvent) => {
  e.preventDefault();
  window.location.href = `mailto:${getEmail()}`;
};

function App() {
  const experiences: Experience[] = [
    {
      company: 'WBS Coding School',
      shortName: 'WBS',
      role: 'Instructor Web Development Frontend & Backend',
      period: 'Present',
      description: [
        'Teaching modern web development technologies',
        'Frontend and backend curriculum development',
      ],
    },
    // Add more experiences as needed
  ];

  const education: Education[] = [
    {
      institution: 'Your University',
      shortName: 'UNI',
      degree: 'Your Degree',
      period: 'Year - Year',
      description: ['Relevant coursework or achievements'],
    },
    // Add more education entries as needed
  ];

  const projects: Project[] = [
    {
      title: 'Project Name',
      description: 'Brief description of what the project does',
      tech: ['React', 'TypeScript', 'Node.js'],
      link: 'https://example.com',
      source: 'https://github.com/example',
      type: 'private',
    },
    // Add more projects as needed
  ];

  const privateProjects = projects.filter((p) => p.type === 'private');
  const clientProjects = projects.filter((p) => p.type === 'client');

  return (
    <div className='dark min-h-screen bg-[#0a0a0f] text-gray-100'>
      <div className='mx-auto max-w-6xl px-6 py-12'>
        {/* Hero Section - Side by Side Layout */}
        <section className='mb-20 flex flex-col gap-12 md:flex-row md:items-start md:justify-between'>
          <div className='flex-1'>
            <h1 className='mb-4 font-serif text-5xl font-bold italic md:text-6xl'>
              hi, Renke here.
            </h1>

            <pre className='mb-6 rounded-lg bg-[#12121a] p-4 text-base whitespace-pre-wrap'>
              <code className='font-mono'>
                <span className='text-purple-400'>const</span>{' '}
                <span className='text-blue-400'>bio</span> = [
                <br />
                {'  '}
                <span className='text-yellow-300'>&quot;Full-Stack Dev&quot;</span>,
                <br />
                {'  '}
                <span className='text-yellow-300'>&quot;Instructor at WBS Coding School&quot;</span>
                ,
                <br />
                {'  '}
                <span className='text-yellow-300'>&quot;Ultra runner&quot;</span>,
                <br />
                {'  '}
                <span className='text-yellow-300'>&quot;I use Arch btw&quot;</span>{' '}
                <span className='text-gray-500'>// 20+ years</span>
                <br />
                ];
              </code>
            </pre>

            <p className='mb-8 text-lg text-gray-400'>Germany, Hamburg</p>

            {/* Links */}
            <div className='flex flex-wrap items-center gap-4'>
              <a
                href='/CV_Renke_Brixel.pdf'
                target='_blank'
                rel='noopener noreferrer'
                className='flex cursor-pointer items-center gap-2 rounded-lg border border-gray-700 px-4 py-2 text-sm text-white hover:bg-[#12121a]'
              >
                Resume
                <FileDown size={16} />
              </a>
              <a
                href='https://www.linkedin.com/in/rbrixel/'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='LinkedIn'
                className='cursor-pointer text-gray-400 hover:text-white'
              >
                <Linkedin size={20} />
              </a>
              <a
                href='https://github.com/ReynkeDeVos'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='GitHub'
                className='cursor-pointer text-gray-400 hover:text-white'
              >
                <Github size={20} />
              </a>
              <button
                onClick={handleEmailClick}
                aria-label='Email'
                className='cursor-pointer text-gray-400 hover:text-white'
              >
                <Mail size={20} />
              </button>
            </div>
          </div>

          {/* Profile Image */}
          <div className='shrink-0'>
            <div className='relative'>
              <img
                src={profileImage}
                alt='Renke'
                className='h-64 w-64 rotate-3 rounded-lg object-cover shadow-2xl duration-300 hover:rotate-0 md:h-80 md:w-80'
              />
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className='mb-20'>
          <h2 className='mb-8 text-2xl font-bold'>Skills</h2>
          <div className='flex flex-wrap gap-4'>
            <div className='flex items-center gap-2 rounded-lg bg-[#12121a] px-4 py-3'>
              <Atom className='text-2xl text-blue-500' />
              <span>React</span>
            </div>
            <div className='flex items-center gap-2 rounded-lg bg-[#12121a] px-4 py-3'>
              <Code2 className='text-2xl text-blue-600' />
              <span>TypeScript</span>
            </div>
            <div className='flex items-center gap-2 rounded-lg bg-[#12121a] px-4 py-3'>
              <Sparkles className='text-2xl text-cyan-500' />
              <span>TailwindCSS</span>
            </div>
            <div className='flex items-center gap-2 rounded-lg bg-[#12121a] px-4 py-3'>
              <Server className='text-2xl text-green-600' />
              <span>Node.js</span>
            </div>
            <div className='flex items-center gap-2 rounded-lg bg-[#12121a] px-4 py-3'>
              <Network className='text-2xl text-gray-300' />
              <span>Express.js</span>
            </div>
            <div className='flex items-center gap-2 rounded-lg bg-[#12121a] px-4 py-3'>
              <Database className='text-2xl text-green-500' />
              <span>MongoDB</span>
            </div>
          </div>
        </section>

        {/* Work / Education Tabs */}
        <Card className='mb-20 border-gray-800 bg-[#12121a]'>
          <CardContent className='p-6'>
            <Tabs defaultValue='work'>
              <TabsList className='mb-6 w-full bg-[#0a0a0f]'>
                <TabsTrigger
                  value='work'
                  className='flex-1 cursor-pointer data-[state=active]:bg-gray-700'
                >
                  Work
                </TabsTrigger>
                <TabsTrigger
                  value='education'
                  className='flex-1 cursor-pointer data-[state=active]:bg-gray-700'
                >
                  Education
                </TabsTrigger>
              </TabsList>

              <TabsContent value='work'>
                <div className='space-y-0'>
                  {experiences.map((exp, idx) => (
                    <div
                      key={idx}
                      className='relative flex gap-6 border-l border-gray-800 py-8 pl-8'
                    >
                      {/* Timeline dot */}
                      <div className='absolute top-8 -left-3 flex h-6 w-6 items-center justify-center rounded-lg bg-[#12121a] text-[10px] font-bold ring-4 ring-[#0a0a0f]'>
                        {exp.shortName.charAt(0)}
                      </div>

                      {/* Company Logo */}
                      <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-gray-700 to-gray-900 text-xs font-bold'>
                        {exp.shortName}
                      </div>

                      <div className='flex-1'>
                        <p className='mb-1 text-sm text-gray-500'>{exp.period}</p>
                        <h3 className='mb-1 text-lg font-semibold text-white'>{exp.company}</h3>
                        <p className='mb-3 text-gray-400'>{exp.role}</p>
                        <ul className='mb-3 list-inside list-disc space-y-1 text-gray-400'>
                          {exp.description.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                        {exp.link && (
                          <Button variant='secondary' size='sm' asChild className='cursor-pointer'>
                            <a href={exp.link.url} target='_blank' rel='noopener noreferrer'>
                              <ExternalLink size={14} />
                              {exp.link.label}
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value='education'>
                <div className='space-y-0'>
                  {education.map((edu, idx) => (
                    <div
                      key={idx}
                      className='relative flex gap-6 border-l border-gray-800 py-8 pl-8'
                    >
                      {/* Timeline dot */}
                      <div className='absolute top-8 -left-3 flex h-6 w-6 items-center justify-center rounded-lg bg-[#12121a] text-[10px] font-bold ring-4 ring-[#0a0a0f]'>
                        {edu.shortName.charAt(0)}
                      </div>

                      {/* Institution Logo */}
                      <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-gray-700 to-gray-900 text-xs font-bold'>
                        {edu.shortName}
                      </div>

                      <div className='flex-1'>
                        <p className='mb-1 text-sm text-gray-500'>{edu.period}</p>
                        <h3 className='mb-1 text-lg font-semibold text-white'>{edu.institution}</h3>
                        <p className='mb-3 text-gray-400'>{edu.degree}</p>
                        {edu.description && (
                          <ul className='list-inside list-disc space-y-1 text-gray-400'>
                            {edu.description.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Featured Projects */}
        <section id='projects'>
          <h2 className='mb-8 text-2xl font-bold'>Featured Projects</h2>

          {clientProjects.length > 0 && (
            <div className='mb-8'>
              <h3 className='mb-4 text-lg font-semibold text-gray-400'>Client Work</h3>
              <div className='grid gap-6 md:grid-cols-2'>
                {clientProjects.map((project, idx) => (
                  <Card key={idx} className='border-gray-800 bg-[#12121a] hover:bg-[#16161f]'>
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className='mb-4 flex flex-wrap gap-2'>
                        {project.tech.map((tech, i) => (
                          <Badge key={i} variant='secondary'>
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className='flex gap-3'>
                        {project.link && (
                          <Button variant='secondary' size='sm' asChild className='cursor-pointer'>
                            <a href={project.link} target='_blank' rel='noopener noreferrer'>
                              <ExternalLink size={14} />
                              Website
                            </a>
                          </Button>
                        )}
                        {project.source && (
                          <Button variant='secondary' size='sm' asChild className='cursor-pointer'>
                            <a href={project.source} target='_blank' rel='noopener noreferrer'>
                              <Github size={14} />
                              Source
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {privateProjects.length > 0 && (
            <div>
              {clientProjects.length > 0 && (
                <h3 className='mb-4 text-lg font-semibold text-gray-400'>Private Projects</h3>
              )}
              <div className='grid gap-6 md:grid-cols-2'>
                {privateProjects.map((project, idx) => (
                  <Card key={idx} className='border-gray-800 bg-[#12121a] hover:bg-[#16161f]'>
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className='mb-4 flex flex-wrap gap-2'>
                        {project.tech.map((tech, i) => (
                          <Badge key={i} variant='secondary'>
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className='flex gap-3'>
                        {project.link && (
                          <Button variant='secondary' size='sm' asChild className='cursor-pointer'>
                            <a href={project.link} target='_blank' rel='noopener noreferrer'>
                              <ExternalLink size={14} />
                              Website
                            </a>
                          </Button>
                        )}
                        {project.source && (
                          <Button variant='secondary' size='sm' asChild className='cursor-pointer'>
                            <a href={project.source} target='_blank' rel='noopener noreferrer'>
                              <Github size={14} />
                              Source
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* Footer */}
        <footer className='mt-20 border-t border-gray-800 pt-8 text-center text-sm text-gray-500'>
          <div className='mb-4 flex justify-center gap-4'>
            <a href='https://www.linkedin.com/in/rbrixel/' className='hover:text-white'>
              <Linkedin size={18} />
            </a>
            <a href='https://github.com/ReynkeDeVos' className='hover:text-white'>
              <Github size={18} />
            </a>
            <button onClick={handleEmailClick} className='cursor-pointer hover:text-white'>
              <Mail size={18} />
            </button>
          </div>
          <p>© {new Date().getFullYear()} | Portfolio</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
