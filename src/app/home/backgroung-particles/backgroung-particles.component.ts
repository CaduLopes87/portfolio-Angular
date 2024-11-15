import { Component } from '@angular/core';
import { loadSlim } from '@tsparticles/slim';
import { particlesOptions } from '../../../assets/tsParticlesOptions';

@Component({
  selector: 'backgroung-particles',
  templateUrl: './backgroung-particles.component.html',
  styleUrl: './backgroung-particles.component.scss',
})
export class BackgroungParticlesComponent {
  id = 'tsparticles';

  particlesOptions = particlesOptions; 

  particlesLoaded(container: any): void {}

  async particlesInit(engine: any): Promise<void> {
    await loadSlim(engine);
  }
}
