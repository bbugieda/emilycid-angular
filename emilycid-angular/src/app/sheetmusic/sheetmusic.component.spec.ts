import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SheetmusicComponent } from './sheetmusic.component';

describe('SheetmusicComponent', () => {
  let component: SheetmusicComponent;
  let fixture: ComponentFixture<SheetmusicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SheetmusicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheetmusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
