import { Component, inject } from '@angular/core';
import { IProjeto, IProjetos } from '../../models/IProjetos';
import { HomeService } from '../../services/home.service';
import { MatDialog } from '@angular/material/dialog';
import { DetalhesProjetoComponent } from './components/detalhes-projeto/detalhes-projeto.component';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrl: './projetos.component.scss',
})
export class ProjetosComponent {
  readonly dialog = inject(MatDialog);

  listaProjetos: IProjetos = {
    profissionais: [
      {
        nome: 'Contabilizador de Rifas',
        src: '../../../../assets/contabilizador-backdrop.png',
        alt: 'Imagem ilustrativa do site contabilizador de rifas',
        github_Link: 'https://github.com/CaduLopes87/contabilizador-de-rifas',
        projeto_Link: 'https://contabilizador-de-rifas.vercel.app/',
        detalhes: {
          objetivo:
            'Criar uma ferramenta web para facilitar a gestão e organização de rifas vendidas por uma loja, centralizando os dados de vendas e números disponíveis.',
          descricao:
            'O Contabilizador de Rifas é uma solução web desenvolvida com HTML, CSS e JavaScript puro, conectada a um servidor construído em Node.js e Fastify para o gerenciamento e a visualização de dados. A aplicação se comunica com um banco de dados PostgreSQL, onde todas as informações relacionadas às rifas (como números vendidos e disponíveis) são armazenadas e gerenciadas. Este projeto automatizou o processo de controle de rifas, substituindo métodos manuais e otimizando a gestão de vendas.',
          contribuicoesTecnicas: [
            {
              texto: 'Criação do front-end interativo e responsivo.',
            },
            {
              texto:
                'Desenvolvimento do servidor utilizando Fastify para garantir desempenho otimizado.',
            },
            {
              texto:
                'Integração com banco de dados PostgreSQL para armazenar e consultar informações em tempo real.',
            },
            {
              texto:
                'Implementação de validações de dados e respostas rápidas para uma experiência do usuário eficiente.',
            },
          ],
        },
      },
      {
        nome: 'Onirica Psique',
        src: '../../../../assets/oniricapsique-backdrop.png',
        alt: 'Imagem ilustrativa do site Onirica Psique',
        github_Link: 'https://github.com/CaduLopes87/tarot-landpage',
        projeto_Link: 'https://oniricapsique.vercel.app/',
        detalhes: {
          objetivo:
            'Desenvolver uma landing page para uma taróloga que buscava uma plataforma online para apresentar seu trabalho de forma profissional e impactante.',
          descricao:
            'A Onírica Psique é uma landing page criada em Angular, projetada para funcionar como um cartão de visitas digital, destacando os serviços e a identidade única da cliente. O design foi elaborado com base em um modelo fornecido pela cliente, com adaptações e sugestões próprias para melhorar a experiência do usuário e o apelo visual. A página combina elementos modernos de design responsivo, garantindo uma navegação fluida em diferentes dispositivos. A colaboração direta com a cliente permitiu a criação de uma interface personalizada e fiel à essência do trabalho da taróloga.',
          contribuicoesTecnicas: [
            {
              texto: 'Desenvolvimento do front-end responsivo em Angular.',
            },
            {
              texto:
                'Implementação de boas práticas de SEO para melhor posicionamento nos motores de busca.',
            },
            {
              texto:
                'Personalização de elementos visuais e layout para alinhamento com a proposta esotérica e estética da cliente.',
            },
          ],
        },
      },
    ],
    pessoais: [
      {
        nome: 'Cult Review',
        src: '../../../../assets/cult-review-backdrop.png',
        alt: 'Imagem ilustrativa do site Cult Review',
        github_Link: 'https://github.com/CaduLopes87/cult-review',
        projeto_Link: 'https://cult-review.vercel.app/index.html',
        detalhes: {
          objetivo:
            'Explorar o consumo de APIs externas e aprimorar habilidades em desenvolvimento web através da criação de um catálogo interativo voltado ao cinema.',
          descricao:
            'O CultReview é um projeto pessoal que reflete a paixão por cinema, criado como um laboratório prático para explorar o consumo de APIs. Desenvolvido com HTML, CSS e JavaScript puro, o aplicativo permite que os usuários pesquisem informações sobre filmes, incluindo sinopses, notas de avaliação e outros dados relacionados. O design minimalista foi escolhido para enfatizar o conteúdo, enquanto a integração com APIs externas permitiu a criação de um catálogo dinâmico e funcional.',
          contribuicoesTecnicas: [
            {
              texto:
                'Desenvolvimento do front-end utilizando HTML, CSS e JS puro.',
            },
            {
              texto:
                'Integração com APIs públicas para busca e exibição de informações em tempo real.',
            },
            {
              texto:
                'Projeto orientado a responsividade, garantindo boa experiência em dispositivos móveis e desktops.',
            },
            {
              texto:
                'Organização do código e boas práticas para facilitar futuras manutenções e extensões.',
            },
          ],
        },
      },
      {
        nome: 'Cult Review',
        src: '../../../../assets/cult-review-backdrop.png',
        alt: 'Imagem ilustrativa do site Cult Review',
        github_Link: 'https://github.com/CaduLopes87/cult-review',
        projeto_Link: 'https://cult-review.vercel.app/index.html',
        detalhes: {
          objetivo:
            'Explorar o consumo de APIs externas e aprimorar habilidades em desenvolvimento web através da criação de um catálogo interativo voltado ao cinema.',
          descricao:
            'O CultReview é um projeto pessoal que reflete a paixão por cinema, criado como um laboratório prático para explorar o consumo de APIs. Desenvolvido com HTML, CSS e JavaScript puro, o aplicativo permite que os usuários pesquisem informações sobre filmes, incluindo sinopses, notas de avaliação e outros dados relacionados. O design minimalista foi escolhido para enfatizar o conteúdo, enquanto a integração com APIs externas permitiu a criação de um catálogo dinâmico e funcional.',
          contribuicoesTecnicas: [
            {
              texto:
                'Desenvolvimento do front-end utilizando HTML, CSS e JS puro.',
            },
            {
              texto:
                'Integração com APIs públicas para busca e exibição de informações em tempo real.',
            },
            {
              texto:
                'Projeto orientado a responsividade, garantindo boa experiência em dispositivos móveis e desktops.',
            },
            {
              texto:
                'Organização do código e boas práticas para facilitar futuras manutenções e extensões.',
            },
          ],
        },
      },
      {
        nome: 'Cult Review',
        src: '../../../../assets/cult-review-backdrop.png',
        alt: 'Imagem ilustrativa do site Cult Review',
        github_Link: 'https://github.com/CaduLopes87/cult-review',
        projeto_Link: 'https://cult-review.vercel.app/index.html',
        detalhes: {
          objetivo:
            'Explorar o consumo de APIs externas e aprimorar habilidades em desenvolvimento web através da criação de um catálogo interativo voltado ao cinema.',
          descricao:
            'O CultReview é um projeto pessoal que reflete a paixão por cinema, criado como um laboratório prático para explorar o consumo de APIs. Desenvolvido com HTML, CSS e JavaScript puro, o aplicativo permite que os usuários pesquisem informações sobre filmes, incluindo sinopses, notas de avaliação e outros dados relacionados. O design minimalista foi escolhido para enfatizar o conteúdo, enquanto a integração com APIs externas permitiu a criação de um catálogo dinâmico e funcional.',
          contribuicoesTecnicas: [
            {
              texto:
                'Desenvolvimento do front-end utilizando HTML, CSS e JS puro.',
            },
            {
              texto:
                'Integração com APIs públicas para busca e exibição de informações em tempo real.',
            },
            {
              texto:
                'Projeto orientado a responsividade, garantindo boa experiência em dispositivos móveis e desktops.',
            },
            {
              texto:
                'Organização do código e boas práticas para facilitar futuras manutenções e extensões.',
            },
          ],
        },
      },
    ],
  };

  constructor(private homeService: HomeService) {}

  animarIcone(event: any, animacaoClasse: string, link: string) {
    this.homeService.animarIcone(event, animacaoClasse, link);
  }

  openDialog(projeto: IProjeto) {
    const dialogRef = this.dialog.open(DetalhesProjetoComponent, {
      width: '60vw',
      data: projeto,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
