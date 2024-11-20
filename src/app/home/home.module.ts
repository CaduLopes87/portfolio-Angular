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

@NgModule({
  declarations: [
    BackgroungParticlesComponent,
    HomeComponent,
    HeaderComponent,
    ApresentacaoComponent,
    SobreComponent,
    TecnologiasComponent,
    ProjetosComponent,
  ],
  imports: [
    CommonModule,

    //Bibliotecas externas
    NgxParticlesModule,
  ],
  exports: [HomeComponent],
})
export class HomeModule {}
