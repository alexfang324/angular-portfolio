import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RouterService {
  constructor(private router: Router) {}

  redirectToProjectDetailPage(id: string) {
    this.router.navigate([`/projects/${id}`]);
  }

  redirectToHomePage() {
    this.router.navigate([`/`]);
  }
}
