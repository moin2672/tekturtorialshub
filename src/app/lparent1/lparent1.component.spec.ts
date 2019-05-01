import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lparent1Component } from './lparent1.component';

describe('Lparent1Component', () => {
  let component: Lparent1Component;
  let fixture: ComponentFixture<Lparent1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lparent1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lparent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
