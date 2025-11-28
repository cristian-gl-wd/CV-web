import { Person } from '../core/interfaces/portfolio.model';

export const mockPerson: Person = {
  name: 'Cristian',
  surname: 'García López',
  personKey: 'cristian-gl-wd',
  profilePictureUrl: 'me',
  cvUrl: 'CristianGarciaLopez_CV',
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
            { nameKey: 'angular', iconClass: 'devicon-angularjs-plain' },
            { nameKey: 'typescript', iconClass: 'devicon-typescript-plain' },
            { nameKey: 'rxjs', iconClass: 'devicon-rxjs-plain' },
            { nameKey: 'ngrx', iconClass: 'devicon-redux-original' },
            { nameKey: 'scss', iconClass: 'devicon-sass-original' },
          ],
        },
        {
          id: 2,
          jobKey: 'software_developer',
          location: { countryKey: 'spain', cityKey: 'valencia' },
          period: { start: new Date('2019-06'), end: new Date('2021-08') },
          skills: [
            { nameKey: 'cplusplus', iconClass: 'devicon-cplusplus-plain' },
            { nameKey: 'csharp', iconClass: 'devicon-csharp-plain' },
            { nameKey: 'mysql', iconClass: 'devicon-mysql-plain-wordmark' },
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
            { nameKey: 'javascript', iconClass: 'devicon-javascript-plain' },
            { nameKey: 'html5', iconClass: 'devicon-html5-plain' },
            { nameKey: 'css3', iconClass: 'devicon-css3-plain' },
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
        { nameKey: 'angular', iconClass: 'devicon-angularjs-plain' },
        { nameKey: 'typescript', iconClass: 'devicon-typescript-plain' },
        { nameKey: 'scss', iconClass: 'devicon-sass-original' },
      ],
      repoUrl: 'https://github.com/cristian-gl-wd/CV-web',
      demoUrl: 'https://cv.cristian-gl.com',
    },
  ],
  skills: [
    {
      titleKey: 'languages',
      skills: [
        { nameKey: 'typescript', iconClass: 'devicon-typescript-plain' },
        { nameKey: 'javascript', iconClass: 'devicon-javascript-plain' },
        { nameKey: 'cplusplus', iconClass: 'devicon-cplusplus-plain' },
        { nameKey: 'csharp', iconClass: 'devicon-csharp-plain' },
        { nameKey: 'java', iconClass: 'devicon-java-plain' }
      ]
    },
    {
      titleKey: 'frontend',
      skills: [
        { nameKey: 'angular', iconClass: 'devicon-angularjs-plain' },
        { nameKey: 'kendoui', iconClass: '' },
        { nameKey: 'angularmaterial', iconClass: 'devicon-angularmaterial-plain' },
        { nameKey: 'bootstrap', iconClass: 'devicon-bootstrap-plain' },
        { nameKey: 'rxjs', iconClass: 'devicon-rxjs-plain' },
        { nameKey: 'ngrx', iconClass: 'devicon-redux-original' },
        { nameKey: 'scss', iconClass: 'devicon-sass-original' },
        { nameKey: 'html5', iconClass: 'devicon-html5-plain' },
        { nameKey: 'css3', iconClass: 'devicon-css3-plain' },
        { nameKey: 'jquery', iconClass: 'devicon-jquery-plain' },
        { nameKey: 'jest', iconClass: 'devicon-jest-plain' },
        { nameKey: 'primeng', iconClass: 'devicon-primeng-plain' }
      ]
    },
    {
      titleKey: 'databases',
      skills: [
        { nameKey: 'mysql', iconClass: 'devicon-mysql-plain-wordmark' },
        { nameKey: 'sqlserver', iconClass: 'devicon-microsoftsqlserver-plain' }
      ]
    },
    {
      titleKey: 'tools',
      skills: [
        { nameKey: 'git', iconClass: 'devicon-git-plain' },
        { nameKey: 'jira', iconClass: 'devicon-jira-plain' },
        { nameKey: 'postman', iconClass: 'devicon-postman-plain' },
        { nameKey: 'docker', iconClass: 'devicon-docker-plain' },
        { nameKey: 'vscode', iconClass: 'devicon-vscode-plain' },
        { nameKey: 'proxmox', iconClass: 'devicon-proxmox-plain-wordmark' }
      ]
    }
  ],
};
