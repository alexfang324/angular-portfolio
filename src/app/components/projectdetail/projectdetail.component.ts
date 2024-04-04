import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project';
import { Tag } from '../../models/tag';
import { Category } from '../../models/category';

@Component({
  selector: 'app-projectdetail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projectdetail.component.html',
  styleUrl: './projectdetail.component.scss',
})
export class ProjectdetailComponent {
  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private location: Location
  ) {}

  project?: Project;
  categories?: Category[];
  tags?: Tag[];
  observer?: IntersectionObserver;

  getProject(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.project = this.projectService.getProject(id!);
  }

  ngOnInit(): void {
    this.getProject();
    this.tags = this.projectService.getTags();
    this.categories = this.projectService.getCategories();

    //convert project category and tag ids into objects
    this.project!.tags = this.project!.tag_ids.map((id) => {
      return this.tags!.find((tag) => tag.id === id)!;
    });

    this.project!.categories = this.project!.category_ids.map((id) => {
      return this.categories!.find((category) => category.id === id)!;
    });

    //use javascript to compute and add the actual width of a width:100% container
    //as a css customer property for css calculation
    const element = document.getElementById('slider-container');
    const computedWidth = window
      .getComputedStyle(element!)
      .getPropertyValue('width');
    document.documentElement.style.setProperty(
      '--slider-container-width',
      computedWidth
    );
  }

  // add a goBack() method that uses the Location service to go back to the previous page
  // this is better than a link because it will work even if the user navigates to this page from a different source
  goBack(): void {
    this.location.back();
  }
}
