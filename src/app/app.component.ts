import {
  Component,
  ViewChild,
  AfterViewInit,
  ElementRef,
  HostListener,
} from '@angular/core';
import {
  NavigationEnd,
  Router,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { filter } from 'rxjs';
import { RouterService } from './services/router.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isMenuOpen: boolean = false;
  showLoadScreen: boolean = false;

  constructor(private router: Router, private routerService: RouterService) {}

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

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  closeMenu() {
    this.isMenuOpen = false;
  }

  showLoadingPage(): void {
    this.showLoadScreen = true;
    setTimeout(() => {
      this.showLoadScreen = false;
    }, 2600);
  }

  redirectToHomePage(): void {
    this.routerService.redirectToHomePage();
    this.showLoadingPage();
  }
}
