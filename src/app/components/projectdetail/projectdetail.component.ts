import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project';

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

  getProject(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.project = this.projectService.getProject(id!);
  }

  ngOnInit(): void {
    this.getProject();
  }

  // add a goBack() method that uses the Location service to go back to the previous page
  // this is better than a link because it will work even if the user navigates to this page from a different source
  goBack(): void {
    this.location.back();
  }
}
