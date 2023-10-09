import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillTooltipComponent } from './skill-tooltip.component';

describe('SkillTooltipComponent', () => {
  let component: SkillTooltipComponent;
  let fixture: ComponentFixture<SkillTooltipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkillTooltipComponent]
    });
    fixture = TestBed.createComponent(SkillTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
