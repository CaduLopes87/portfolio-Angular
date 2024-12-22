import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviarDialogComponent } from './enviar-dialog.component';

describe('EnviarDialogComponent', () => {
  let component: EnviarDialogComponent;
  let fixture: ComponentFixture<EnviarDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnviarDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnviarDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
