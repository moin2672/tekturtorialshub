import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lparent2Component } from './lparent2.component';

describe('Lparent2Component', () => {
  let component: Lparent2Component;
  let fixture: ComponentFixture<Lparent2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lparent2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lparent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
