import { Component, ElementRef, inject, viewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EnviarDialogComponent } from './enviar-dialog/enviar-dialog.component';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrl: './contatos.component.scss',
})
export class ContatosComponent {
  readonly dialog = inject(MatDialog);

  openDialog(event: Event) {
    event.preventDefault();
    this.dialog.open(EnviarDialogComponent);
  }
}
