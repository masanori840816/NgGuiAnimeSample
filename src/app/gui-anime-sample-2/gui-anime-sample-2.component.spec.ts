import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiAnimeSample2Component } from './gui-anime-sample-2.component';

describe('GuiAnimeSample2Component', () => {
  let component: GuiAnimeSample2Component;
  let fixture: ComponentFixture<GuiAnimeSample2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuiAnimeSample2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuiAnimeSample2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
