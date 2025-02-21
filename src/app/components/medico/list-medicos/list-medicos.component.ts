import { Component, inject, OnInit } from '@angular/core';
import { GlobalModule } from '../../../global/global/global.module';
import { MedicoService } from '../../../services/medico.service';
import { Medico } from '../../../models/medico/medico';
import { DatePipe } from '@angular/common';
import {MatDialog} from '@angular/material/dialog';
import { FormMedicoComponent } from '../form-medico/form-medico.component';
@Component({
  selector: 'app-list-medicos',
  imports: [GlobalModule, DatePipe],
  templateUrl: './list-medicos.component.html',
  styleUrl: './list-medicos.component.css'
})
export class ListMedicosComponent implements OnInit{
  displayedColumns: string[] = ['nombre_apellido', 'dni', 'fecha_nac', 'telefono', 'direccion', 'especialidad', 'acciones'];
  medicos: Array <Medico>= [];
  ngOnInit():void {
    this.getMedicos();

  }
  constructor (private medicoService: MedicoService,
  ){
  }
  //modal para modificar algo
  readonly dialog = inject (MatDialog);
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string, id: string): void {
    let dialogRef= this.dialog.open(FormMedicoComponent, {
      width: '600px',
      height: '530px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: {_id: id },
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.getMedicos();
      }
    });
  }
  getMedicos (){
    this.medicoService.getMedicos().subscribe(
      (data)=>{
        this.medicos= [];
        let medico: Medico = new Medico ();
        data.data.forEach((element: any)=>{
          Object.assign (medico, element);
          this.medicos.push (medico);
          medico= new Medico()
        });
      },
      (error)=>{
        console.error (error);
      }
    )
  }
  deleteMedico (_id: string){
    this.medicoService.deleteMedico(_id).subscribe(
      (data)=>{
        if (data.status ==='1'){
          alert(data.msg);
          this.getMedicos();
        }
        else{
          alert (data.msg);
        }
      },
      (error)=>{
        console.log(error);
      }
    )
  }

}
