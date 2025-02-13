import { Component } from '@angular/core';
import { GlobalModule } from '../../../../global/global/global.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-form-servicio',
  imports: [GlobalModule,CommonModule],
  templateUrl: './modal-form-servicio.component.html',
  styleUrl: './modal-form-servicio.component.css'
})
export class ModalFormServicioComponent {

  selectedFile: File | null = null;
  uploadProgress: number | null = null;
}
