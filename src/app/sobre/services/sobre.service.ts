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
        'Encontrei no Intituto Federal de Brasília a melhor opção para a faculdade por já ter feito o ensino médio neste mesmo instituto e conhecer a qualidade. Assim, inciei o curso de Automação Industrial, o qual foca em automação de processos, incluindo desenvolvimento de software e hardware.',
    },
    {
      iconeClasse: 'fa-solid fa-diagram-project',
      mostrarLinha: true,
      data: '2020',
      resumo: 'Projetos Acadêmicos',
      descricao:
        'Durante o andamento do curso, participei de diversos tipos de projetos acadêmicos e trabalhos voluntários. Por meio deles pude obter e aplicar uma ampla base de conhecimentos como as linguagens C++, Python e os microcontroladores Arduino, ESP32 e Raspberry',
    },
    {
      iconeClasse: 'fa-solid fa-laptop-code',
      mostrarLinha: true,
      data: '2023',
      resumo: 'Início no Desenvolvimento Web',
      descricao: 'Em 2023, após algumas experiências como técnico, decidi migrar de vez para o desenvolvimento web. Desde então, passei a estudar os conhecimentos de Front End e Back End para me tornar um desenvolvedor Fullstack.'
    },
    {
      iconeClasse: 'fa-solid fa-sitemap',
      mostrarLinha: true,
      data: '2023',
      resumo: 'Freelancer',
      descricao: 'Para aprimorar e validar minhas habilidades, iniciei minha carreira como freelancer entregando alguns projetos menores e de baixo custo, mas que me deram a experiência para buscar um cargo efetivo no desenvolvimento web.'
    },
    {
      iconeClasse: 'fa-solid fa-building-columns',
      mostrarLinha: true,
      data: '2024',
      resumo: 'Desenvolvedor na Minsait/Banco do Brasil',
      descricao: 'Em abril de 2024 recebi minha primeira oportunidade como desenvolvedor em uma empresa, a Minsait. Esta empresa, além de criar seus próprios produtos, também presta serviços para outros clientes, então fui designado para trabalhar em contrato com o Banco do Brasil, onde atuo no mercado à vista criando aplicações que movimentam bilhões de Reais na bolsa de valores.'
    },
    {
      iconeClasse: 'fa-solid fa-user-graduate',
      mostrarLinha: true,
      data: '2024',
      resumo: 'Formatura',
      descricao: 'Em setembro de 2024 realizei a defesa do meu TCC e em dezembro do mesmo ano tive minha formatura do curso de Automação Industrial do Instituto Federal de Brasília'
    },
    {
      iconeClasse: 'fa-solid fa-flag-checkered',
      mostrarLinha: false,
      data: 'Atual',
      resumo: 'Continua...',
      descricao: 'Atualmente, continuo com o cargo de desenvolvedor no Banco do Brasil com o plano de me tornar referência para o time e buscando, paralelamente, trabalhos extras que me desafiem em outras áres e me possibilitem continuar escalando o aprendizado.'
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
