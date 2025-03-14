import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFormPaqueteComponent } from './modal-form-paquete.component';

describe('ModalFormPaqueteComponent', () => {
  let component: ModalFormPaqueteComponent;
  let fixture: ComponentFixture<ModalFormPaqueteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalFormPaqueteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalFormPaqueteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
