import { Person, Skill } from '../core/interfaces/portfolio.model';

export const mockPerson: Person = {
  name: 'Cristian',
  surname: 'García López',
  personKey: 'cristian-gl-wd',
  profilePictureUrl: 'me',
  experience: [
    {
      id: 1,
      companyKey: 'grupo_alonso',
      jobs: [
        {
          id: 1,
          jobKey: 'frontend_developer',
          isCurrent: true,
          location: { countryKey: 'spain', cityKey: 'valencia' },
          period: { start: new Date('2021-09'), end: new Date() },
          skills: [
            { name: 'Angular', levelKey: 'advanced' },
            { name: 'TypeScript', levelKey: 'advanced' },
            { name: 'RxJS', levelKey: 'proficient' },
            { name: 'Ngrx', levelKey: 'proficient' },
            { name: 'SCSS', levelKey: 'advanced' },
          ],
        },
        {
          id: 2,
          jobKey: 'software_developer',
          location: { countryKey: 'spain', cityKey: 'valencia' },
          period: { start: new Date('2019-06'), end: new Date('2021-08') },
          skills: [
            { name: 'C++', levelKey: 'proficient' },
            { name: 'C#', levelKey: 'proficient' },
            { name: 'MySQL', levelKey: 'intermediate' },
          ],
        },
      ],
    },
    {
      id: 2,
      companyKey: 'my_energy_map',
      jobs: [
        {
          id: 3,
          jobKey: 'web_developer',
          location: { countryKey: 'spain', cityKey: 'valencia' },
          period: { start: new Date('2016-03'), end: new Date('2017-09') },
          skills: [
            { name: 'JavaScript', levelKey: 'proficient' },
            { name: 'HTML5', levelKey: 'proficient' },
            { name: 'CSS3', levelKey: 'proficient' },
          ],
        },
      ],
    },
  ],
  education: [
    {
      id: 1,
      academyKey: 'conselleria',
      location: { countryKey: 'spain', cityKey: 'valencia' },
      degrees: [
        {
          id: 1,
          studyKey: 'daw',
          period: { start: new Date('2015'), end: new Date('2017') },
        },
      ],
    },
    {
      id: 2,
      academyKey: 'la_senia',
      location: { countryKey: 'spain', cityKey: 'valencia' },
      degrees: [
        {
          id: 2,
          studyKey: 'smr',
          period: { start: new Date('2013'), end: new Date('2015') },
        },
      ],
    },
  ],
  projects: [
    {
      id: 1,
      name: 'Portfolio Personal',
      description: 'Una web de portfolio personal interactiva construida con Angular para mostrar habilidades y experiencia profesional.',
      techStack: [
        { name: 'Angular', levelKey: 'advanced' },
        { name: 'TypeScript', levelKey: 'advanced' },
        { name: 'SCSS', levelKey: 'advanced' },
      ],
      repoUrl: 'https://github.com/cristian-gl-wd/portfolio-web',
      demoUrl: 'https://cristiangarcia.dev',
    },
  ],
  skills: [
    { name: 'Angular', levelKey: 'advanced' },
    { name: 'TypeScript', levelKey: 'advanced' },
    { name: 'RxJS', levelKey: 'proficient' },
    { name: 'Ngrx', levelKey: 'proficient' },
    { name: 'SCSS', levelKey: 'advanced' },
    { name: 'JavaScript', levelKey: 'proficient' },
    { name: 'HTML5', levelKey: 'proficient' },
    { name: 'CSS3', levelKey: 'proficient' },
    { name: 'C++', levelKey: 'proficient' },
    { name: 'C#', levelKey: 'proficient' },
    { name: 'MySQL', levelKey: 'intermediate' },
  ],
};