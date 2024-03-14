import { Component } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  standalone: true,
  imports: [],
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.scss',
})
export class AboutmeComponent {
  observer?: IntersectionObserver;

  ngOnInit(): void {
    this.wordByWordFadeIn();
  }

  ngAfterViewInit(): void {
    this.setupFadeInObserver();
  }

  //use Intersection Observer API to add animation to elmeents when they're scrolled into view
  setupFadeInObserver(): void {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const element = entry.target;
        if (entry.isIntersecting) {
          element!.classList.add('fade-in');
          return;
        }

        //remove class when element is out of screen so the effect can be replayed
        // element!.classList.remove('fade-in');
      });
    });

    this.observer.observe(document.querySelector('.fade-in-element')!);
  }

  wordByWordFadeIn(): void {
    document.addEventListener('DOMContentLoaded', function () {
      var paragraphs = document.querySelectorAll('[class^="word-by-word"]');
      var delay: number = 0;

      paragraphs.forEach(function (paragraph) {
        var textNodes = paragraph.childNodes;

        //find specified delay in classname if there is one
        paragraph.classList.forEach((className) => {
          // Check if the class starts with "word-by-word-"
          if (className.startsWith('word-by-word-')) {
            const matchResult = className.match(/\d+/)?.[0];
            delay = matchResult ? parseInt(matchResult) : 0;
            console.log('delay: ', delay);
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
    });
  }
}
