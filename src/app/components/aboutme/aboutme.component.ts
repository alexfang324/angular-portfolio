import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-aboutme',
  standalone: true,
  imports: [],
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.scss',
})
export class AboutmeComponent {
  constructor(
    private router: Router,
    private renderer: Renderer2,
    private el: ElementRef
  ) {}

  ngOnInit(): void {
    this.wordByWordFadeIn();
  }

  ngAfterViewInit(): void {
    this.wordByWordFadeIn();
    this.setupFadeInObservers();
  }

  //use Intersection Observer API to add animation to elmeents when they're scrolled into view
  setupFadeInObservers(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const targetElement = entry.target;
        if (entry.isIntersecting) {
          targetElement!.classList.add('fade-in-after-1');
          return;
        }
        // Remove class when element is out of the viewport
        // targetElement!.classList.remove('fade-in-after-1');
      });
    });

    const elementsToObserve = document.querySelectorAll('.fade-in-element');
    elementsToObserve.forEach((element) => {
      observer.observe(element);
    });
  }

  //NOTE: This method only works for paragraph tag
  wordByWordFadeIn(): void {
    var paragraphs = document.querySelectorAll('[class*="word-by-word"]');
    paragraphs.forEach(function (paragraph) {
      var delay: number = 0;
      var textNodes = paragraph.childNodes;

      //find specified delay in classname if there is one
      paragraph.classList.forEach((className) => {
        // Check if the class starts with "word-by-word-"
        if (className.startsWith('word-by-word-')) {
          const matchResult = className.match(/\d+/)?.[0];
          delay = matchResult ? parseInt(matchResult) : 0;
        }
      });

      // Replace text nodes with spans for each word
      textNodes.forEach(function (node) {
        if (node.nodeType === Node.TEXT_NODE) {
          var words = (node as Text).data.trim().split(/\s+/);
          var wordSpans = words.map((word: string | null) => {
            var span = document.createElement('span');
            span.textContent = word + ' ';
            return span;
          });
          node.replaceWith(...wordSpans);
        }
      });

      // Remove empty spans, if any
      paragraph.querySelectorAll('span').forEach((span) => {
        if (!span.textContent!.trim()) {
          span.remove();
        }
      });

      // Hide and fade in each word
      paragraph.querySelectorAll('span').forEach((span, index) => {
        span.style.opacity = String(0);
        setTimeout(function () {
          span.style.transition = 'opacity 0.8s ease';
          span.style.transitionDelay = delay + 's';
          span.style.opacity = String(1);
        }, 200 * index);
      });
    });
  }
}
