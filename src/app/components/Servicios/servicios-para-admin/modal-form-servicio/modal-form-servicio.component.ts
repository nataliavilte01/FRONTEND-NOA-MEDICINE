import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { GlobalModule } from '../../../../global/global/global.module';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ServicioModule } from '../../../../models/servicio/servicio.module';
import { EspecialidadService } from '../../../../services/especialidad.service';
import { EspecialidadModule } from '../../../../models/especialidad/especialidad.module';
import { ServicioService } from '../../../../services/servicio.service';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-modal-form-servicio',
  imports: [GlobalModule,CommonModule],
  templateUrl: './modal-form-servicio.component.html',
  styleUrl: './modal-form-servicio.component.css'
})
export class ModalFormServicioComponent implements OnInit {
 
  selectedFile: File | null = null;
  public previsualizacion!:string;

  formGroup!:FormGroup;

  servicio:ServicioModule;
  especialidades:Array<EspecialidadModule>;
  imagenRoute:string="vacio";
  titleForm:string="Nuevo Servicio";

  modificar:boolean=false;

  constructor(@Inject(MAT_DIALOG_DATA)public data:any,
                      private dialogRef:DialogRef,
                     private sanitizer: DomSanitizer, 
                     private formBuilder:FormBuilder,
                     private especialidadService: EspecialidadService,
                     private servicioService: ServicioService ){ 
      this.servicio=new ServicioModule();
      this.especialidades= new Array<EspecialidadModule>();
     }

  ngOnInit(): void {
    this,this.formInit();
    if(this.data!=null){
      this.reloadForm(this.data);
      this.modificar=true;
      this.titleForm="Modificar Servicio"
    }
    this.loadEspecialidades()
  }

  formInit(){
    this.formGroup= this.formBuilder.group({
      'nombre':['',Validators.required],
      'precio':['',Validators.required],
      'descripcion':['',Validators.required],
      'especialidad':['',Validators.required]
    })
  }

  reloadForm(servicio: ServicioModule){
    this.formGroup.patchValue({
      'nombre': servicio.nombre,
      'precio': servicio.precio,
      'descripcion': servicio.descripcion,
      'especialidad':servicio.especialidad
    })
    this.imagenRoute=this.data.image
  }

  loadEspecialidades(){
    const criteria = {
      next:(res:any)=>{
        console.log(res);
        this.especialidades= res.data;
        console.log(this.especialidades)
      },
      err:(error:Error)=>{
        console.log("rd error: "+error)
      }
    }

    this.especialidadService.getEspecialidades().subscribe(criteria)
  }

  cargarServicio(){
    if(this.formGroup.valid){
       Object.assign(this.servicio,this.formGroup.value);
       this.guardarServicio(this.servicio);
    }
    else{
      console.log("no valido");
    }
  }

  guardarServicio(servicio:ServicioModule){
     const criteria={
      next:(res:any)=>{
        console.log(res)
        this.dialogRef.close();
      },
      err:(error:Error)=>{
        console.log(error)
      }
     }
     
     if(this.modificar==true){
        this.servicio._id=this.data._id
        this.servicioService.putServicio(servicio,this.selectedFile).subscribe(criteria)
     }else{ 
      this.servicioService.postServicio(servicio,this.selectedFile).subscribe(criteria);
     }
    }


  capturarFile(event:any){
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
        this.selectedFile = input.files[0];
        const arch = input.files[0];
        console.log(arch)
        this.extraerBase64(arch).then((image:any)=>{
          this.previsualizacion = image.base
        })
     }
   }

   extraerBase64 = async ($event: any) => new Promise((resolve, reject) => {
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
  
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          base: reader.result
        });
      };
  
      reader.onerror = error => {
        reject({
          base: null
        });
      };
    } catch (e) {
      reject({
        base: null
      });
    }
  });
  

}
