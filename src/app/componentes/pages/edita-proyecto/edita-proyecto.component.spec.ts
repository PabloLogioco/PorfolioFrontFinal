import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaProyectoComponent } from './edita-proyecto.component';

describe('EditaProyectoComponent', () => {
  let component: EditaProyectoComponent;
  let fixture: ComponentFixture<EditaProyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditaProyectoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditaProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
