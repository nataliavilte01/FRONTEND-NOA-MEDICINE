import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaqueteParaClienteComponent } from './paquete-para-cliente.component';

describe('PaqueteParaClienteComponent', () => {
  let component: PaqueteParaClienteComponent;
  let fixture: ComponentFixture<PaqueteParaClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaqueteParaClienteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaqueteParaClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
