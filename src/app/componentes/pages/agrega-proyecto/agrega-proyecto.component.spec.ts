import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregaProyectoComponent } from './agrega-proyecto.component';

describe('AgregaProyectoComponent', () => {
  let component: AgregaProyectoComponent;
  let fixture: ComponentFixture<AgregaProyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregaProyectoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregaProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
