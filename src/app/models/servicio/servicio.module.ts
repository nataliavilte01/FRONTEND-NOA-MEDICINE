import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EspecialidadModule } from '../especialidad/especialidad.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ServicioModule { 

     _id!:string;
     nombre!:string;
     descripcion!:string;
     precio!:number;
     image!:string;
     especialidadObject:EspecialidadModule;
     especialidad!:string;
   
    constructor(){
      this.especialidadObject=new EspecialidadModule();
    }

}
