import { Routes } from '@angular/router';
import { ListaServiciosParaAdminComponent } from './components/Servicios/servicios-para-admin/lista-servicios-para-admin/lista-servicios-para-admin.component';
import { ListaServiciosParaClienteComponent } from './components/Servicios/lista-servicios-para-cliente/lista-servicios-para-cliente.component';
//import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
 // { path: '', component: HomeComponent },
  {path:'',loadChildren:()=>import('./components/Servicios/servicios-para-admin/lista-servicios-para-admin/servicios.module').then(m => m.ServiciosModule)}
];
