import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ServicioModule { 

     id!:number;
     nombre!:string;
     descripcion!:string;
     precio!:number;
     url_image!:string;

}
