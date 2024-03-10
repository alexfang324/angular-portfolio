import { Project } from '../models/project';

export const PROJECTS: Project[] = [
  {
    id: 'audioengine',
    name: 'Audio Engine',
    imgPath: 'assets/images/audioengine.png',
    shortDescription: 'A Responsive Modern Website',
    longDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    techs: ['tech1', 'tech2', 'tech3', 'tech4', 'tech5', 'tech6'],
    highlights: [
      'Responsive Website',
      'Interactive UI',
      'Fullstack with backend and database',
    ],
  },
];
