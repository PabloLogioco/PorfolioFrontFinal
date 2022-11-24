import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminaItemComponent } from './elimina-item.component';

describe('EliminaItemComponent', () => {
  let component: EliminaItemComponent;
  let fixture: ComponentFixture<EliminaItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminaItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
