import { Component, Inject, inject, OnInit } from '@angular/core';
import { GlobalModule } from '../../../../global/global/global.module';
import { CommonModule } from '@angular/common';
import { ServicioService } from '../../../../services/servicio.service';
import { ServicioModule } from '../../../../models/servicio/servicio.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaqueteModule } from '../../../../models/paquete/paquete.module';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogRef } from '@angular/cdk/dialog';
import { PaqueteService } from '../../../../services/paquete.service';

@Component({
  selector: 'app-modal-form-paquete',
  imports: [GlobalModule,CommonModule],
  templateUrl: './modal-form-paquete.component.html',
  styleUrl: './modal-form-paquete.component.css'
})
export class ModalFormPaqueteComponent implements OnInit {

  formGroup!:FormGroup

  servicios:Array<ServicioModule>
  paquete:PaqueteModule;
  
  modificar:boolean=false;
  titulo:string="Nuevo Paquete";
  idPaquete:string="";
  constructor(@Inject(MAT_DIALOG_DATA)public data:any,
              private servicioService:ServicioService,
              private paqueteService:PaqueteService,
              private dialogRef:DialogRef,
              private formBuilder:FormBuilder){
 this.servicios= new Array<ServicioModule>();
 this.paquete= new PaqueteModule();
  }

  ngOnInit(): void {
    this.initForm();
    if(this.data!=null){
        this.titulo="Modificar Paquete"
        this.modificar=true;
        this.idPaquete=this.data._id;
        this.reloadForm(this.data);
    }
    this.loadServicios();
  }

  initForm(){
    this.formGroup = this.formBuilder.group({
      'nombre':['',Validators.required],
      'precio':['',Validators.required],
      "descripcion":['',Validators.required],
      "servicios":['',Validators.required]
    })
  }

  reloadForm(paquete:PaqueteModule){
    this.formGroup.patchValue({
      'nombre':paquete.nombre,
      'precio':paquete.precio,
      'descripcion':paquete.descripcion,
      'servicios':paquete.servicios
    })

  }

  loadServicios(){
    const criteria= {
      next:(res:any)=>{
        console.log(res);
        this.servicios=res.data
      },
      err:(error:Error)=>console.log(error)
    }

    this.servicioService.getServicios().subscribe(criteria);
  }

  validarPaquete(){
    if(this.formGroup.valid){
        Object.assign(this.paquete,this.formGroup.value);
        this.guardarPaquete(this.paquete)
    }else{
      console.log("formulario invalido")
    }
  }

  guardarPaquete(paquete:PaqueteModule){
     const criteria={
      next:(res:any)=>{
         console.log(res);
         this.dialogRef.close();
      },
      err:(error:Error)=>console.log(error)
     }

     if(!this.modificar){
        this.paqueteService.postPaquete(paquete).subscribe(criteria);
     }else{
       this.paquete._id=this.idPaquete;
       this.paqueteService.putPaquete(paquete).subscribe(criteria);
     }
  }
}
