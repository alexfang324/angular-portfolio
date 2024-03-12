import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import {
  NavigationEnd,
  Router,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router) {}

  @ViewChild('loadScreen') loadScreenElement!: ElementRef<HTMLDivElement>;

  ngAfterViewInit(): void {
    //check for navigation events and if it's one that goes to or redirects to
    //home page, show load screen animation
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        if (event.url === '/' || event.urlAfterRedirects === '/') {
          this.showLoadingPage();
        }
      });
  }

  showLoadingPage(): void {
    this.loadScreenElement.nativeElement.classList.add('active');

    setTimeout(() => {
      this.loadScreenElement.nativeElement.classList.remove('active');
    }, 3000);
  }
}
