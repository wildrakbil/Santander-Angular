import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteraConsumoVencidaComponent } from './cartera-consumo-vencida.component';

describe('CarteraConsumoVencidaComponent', () => {
  let component: CarteraConsumoVencidaComponent;
  let fixture: ComponentFixture<CarteraConsumoVencidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarteraConsumoVencidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarteraConsumoVencidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
