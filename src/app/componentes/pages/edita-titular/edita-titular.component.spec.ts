import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaTitularComponent } from './edita-titular.component';

describe('EditaTitularComponent', () => {
  let component: EditaTitularComponent;
  let fixture: ComponentFixture<EditaTitularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditaTitularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditaTitularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
