import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeTutrlComponent } from './pipe-tutrl.component';

describe('PipeTutrlComponent', () => {
  let component: PipeTutrlComponent;
  let fixture: ComponentFixture<PipeTutrlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipeTutrlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeTutrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
