import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaSkillsComponent } from './edita-skills.component';

describe('EditaSkillsComponent', () => {
  let component: EditaSkillsComponent;
  let fixture: ComponentFixture<EditaSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditaSkillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditaSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
