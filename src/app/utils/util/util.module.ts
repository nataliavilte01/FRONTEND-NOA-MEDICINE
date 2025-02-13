import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicioModule } from '../../models/servicio/servicio.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class UtilModule {



  getListServicios(){
    let s1 = new ServicioModule()
    s1.id=1;
    s1.nombre="Consultas Externas";
    s1.descripcion="Consultas médicas en diversas especialidades como cardiología, dermatología, endocrinología, entre otras.";
    s1.precio=12000;

    let s2 = new ServicioModule();
    s2.id=2;
    s2.nombre="Cirugía";
    s2.descripcion="Procedimientos quirúrgicos, tanto generales como especializados, incluyendo ortopédica, cardíaca y neurocirugía.";
    s2.precio=135000;

    let s3 = new ServicioModule();
    s3.id=3;
    s3.nombre="Radiología e Imágenes Diagnósticas";
    s3.descripcion="Servicios de diagnóstico por imagen, como rayos X, resonancias magnéticas y ultrasonidos.";
    s3.precio=10000;

    let s4 = new ServicioModule();
    s4.id=4;
    s4.nombre="Urgencias y Emergencias";
    s4.descripcion="Atención inmediata para condiciones críticas y accidentes.";
    s4.precio=20000;

    let s5 = new ServicioModule();
    s5.id=5;
    s5.nombre="Laboratorio Clínico";
    s5.descripcion="Realización de análisis de sangre, orina, tejidos y otros estudios de laboratorio para diagnóstico y seguimiento de enfermedades.";
    s5.precio=30000;

    let s6 = new ServicioModule();
    s6.id=6;
    s6.nombre="Farmacia Hospitalaria";
    s6.descripcion="Dispensación de medicamentos y asesoramiento farmacéutico para los pacientes hospitalizados y ambulatorios.";
    s6.precio=40000;

    let listServicio= new Array<ServicioModule>(s1,s2,s3,s4,s5,s6);
   return listServicio;
  }

 }
