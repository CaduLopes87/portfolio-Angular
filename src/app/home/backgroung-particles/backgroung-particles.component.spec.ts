import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroungParticlesComponent } from './backgroung-particles.component';

describe('BackgroungParticlesComponent', () => {
  let component: BackgroungParticlesComponent;
  let fixture: ComponentFixture<BackgroungParticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BackgroungParticlesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BackgroungParticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
