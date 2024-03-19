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
  screenWidth: number = 0;

  constructor(private router: Router, private routerService: RouterService) {}

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

    this.getScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize() {
    this.screenWidth = window.innerWidth;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  showLoadingPage(): void {
    this.loadScreenElement.nativeElement.classList.add('active');

    setTimeout(() => {
      this.loadScreenElement.nativeElement.classList.remove('active');
    }, 3000);
  }

  redirectToHomePage(): void {
    this.routerService.redirectToHomePage();
  }
}
