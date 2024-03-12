import { Component } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project';
import { CommonModule } from '@angular/common';
import { Category } from '../../models/category';
import { Tag } from '../../models/tag';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects?: Project[];
  categories?: Category[];
  tags?: Tag[];
  categoryFilter: Category | undefined;
  tagFilter: Tag | undefined;

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.getPageContent();
  }

  getPageContent(): void {
    this.projects = this.projectService.getProjects();
    this.categories = this.projectService.getCategories();
    this.tags = this.projectService.getTags();
  }

  setTagFilter(tag: Tag) {
    this.tagFilter = tag;
    console.log('Tag filter clicked');
  }
  setCategoryFilter(category: Category) {
    this.categoryFilter = category;
  }
  clearFilters() {
    this.categoryFilter = undefined;
    this.tagFilter = undefined;
  }
}
