import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFormServicioComponent } from './modal-form-servicio.component';

describe('ModalFormServicioComponent', () => {
  let component: ModalFormServicioComponent;
  let fixture: ComponentFixture<ModalFormServicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalFormServicioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalFormServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
