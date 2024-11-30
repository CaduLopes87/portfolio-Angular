import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  rolarParaProjetos(event: any) {
    event.preventDefault();

    const contatoElement = document.getElementById('projects-section');
    if (contatoElement) {
      contatoElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
  rolarParaContato(event: any) {
    event.preventDefault();

    const contatoElement = document.getElementById('contact-section');
    if (contatoElement) {
      contatoElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
