import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lchild2Component } from './lchild2.component';

describe('Lchild2Component', () => {
  let component: Lchild2Component;
  let fixture: ComponentFixture<Lchild2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lchild2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lchild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
