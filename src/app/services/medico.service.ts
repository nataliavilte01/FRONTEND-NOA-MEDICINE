import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medico } from '../models/medico/medico';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  url_Base: string = 'http://localhost:3000/api/medico';
  constructor(private http: HttpClient) { }

  getMedicos(): Observable<any> {
    return this.http.get(this.url_Base);
  }

  getMedicoById(_id: string): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.get(this.url_Base + '/' + _id, httpOptions);
  }

  updateMedico(medico: Medico): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    let body: any = JSON.stringify(medico);
    return this.http.put(this.url_Base + '/' + medico._id, body, httpOptions);
  }
  deleteMedico(_id: string): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application-json'
      })
    }
    return this.http.delete(this.url_Base + '/' + _id, httpOptions);
  }
  createMedico(medico: Medico): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    let body: any = {
      "nombre": medico.nombre,
      "apellido": medico.apellido,
      "dni": Number(medico.dni),
      "fecha_nac": medico.fecha_nac.toLocaleDateString('en-ES'),
      "email": medico.dni,
      "telefono": medico.telefono,
      "direccion": medico.direccion,
      "especialidad_medica": medico.especialidad_medica,
      "sueldo": Number(medico.sueldo)
    }
    return this.http.post(this.url_Base, body, httpOptions);
  }
}
