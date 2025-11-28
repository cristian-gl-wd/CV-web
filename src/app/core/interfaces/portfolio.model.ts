export interface Skill {
  nameKey: string;
  iconClass: string;
}

export interface SkillCategory {
  titleKey: string;
  skills: Skill[];
}

export interface Period {
  start: Date;
  end?: Date;
}

export interface Location {
  countryKey: string;
  cityKey: string;
}

export interface Job {
  id: number;
  jobKey: string;
  isCurrent?: boolean;
  location: Location;
  period: Period;
  skills: Skill[];
}

export interface Company {
  id: number;
  companyKey: string;
  jobs: Job[];
}

export interface Degree {
  id: number
  studyKey: string;
  period: Period;
}

export interface EducationCenter {
  id: number;
  academyKey: string;
  location: Location;
  degrees: Degree[];
}

export interface Project {
  id: number;
  name: string;
  description: string;
  techStack: Skill[];
  repoUrl?: string;
  demoUrl?: string;
}

export interface Person {
  name: string;
  surname: string;
  personKey: string;
  profilePictureUrl: string;
  cvUrl: string;
  experience: Company[];
  education: EducationCenter[];
  projects: Project[];
  skills: SkillCategory[];
}
