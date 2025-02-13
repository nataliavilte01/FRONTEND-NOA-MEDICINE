import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaServiciosParaAdminComponent } from './lista-servicios-para-admin.component';

describe('ListaServiciosParaAdminComponent', () => {
  let component: ListaServiciosParaAdminComponent;
  let fixture: ComponentFixture<ListaServiciosParaAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaServiciosParaAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaServiciosParaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
