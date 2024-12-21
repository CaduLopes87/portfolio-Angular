import { Component } from '@angular/core';
import { IEvento } from '../../models/IEventosCarreira';
import { SobreService } from '../../services/sobre.service';

@Component({
  selector: 'app-linha-do-tempo',
  templateUrl: './linha-do-tempo.component.html',
  styleUrl: './linha-do-tempo.component.scss',
})
export class LinhaDoTempoComponent {
  eventos: IEvento[] = this.sobreService.eventos;

  constructor(private sobreService: SobreService) {}

  mostrarDetalhe(evento: IEvento) {
    let detalheEvento = this.sobreService.getDetalheEvento();

    if (evento === detalheEvento.eventoSelecionado) {
      detalheEvento.mostrarDetalheEvento = !detalheEvento.mostrarDetalheEvento;

      this.sobreService.atualizarDetalheEvento(detalheEvento);
      return;
    }

    detalheEvento = {
      mostrarDetalheEvento: true,
      eventoSelecionado: evento
    };
    
    this.sobreService.atualizarDetalheEvento(detalheEvento);
  }
}
