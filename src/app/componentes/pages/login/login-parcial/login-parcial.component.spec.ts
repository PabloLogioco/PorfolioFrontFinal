import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginParcialComponent } from './login-parcial.component';

describe('LoginParcialComponent', () => {
  let component: LoginParcialComponent;
  let fixture: ComponentFixture<LoginParcialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginParcialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginParcialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
