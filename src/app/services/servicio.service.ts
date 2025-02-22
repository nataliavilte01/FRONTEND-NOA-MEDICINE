import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServicioModule } from '../models/servicio/servicio.module';
import { FocusMonitor } from '@angular/cdk/a11y';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
 
  URI:string="http://localhost:3000/api/servicio/"
  constructor(private http:HttpClient) { }

  getServicios():Observable<any>{
    const httpOption={
      headers:new HttpHeaders({
        'content-type':'application/json'
      })
    }

    return this.http.get(this.URI,httpOption);
  }

  getServicio(id:string):Observable<any>{
    const httpOption={
      headers:new HttpHeaders({
        'content-type':'application/json'
      })
    }

    return this.http.get(this.URI+id,httpOption);
  }

  postServicio(servicio:ServicioModule,imagenFile:File | null):Observable<any>{
    const formData:FormData = new FormData();
    formData.append('image',"");
    if(imagenFile!=null)
         formData.append('image', imagenFile);
    formData.append('nombre', servicio.nombre);
    formData.append('precio', servicio.precio.toString());
    formData.append('descripcion', servicio.descripcion);
    formData.append('especialidad', servicio.especialidad);

    return this.http.post<FormData>(this.URI,formData);
  }

  putServicio(servicio:ServicioModule,imagenFile:File | null):Observable<any>{
    const formData:FormData = new FormData();
    if(imagenFile!=null)
         formData.append('image', imagenFile);
    formData.append('nombre', servicio.nombre);
    formData.append('precio', servicio.precio.toString());
    formData.append('descripcion', servicio.descripcion);
    formData.append('especialidad', servicio.especialidad);
    formData.append('_id',servicio._id)

    return this.http.put<FormData>(this.URI,formData);
  }


  deleteServicio(id:string):Observable<any>{
    const httpOption={
      headers:new HttpHeaders({
        'content-type':'application/json'
      })
    }

    return this.http.delete(this.URI+id,httpOption);
  }


}
