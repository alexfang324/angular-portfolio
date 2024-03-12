import { Injectable } from '@angular/core';
import { Project } from '../models/project';
import { Category } from '../models/category';
import { Tag } from '../models/tag';
import PROJECTS from '../data/projects.json';
import CATEGORIES from '../data/categories.json';
import TAGS from '../data/tags.json';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor() {}

  getProjects(): Project[] {
    return PROJECTS;
  }

  getCategories(): Category[] {
    return CATEGORIES;
  }

  getTags(): Tag[] {
    return TAGS;
  }

  getProject(id: string): Project {
    return PROJECTS.find((project) => project.id == id)!;
  }
}
