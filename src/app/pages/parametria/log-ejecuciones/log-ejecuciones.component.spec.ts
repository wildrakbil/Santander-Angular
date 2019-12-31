import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogEjecucionesComponent } from './log-ejecuciones.component';

describe('LogEjecucionesComponent', () => {
  let component: LogEjecucionesComponent;
  let fixture: ComponentFixture<LogEjecucionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogEjecucionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogEjecucionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
