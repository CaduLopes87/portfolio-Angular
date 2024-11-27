import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroungParticlesComponent } from './backgroung-particles/backgroung-particles.component';
import { HomeComponent } from './home.component';
import { NgxParticlesModule } from '@tsparticles/angular';
import { HeaderComponent } from './components/header/header.component';
import { ApresentacaoComponent } from './components/apresentacao/apresentacao.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { TecnologiasComponent } from './components/tecnologias/tecnologias.component';
import { ProjetosComponent } from './components/projetos/projetos.component';
import { ContatosComponent } from './components/contatos/contatos.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { DetalhesProjetoComponent } from './components/projetos/components/detalhes-projeto/detalhes-projeto.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    BackgroungParticlesComponent,
    HomeComponent,
    HeaderComponent,
    ApresentacaoComponent,
    SobreComponent,
    TecnologiasComponent,
    ProjetosComponent,
    ContatosComponent,
    DetalhesProjetoComponent,
  ],
  imports: [
    CommonModule,

    //Bibliotecas externas
    NgxParticlesModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule
  ],
  exports: [HomeComponent],
})
export class HomeModule {}
