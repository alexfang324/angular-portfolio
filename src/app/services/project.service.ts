import { Injectable } from '@angular/core';
import { Project } from '../models/project';
import { Theme } from '../models/theme';
import { Category } from '../models/category';
import { Tag } from '../models/tag';
import PROJECTS from '../data/projects.json';
import THEMES from '../data/themes.json';
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

  getProject(id: string): Project {
    return PROJECTS.find((project) => project.id == id)!;
  }

  getThemes(): Theme[] {
    return THEMES;
  }

  getCategories(): Category[] {
    return CATEGORIES;
  }

  getTags(): Tag[] {
    return TAGS;
  }
}
