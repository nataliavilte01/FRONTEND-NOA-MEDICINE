import { Component, OnInit } from '@angular/core';
import { GlobalModule } from '../../../global/global/global.module';
import { ServicioService } from '../../../services/servicio.service';
import { ServicioModule } from '../../../models/servicio/servicio.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-servicios-para-cliente',
  imports: [GlobalModule,CommonModule],
  templateUrl: './lista-servicios-para-cliente.component.html',
  styleUrl: './lista-servicios-para-cliente.component.css'
})
export class ListaServiciosParaClienteComponent implements OnInit {

  servicios:Array<ServicioModule>
  constructor(private servicioService:ServicioService){
    this.servicios=new Array<ServicioModule>();
  }

  ngOnInit(): void {
   this.cargarServicio()   
  }

  cargarServicio(){
    const criteria ={
      next:(res:any)=>{
       this.servicios=res.data;
      },
      err:(error:Error)=>{
        console.log(error);
      }
    }

    this.servicioService.getServicios().subscribe(criteria);
  }
}
