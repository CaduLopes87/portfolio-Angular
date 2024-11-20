import { Component } from '@angular/core';
import { IProjetos } from '../../models/IProjetos';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrl: './projetos.component.scss',
})
export class ProjetosComponent {
  listaProjetos: IProjetos = {
    profissionais: [
      {
        nome: 'Contabilizador de Rifas',
        src: '../../../../assets/contabilizador-backdrop.png',
        alt: 'Imagem ilustrativa do site contabilizador de rifas',
        github_Link: 'https://github.com/CaduLopes87/contabilizador-de-rifas',
        projeto_Link: 'https://contabilizador-de-rifas.vercel.app/',
      },
      {
        nome: 'Onirica Psique',
        src: '../../../../assets/oniricapsique-backdrop.png',
        alt: 'Imagem ilustrativa do site Onirica Psique',
        github_Link: 'https://github.com/CaduLopes87/tarot-landpage',
        projeto_Link: 'https://oniricapsique.vercel.app/',
      }
    ],
    pessoais: [
      {
        nome: 'Cult Review',
        src: '../../../../assets/cult-review-backdrop.png',
        alt: 'Imagem ilustrativa do site Cult Review',
        github_Link: 'https://github.com/CaduLopes87/cult-review',
        projeto_Link: '../../../../assets/cult-review-backdrop.png',
      },
      {
        nome: 'Cult Review',
        src: '../../../../assets/cult-review-backdrop.png',
        alt: 'Imagem ilustrativa do site Cult Review',
        github_Link: 'https://github.com/CaduLopes87/cult-review',
        projeto_Link: '../../../../assets/cult-review-backdrop.png',
      },
      {
        nome: 'Cult Review',
        src: '../../../../assets/cult-review-backdrop.png',
        alt: 'Imagem ilustrativa do site Cult Review',
        github_Link: 'https://github.com/CaduLopes87/cult-review',
        projeto_Link: '../../../../assets/cult-review-backdrop.png',
      },
    ],
  };
}
