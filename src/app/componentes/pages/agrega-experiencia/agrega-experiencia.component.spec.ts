import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregaExperienciaComponent } from './agrega-experiencia.component';

describe('AgregaExperienciaComponent', () => {
  let component: AgregaExperienciaComponent;
  let fixture: ComponentFixture<AgregaExperienciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregaExperienciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregaExperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
