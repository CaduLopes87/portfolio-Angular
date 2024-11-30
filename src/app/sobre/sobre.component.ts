import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.scss',
})
export class SobreComponent implements AfterViewInit {
  @ViewChild('spaceCanvas', { static: false })
  canvasRef!: ElementRef<HTMLCanvasElement>;
  ctx!: CanvasRenderingContext2D | null;

  ngAfterViewInit(): void {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d');
  }

  drawMeteoro(x: number, y: number) {
    this.ctx!.beginPath();
    this.ctx!.moveTo(x, y);
    this.ctx!.lineTo(x + 20, y + 50);
    this.ctx!.strokeStyle = 'white';
    this.ctx!.lineWidth = 2;
    this.ctx!.stroke();
  }

  animar = () => {
    // Use uma arrow function para manter o contexto correto
    if (this.ctx) {
      const canvas = this.canvasRef.nativeElement;
      this.ctx.clearRect(0, 0, canvas.width, canvas.height);
      this.drawMeteoro(
        Math.random() * canvas.width,
        Math.random() * canvas.height
      );
      requestAnimationFrame(this.animar);
    }
  };
}
