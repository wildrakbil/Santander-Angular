import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogETLComponent } from './log-etl.component';

describe('LogETLComponent', () => {
  let component: LogETLComponent;
  let fixture: ComponentFixture<LogETLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogETLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogETLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
