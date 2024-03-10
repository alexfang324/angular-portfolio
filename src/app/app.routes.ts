import { Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ProjectdetailComponent } from './components/projectdetail/projectdetail.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent, pathMatch: 'full' },
  { path: ':id', component: ProjectdetailComponent },
];
