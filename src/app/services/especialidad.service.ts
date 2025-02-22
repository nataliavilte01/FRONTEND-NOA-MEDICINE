import { HeaderRowOutlet } from '@angular/cdk/table';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EspecialidadModule } from '../models/especialidad/especialidad.module';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadService {

   URI:string='http://localhost:3000/api/especialidad/'

  constructor(private http:HttpClient) { }

  getEspecialidades():Observable<any>{
    const httpOption ={
      headers:new HttpHeaders({
        'content-type':"application/json"
      })
    }
    return this.http.get(this.URI,httpOption);
  }

  getEspecialidad(id:string):Observable<any>{
    const httpOption ={
      headers:new HttpHeaders({
        'Content-Type':"application/json"
      })
    }
    return this.http.get(this.URI+id,httpOption);
  }

  postEspecialidad(especialidad:EspecialidadModule):Observable<any>{
    const httpOption ={
      headers:new HttpHeaders({
        'Content-Type':"application/json"
      })
    }
    const body = JSON.stringify(especialidad)
    return this.http.post(this.URI,body,httpOption);
  }

}
