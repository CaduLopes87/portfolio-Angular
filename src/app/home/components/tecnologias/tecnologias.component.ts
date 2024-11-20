import { Component } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { ITecnologias } from '../../models/ITecnologias';

@Component({
  selector: 'app-tecnologias',
  templateUrl: './tecnologias.component.html',
  styleUrl: './tecnologias.component.scss',
})
export class TecnologiasComponent {
  listaTecnologias: ITecnologias[] = [
    {
      nome: 'ANGULAR',
      fa_classe_animacao: 'fa-flip',
      fa_icone: 'fa-angular',
    },
    {
      nome: 'REACT',
      fa_classe_animacao: 'fa-spin',
      fa_icone: 'fa-react',
    },
    {
      nome: 'JAVASCRIPT',
      fa_classe_animacao: 'fa-fade',
      fa_icone: 'fa-js',
    },
    {
      nome: 'CSS',
      fa_classe_animacao: 'fa-fade',
      fa_icone: 'fa-css3-alt',
    },
    {
      nome: 'SASS',
      fa_classe_animacao: 'fa-fade',
      fa_icone: 'fa-sass',
    },
    {
      nome: 'NODEJS',
      fa_classe_animacao: 'fa-flip',
      fa_icone: 'fa-node',
    },
  ];

  constructor(private homeService: HomeService) {}

  animarComponente(event: any, animacaoClasse: string) {
    this.homeService.animarIcone(event, animacaoClasse);
  }
}
