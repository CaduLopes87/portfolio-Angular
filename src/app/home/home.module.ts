import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroungParticlesComponent } from './backgroung-particles/backgroung-particles.component';
import { HomeComponent } from './home.component';
import { NgxParticlesModule } from '@tsparticles/angular';
import { HeaderComponent } from './components/header/header.component';
import { ApresentacaoComponent } from './components/apresentacao/apresentacao.component';
import { SobreComponent } from './components/sobre-descricao/sobre-descricao.component';
import { TecnologiasComponent } from './components/tecnologias/tecnologias.component';
import { ProjetosComponent } from './components/projetos/projetos.component';
import { ContatosComponent } from './components/contatos/contatos.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { DetalhesProjetoComponent } from './components/projetos/components/detalhes-projeto/detalhes-projeto.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule} from '@angular/material/tooltip';
import { EnviarDialogComponent } from './components/contatos/enviar-dialog/enviar-dialog.component';

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
    EnviarDialogComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,

    //Bibliotecas externas
    NgxParticlesModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatMenuModule,
    MatTooltipModule
  ],
  exports: [HomeComponent, BackgroungParticlesComponent, HeaderComponent],
})
export class HomeModule {}
