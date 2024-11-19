import { Component } from '@angular/core';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-tecnologias',
  templateUrl: './tecnologias.component.html',
  styleUrl: './tecnologias.component.scss'
})
export class TecnologiasComponent {
 constructor(private homeService: HomeService) {}

  animarComponente(event: any, animacaoClasse: string) {
    this.homeService.animarIcone(event, animacaoClasse);
  }
}
