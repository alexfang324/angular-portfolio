import { Component } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { RouterService } from '../../services/router.service';
import { Project } from '../../models/project';
import { CommonModule } from '@angular/common';
import { Tag } from '../../models/tag';
import { Category } from '../../models/category';

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
  tagFilter: Tag | undefined;
  isMenuOpen: boolean = false;

  constructor(
    private projectService: ProjectService,
    private routerService: RouterService
  ) {}

  ngOnInit(): void {
    this.getPageContent();
  }

  //convert tag and categories id into actual objects and add to each project object
  getPageContent(): void {
    this.projects = this.projectService.getProjects();
    this.categories = this.projectService.getCategories();
    this.tags = this.projectService.getTags();

    //get the associate category object for each tag
    this.tags.forEach((tag) => {
      tag.category = this.categories!.find(
        (category) => category.id === tag.category_id
      )!;
    });

    //get the associated tag object for each project
    this.projects.forEach((project) => {
      project.tags = project.tag_ids.map((id) => {
        return this.tags!.find((tag) => tag.id === id)!;
      });
    });
  }

  setTagFilter(tag: Tag) {
    this.tagFilter = tag;
    this.isMenuOpen = false;
  }

  clearFilters() {
    this.tagFilter = undefined;
    this.isMenuOpen = false;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  closeMenu() {
    this.isMenuOpen = false;
  }

  shiftImage(event: MouseEvent): void {
    const element = event.currentTarget as HTMLElement;
    const rect = element.getBoundingClientRect();
    //calculate cursor distance from each of the edges
    const leftEdge = Math.abs(event.clientX - rect.left);
    const rightEdge = Math.abs(event.clientX - rect.right);
    const topEdge = Math.abs(event.clientY - rect.top);
    const bottomEdge = Math.abs(event.clientY - rect.bottom);

    //find edge the cursor is closest to and shift image accordingly
    const closestEdge = Math.min(leftEdge, rightEdge, topEdge, bottomEdge);
    switch (closestEdge) {
      case leftEdge:
        element.classList.add('shift-left');
        return;
      case rightEdge:
        element.classList.add('shift-right');
        return;
      case topEdge:
        element.classList.add('shift-top');
        return;
      case bottomEdge:
        element.classList.add('shift-bottom');
    }
  }

  unShiftImage(event: MouseEvent): void {
    const element = event.currentTarget as HTMLElement;
    const classes = element.classList;

    classes.forEach((className) => {
      if (className.includes('shift')) {
        element.classList.remove(className);
      }
    });
  }

  redirectToDetailPage(id: string) {
    this.routerService.redirectToProjectDetailPage(id);
  }
}
