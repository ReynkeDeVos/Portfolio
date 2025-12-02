export type Project = {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  source?: string;
  type: 'private' | 'client';
};

export type Experience = {
  company: string;
  shortName: string;
  role: string;
  period: string;
  description: string[];
  link?: { label: string; url: string };
  logo?: string;
};

export type Education = {
  institution: string;
  shortName: string;
  degree: string;
  period: string;
  description?: string[];
  logo?: string;
};

