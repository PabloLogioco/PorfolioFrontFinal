import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginOKComponent } from './login-ok.component';

describe('LoginOKComponent', () => {
  let component: LoginOKComponent;
  let fixture: ComponentFixture<LoginOKComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginOKComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginOKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
