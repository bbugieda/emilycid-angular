import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViolaComponent } from './viola.component';

describe('ViolaComponent', () => {
  let component: ViolaComponent;
  let fixture: ComponentFixture<ViolaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViolaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
