import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicioModule } from '../servicio/servicio.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class PaqueteModule {

  _id!:string;
  nombre!:string;
  descripcion!:string;
  precio!:number;
  servicios:Array<string>;
  serviciosObjects:Array<ServicioModule>;

  constructor(){
    this.servicios= new Array<string>();
    this.serviciosObjects= new Array<ServicioModule>();
  }
 }
