import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizaBDComponent } from './actualiza-bd.component';

describe('ActualizaBDComponent', () => {
  let component: ActualizaBDComponent;
  let fixture: ComponentFixture<ActualizaBDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizaBDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizaBDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
