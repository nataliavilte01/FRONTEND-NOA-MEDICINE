import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GlobalModule } from '../../../global/global/global.module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Medico } from '../../../models/medico/medico';
import { MedicoService } from '../../../services/medico.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-form-medico',
  imports: [FormsModule, GlobalModule, CommonModule],
  // providers: [provideNativeDateAdapter()],
  providers: [],
  templateUrl: './form-medico.component.html',
  styleUrl: './form-medico.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormMedicoComponent implements OnInit{
  medico: Medico = new Medico();
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { _id: string},
    private medicoService:MedicoService,
    public dialogRef: MatDialogRef<FormMedicoComponent>
  ){
  }
  //mostrar fecha (angular material)

  ngOnInit(): void {
    if(this.data._id !=='0'){
      this.getMedicoById(this.data._id);
    }
  }
  getMedicoById(_id: string){
    this.medicoService.getMedicoById(_id).subscribe(
      (data)=>{
        Object.assign(this.medico, data.data);
      }
    )
  }
  updateMedico(medico: Medico){
    this.medicoService.updateMedico(medico).subscribe(
      (response)=>{
        if (response.status==='1'){
          this.dialogRef.close(true);
          alert (response.msg);
        }
        else{
          this.dialogRef.close(false);
          alert(response.msg);
        }
      }
    )
  }
  createMedico(medico: Medico){
    this.medicoService.createMedico(medico).subscribe(
      (response)=>{
        if(response.status==='1'){
          this.dialogRef.close(true);
          alert (response.msg);
        }
        else{
          this.dialogRef.close(false);
          alert (response.msg);
        }

      },
      (error)=>{
        console.log(error);
      }
    )
  }
}
