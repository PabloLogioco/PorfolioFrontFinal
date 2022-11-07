import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaExperienciaComponent } from './edita-experiencia.component';

describe('EditaExperienciaComponent', () => {
  let component: EditaExperienciaComponent;
  let fixture: ComponentFixture<EditaExperienciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditaExperienciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditaExperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
