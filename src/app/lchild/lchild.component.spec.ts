import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LchildComponent } from './lchild.component';

describe('LchildComponent', () => {
  let component: LchildComponent;
  let fixture: ComponentFixture<LchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
