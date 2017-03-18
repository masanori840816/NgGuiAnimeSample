import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiAnimeSample1Component } from './gui-anime-sample-1.component';

describe('GuiAnimeSample1Component', () => {
  let component: GuiAnimeSample1Component;
  let fixture: ComponentFixture<GuiAnimeSample1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuiAnimeSample1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuiAnimeSample1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
