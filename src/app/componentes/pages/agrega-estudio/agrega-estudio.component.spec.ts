import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregaEstudioComponent } from './agrega-estudio.component';

describe('AgregaEstudioComponent', () => {
  let component: AgregaEstudioComponent;
  let fixture: ComponentFixture<AgregaEstudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregaEstudioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregaEstudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
