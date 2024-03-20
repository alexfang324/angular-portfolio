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

  currentIndex = 0;
  tiles = [
    { src: 'assets/images/aboutme1.png', alt: 'about-me1' },
    { src: 'assets/images/aboutme2.png', alt: 'about-me2' },
    { src: 'assets/images/aboutme2.png', alt: 'about-me2' },
  ];

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'ArrowLeft') {
      this.moveLeft();
    } else if (event.key === 'ArrowRight') {
      this.moveRight();
    }
  }

  navigateToAboutPage() {
    this.router.navigate(['/about-me']).then(() => {
      // Scroll to the top of the page after navigation
      window.scrollTo(0, 0);
    });
  }

  moveLeft(): void {
    const lastTile = this.tiles.pop();
    this.tiles.unshift(lastTile!);
  }

  moveRight(): void {
    const firstTile = this.tiles.shift();
    this.tiles.push(firstTile!);
  }
}
