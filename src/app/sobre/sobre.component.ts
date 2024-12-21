import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { warn } from 'node:console';
import { SobreService } from './services/sobre.service';
import { IDetalheEventoObservable } from './models/IDetalheEventoObservable';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.scss',
})
export class SobreComponent implements AfterViewInit {
  @ViewChild('meteorCanvas', { static: false })
  canvasRef!: ElementRef<HTMLCanvasElement>;
  ctx!: CanvasRenderingContext2D | null;

  larguraMeteoro = 1;
  quantidadeMeteoros = 1;
  ativarAnimacao = false;

  detalheEvento: IDetalheEventoObservable = {
    mostrarDetalheEvento: false,
    eventoSelecionado: {
      iconeClasse: '',
      mostrarLinha: false,
      data: '',
      resumo: '',
    },
  };

  subscriptions: Subscription[] = [];

  constructor(private sobreService: SobreService) {}

  ngAfterViewInit(): void {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d');

    this.larguraMeteoro = window.innerWidth >= 768 ? 0.5 : 1;

    const detalheEventoSubscription =
      this.sobreService.detalheEvento$.subscribe((detalhe) => {
        if(detalhe) {
          this.detalheEvento = detalhe;
        }
      });
  }

  drawMeteoro(x: number, y: number) {
    document.getElementById('meteorCanvas')?.classList.remove('hidden');

    const lengthX = Math.random() * 30 + 30;
    const lengthY = Math.random() * 10 + 20;

    this.ctx!.beginPath();
    this.ctx!.moveTo(x, y);
    this.ctx!.lineTo(x + lengthX, y + lengthY);
    this.ctx!.strokeStyle = 'white';
    this.ctx!.lineWidth = Math.random() * this.larguraMeteoro;
    this.ctx!.stroke();
  }

  animar = () => {
    if (this.ativarAnimacao && this.ctx) {
      const canvas = this.canvasRef.nativeElement;
      this.ctx.clearRect(0, 0, canvas.width, canvas.height);

      const qtdMeteoros = Number(
        (Math.random() * this.quantidadeMeteoros).toFixed(0)
      );

      if (qtdMeteoros > 0) {
        this.drawMeteoro(
          Math.random() * canvas.width,
          Math.random() * canvas.height
        );
      }
      requestAnimationFrame(this.animar);
    }
  };

  animarMeteoros() {
    this.ativarAnimacao = true;
    this.animar();

    setTimeout(() => {
      this.ativarAnimacao = false;
      document.getElementById('meteorCanvas')?.classList.add('hidden');
    }, 3000);
  }
}
