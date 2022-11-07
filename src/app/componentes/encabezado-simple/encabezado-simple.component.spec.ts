import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncabezadoSimpleComponent } from './encabezado-simple.component';

describe('EncabezadoSimpleComponent', () => {
  let component: EncabezadoSimpleComponent;
  let fixture: ComponentFixture<EncabezadoSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncabezadoSimpleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncabezadoSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
