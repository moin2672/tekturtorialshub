import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lchild1Component } from './lchild1.component';

describe('Lchild1Component', () => {
  let component: Lchild1Component;
  let fixture: ComponentFixture<Lchild1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lchild1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lchild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
