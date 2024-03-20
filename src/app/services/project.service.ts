import { Injectable } from '@angular/core';
import { Project } from '../models/project';
import { Tag } from '../models/tag';
import PROJECTS from '../data/projects.json';
import TAGS from '../data/tags.json';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor() {}

  getProjects(): Project[] {
    return PROJECTS;
  }

  getTags(): Tag[] {
    return TAGS;
  }

  getProject(id: string): Project {
    return PROJECTS.find((project) => project.id == id)!;
  }
}
