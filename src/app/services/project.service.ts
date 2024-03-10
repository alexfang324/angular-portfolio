import { Injectable } from '@angular/core';
import { Project } from '../models/project';
import { PROJECTS } from '../data/projects';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor() {}

  getProject(id: string): Project {
    return PROJECTS.find((project) => project.id == id)!;
  }
}
