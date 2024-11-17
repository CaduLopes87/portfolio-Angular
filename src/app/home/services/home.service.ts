import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor() {}

  animarIcone(event: any, animacaoClasse: string, redeSocialLink: string = '') {
    event.preventDefault();
    const link = event.target;
    link.classList.add(animacaoClasse);

    setTimeout(() => {
      if (redeSocialLink) {
        link.href = redeSocialLink;
        window.open(link.href, '_blank');
      }

      link.classList.remove(animacaoClasse);
    }, 300);
  }
  
  animarBotao(event: any, botaoId: string, animacaoClasse: string, link: string = '') {
    event.preventDefault();
    const element = document.getElementById(`${botaoId}`);
    element?.classList.add(animacaoClasse);

    setTimeout(() => {
      if (link) {
        event.href = link;
        window.open(event.href, '_blank');
      }

      element?.classList.remove(animacaoClasse);
    }, 300);
  }
}
