import { Component, Inject, Input } from '@angular/core';
import { IProjeto } from '../../../../models/IProjetos';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-detalhes-projeto',
  templateUrl: './detalhes-projeto.component.html',
  styleUrl: './detalhes-projeto.component.scss',
})
export class DetalhesProjetoComponent {
  listaContribuicoesTec!: { texto: string }[];
  constructor(@Inject(MAT_DIALOG_DATA) public data: IProjeto) {
    this.listaContribuicoesTec = [...data.detalhes.contribuicoesTecnicas];
    console.log(this.listaContribuicoesTec);
  }
}
