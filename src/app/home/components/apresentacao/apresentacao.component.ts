import { Component } from '@angular/core';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-apresentacao',
  templateUrl: './apresentacao.component.html',
  styleUrl: './apresentacao.component.scss',
})
export class ApresentacaoComponent {
  isLkdinHovered = false;
  isGithubHovered = false;

  constructor(private homeService: HomeService) {}

  animarIcone(event: any, animacaoClasse: string, redeSocialLink: string = '') {
    this.homeService.animarIcone(event, animacaoClasse, redeSocialLink);
  }

  animarBotao(
    event: any,
    botaoId: string,
    animacaoClasse: string,
    link: string = ''
  ) {
    this.homeService.animarBotao(event, botaoId, animacaoClasse, link);
  }

  rolarParaContato() {
    const contatoElement = document.getElementById('contact-section');
    if (contatoElement) {
      contatoElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
