import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaqueteModule } from '../models/paquete/paquete.module';

@Injectable({
  providedIn: 'root'
})
export class PaqueteService {

  URI:string="http://localhost:3000/api/paquete/";
  constructor(private httpClient:HttpClient) { }

  getPaquetes():Observable<any>{
    const httpOption={
      headers:new HttpHeaders({
        'content-type':'application/json',
      })
    }
   
    return this.httpClient.get(this.URI,httpOption);
  }

  getPaquete(id:string):Observable<any>{
    const httpOption={
      headers:new HttpHeaders({
        'content-type':'application/json',
      })
    }
    return this.httpClient.get(this.URI+id,httpOption);
  }

  postPaquete(paquete:PaqueteModule):Observable<any>{
    const httpOption={
      headers:new HttpHeaders({
        'content-type':'application/json',
      })
    }

    const body = JSON.stringify(paquete);
    return this.httpClient.post(this.URI,body,httpOption);
  }

  putPaquete(paquete:PaqueteModule):Observable<any>{
    const httpOption={
      headers:new HttpHeaders({
        'content-type':'application/json',
      })
    }
    const body = JSON.stringify(paquete);
    return this.httpClient.put(this.URI,body,httpOption);
  }

  addServicioAPaquete(id:string,serviciosID:Array<string>):Observable<any>{
    const httpOption={
      headers:new HttpHeaders({
        'content-type':'application/json',
      })
    }
    const body = JSON.stringify(serviciosID);
    return this.httpClient.patch(this.URI+id,body,httpOption);
  }

  removeServicioDePaquete(id:string,serviciosID:Array<string>):Observable<any>{
    const httpOption={
      headers:new HttpHeaders({
        'content-type':'application/json',
      })
    }
  const body= JSON.stringify(serviciosID);
  return this.httpClient.patch(this.URI+"remove/"+id,body,httpOption);
  }

  deletePaquete(id:string):Observable<any>{
    const httpOption={
      headers:new HttpHeaders({
        'content-type':'application/json',
      })
    }

    return this.httpClient.delete(this.URI+id,httpOption);
  }

}
