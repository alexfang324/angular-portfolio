import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import projects from '../assets/projects.json';
import tags from '../assets/tags.json';
import categories from '../assets/categories.json';

export class Category {
  id!: number;
  name!: string;
  slug!: string;
}

export class Tag {
  id!: number;
  name!: string;
  slug!: string;
  pivot?: any;
}

export class Project {
  'id': number;
  'title': string;
  'slug': string;
  'excerpt': string;
  'body': string;
  'url': string | null;
  'published_date': string | null;
  'image': string | null;
  'thumb': string | null;
  'category_id': number | null;
  'created_at': string;
  'updated_at': string;
  'category': Category | null;
  'tags': Tag[] | null;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Portfolio Homepage';
  date = 'January 29, 2024';
  author = 'AA';
  categories: Category[] = categories;
  tags: Tag[] = tags;
  projects: Project[] = projects;
  categoryFilter: Category | undefined;
  tagFilter: Tag | undefined;
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
