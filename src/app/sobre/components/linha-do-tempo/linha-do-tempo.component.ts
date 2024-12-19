import { Component } from '@angular/core';
import { IEventos } from '../../models/IEventosCarreira';

@Component({
  selector: 'app-linha-do-tempo',
  templateUrl: './linha-do-tempo.component.html',
  styleUrl: './linha-do-tempo.component.scss',
})
export class LinhaDoTempoComponent {
  eventos: IEventos[] = [
    {
      iconeClasse: 'fa-solid fa-flag-checkered',
      mostrarLinha: true,
      data: '2018',
      resumo: 'Início da carreira',
    },
    {
      iconeClasse: 'fa-solid fa-school',
      mostrarLinha: true,
      data: '2018',
      resumo: 'Ingresso na faculdade',
    },
    {
      iconeClasse: 'fa-solid fa-diagram-project',
      mostrarLinha: true,
      data: '2020',
      resumo: 'Projetos Acadêmicos',
    },
    {
      iconeClasse: 'fa-solid fa-city',
      mostrarLinha: true,
      data: '2021',
      resumo: 'Trabalho como técnico',
    },
    {
      iconeClasse: 'fa-solid fa-laptop-code',
      mostrarLinha: true,
      data: '2023',
      resumo: 'Início no Desenvolvimento Web',
    },
    {
      iconeClasse: 'fa-solid fa-sitemap',
      mostrarLinha: true,
      data: '2023',
      resumo: 'Freelancer',
    },
    {
      iconeClasse: 'fa-solid fa-building-columns',
      mostrarLinha: true,
      data: '2024',
      resumo: 'Desenvolvedor na Minsait/Banco do Brasil',
    },
    {
      iconeClasse: 'fa-solid fa-user-graduate',
      mostrarLinha: true,
      data: '2024',
      resumo: 'Formatura',
    },
    {
      iconeClasse: 'fa-solid fa-flag-checkered',
      mostrarLinha: false,
      data: 'Atual',
      resumo: 'Continua...',
    },
  ];
}
