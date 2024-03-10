import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('canvas') canvas!: any;

  constructor() {}

  ngAfterViewInit(): void {
    this.drawLogo();
  }

  drawLogo(): void {
    const canvas = this.canvas.nativeElement;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      this.DrawDottedLine(ctx, 100, 100, 7, 7, 7, 20, 'green');
      console.log('went here');
    }
  }

  DrawDottedLine(
    ctx: CanvasRenderingContext2D,
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    dotRadius: number,
    dotCount: number,
    dotColor: string
  ) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    const spaceX = dx / (dotCount - 1);
    const spaceY = dy / (dotCount - 1);
    let newX = x1;
    let newY = y1;
    for (let i = 0; i < dotCount; i++) {
      this.drawDot(ctx, newX, newY, dotRadius, dotColor);
      newX += spaceX;
      newY += spaceY;
    }
    this.drawDot(ctx, x1, y1, 3, 'red');
    this.drawDot(ctx, x2, y2, 3, 'red');
  }

  drawDot(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    dotRadius: number,
    dotColor: string
  ) {
    ctx.beginPath();
    ctx.arc(x, y, dotRadius, 0, 2 * Math.PI, false);
    ctx.fillStyle = dotColor;
    ctx.fill();
  }
}
