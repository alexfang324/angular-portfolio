import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Router, RouterModule, Scroll } from '@angular/router';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent {
  constructor(private router: Router) {}

  navigateToPage(path: string) {
    this.router.navigate([path]).then(() => {
      // Scroll to the top of the page after navigation
      window.scrollTo(0, 0);
    });
  }
}
