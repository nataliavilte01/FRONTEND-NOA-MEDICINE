import { Component, OnInit } from '@angular/core';
import { GlobalModule } from '../../../global/global/global.module';
import { PaqueteService } from '../../../services/paquete.service';
import { PaqueteModule } from '../../../models/paquete/paquete.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-paquete-para-cliente',
  imports: [GlobalModule,CommonModule],
  templateUrl: './paquete-para-cliente.component.html',
  styleUrl: './paquete-para-cliente.component.css'
})
export class PaqueteParaClienteComponent implements OnInit {

  paquetes:Array<PaqueteModule>;

  constructor(private paqueteService:PaqueteService){
  this.paquetes= new Array<PaqueteModule>();
  }

  ngOnInit(): void {
    this.loadPaquetes();
  }

  loadPaquetes(){
    const criteria ={
      next:(res:any)=>{
        console.log(res);
        Object.assign(this.paquetes,res.data);
      },
      err:(error:Error)=>console.log(error)
    }

    this.paqueteService.getPaquetes().subscribe(criteria);
  }

}
