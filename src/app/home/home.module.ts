import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroungParticlesComponent } from './backgroung-particles/backgroung-particles.component';
import { HomeComponent } from './home.component';
import { NgParticlesModule } from 'ng-particles';
import { NgxParticlesModule } from '@tsparticles/angular';

@NgModule({
  declarations: [BackgroungParticlesComponent, HomeComponent],
  imports: [
    CommonModule,

    //Bibliotecas externas
    NgxParticlesModule,
  ],
  exports: [HomeComponent],
})
export class HomeModule {}
