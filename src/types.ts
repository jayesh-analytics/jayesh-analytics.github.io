export interface ProjectItem {
  id: string;
  number: number;
  title: string;
  tools: string[];
  githubLink: string;
  description: string;
  category: 'BI' | 'SQL' | 'Python' | 'Fintech';
  metrics?: { label: string; value: string }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  tools: string[];
  githubLink: string;
  points: string[];
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  link: string;
  issuerType: 'google' | 'tata' | 'coding-ninjas' | 'coursera';
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: string[];
  tagline: string;
  iconName: string;
}

export interface EducationItem {
  university: string;
  degree: string;
  years: string;
}

export interface PortfolioData {
  name: string;
  roles: string[];
  heading: string;
  subheading: string;
  aboutMe: string;
  experience: ExperienceItem[];
  projects: ProjectItem[];
  education: EducationItem[];
  certificates: CertificateItem[];
  skills: SkillCategory[];
  cta: {
    headline: string;
    github: string;
    email: string;
    linkedin: string;
    contact: string;
    specialties: string[];
  };
}
