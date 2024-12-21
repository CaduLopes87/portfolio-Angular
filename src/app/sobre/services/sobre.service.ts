import { Injectable } from '@angular/core';
import { IEvento } from '../models/IEventosCarreira';
import { BehaviorSubject } from 'rxjs';
import { IDetalheEventoObservable } from '../models/IDetalheEventoObservable';

@Injectable({
  providedIn: 'root',
})
export class SobreService {
  private detalheEvento = new BehaviorSubject<IDetalheEventoObservable>({
    mostrarDetalheEvento: false,
    eventoSelecionado: {
      iconeClasse: '',
      mostrarLinha: false,
      data: '',
      resumo: '',
    },
  });

  detalheEvento$ = this.detalheEvento.asObservable();

  eventos: IEvento[] = [
    {
      iconeClasse: 'fa-solid fa-flag-checkered',
      mostrarLinha: true,
      data: '2018',
      resumo: 'Início da carreira',
      descricao:
        'Após concluir meu ensino médio em 2017, decidi seguir a área da tecnologia, mais especificmante eletrônica e programação. No início de 2018 tive que escolher, com base na nota do ENEM, qual seria a faculdade que me ofereceria essa possibildiade.',
    },
    {
      iconeClasse: 'fa-solid fa-school',
      mostrarLinha: true,
      data: '2018',
      resumo: 'Ingresso na faculdade',
      descricao:
        'Encontrei no Intituto Federal de Brasília a melhor opção para a faculdade por já ter feito o ensino médio neste mesmo instituto e conhecer a qualidade. Assim inciei o curso de Automação Industrial, o qual foca em automação de processos, incluindo desenvolvimento de software e hardware.',
    },
    {
      iconeClasse: 'fa-solid fa-diagram-project',
      mostrarLinha: true,
      data: '2020',
      resumo: 'Projetos Acadêmicos',
      descricao:
        'Durante o andamento do curso, participei de diversos tipos de projetos acadêmicos e trabalhos voluntários. Por meio deles pude obter e aplicar uma ampla base de conhecimentos como linguagens as C++, Python e os microcontroladores Arduino, ESP32 e Raspberry',
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

  constructor() {}

  atualizarDetalheEvento(evento: IDetalheEventoObservable) {
    this.detalheEvento.next({
      mostrarDetalheEvento: evento.mostrarDetalheEvento,
      eventoSelecionado: evento.eventoSelecionado,
    });
  }

  getDetalheEvento() {
    return this.detalheEvento.value;
  }
}
