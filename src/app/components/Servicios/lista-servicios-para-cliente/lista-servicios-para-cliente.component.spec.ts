import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaServiciosParaClienteComponent } from './lista-servicios-para-cliente.component';

describe('ListaServiciosParaClienteComponent', () => {
  let component: ListaServiciosParaClienteComponent;
  let fixture: ComponentFixture<ListaServiciosParaClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaServiciosParaClienteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaServiciosParaClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
