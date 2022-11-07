import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaEstudioComponent } from './edita-estudio.component';

describe('EditaEstudioComponent', () => {
  let component: EditaEstudioComponent;
  let fixture: ComponentFixture<EditaEstudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditaEstudioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditaEstudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
