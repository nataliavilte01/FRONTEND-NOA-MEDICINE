import { Routes } from '@angular/router';
import { ListaServiciosParaAdminComponent } from './components/Servicios/servicios-para-admin/lista-servicios-para-admin/lista-servicios-para-admin.component';
import { ListaServiciosParaClienteComponent } from './components/Servicios/lista-servicios-para-cliente/lista-servicios-para-cliente.component';
import { PaqueteParaClienteComponent } from './components/paquetes/paquete-para-cliente/paquete-para-cliente.component';
//import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
 { path: 'list-servicios-paciente', component: ListaServiciosParaClienteComponent },
 {path:'list-servicios-admin',loadChildren:()=>import('./components/Servicios/servicios-para-admin/lista-servicios-para-admin/servicios-routing.module').then(m => m.ServiciosRoutingModule)},
 //paquetes
 {path:'list-paquetes-cliente',component:PaqueteParaClienteComponent}, 
 {path:'list-paquetes-admin',loadComponent:()=>import('./components/paquetes/paquetes-para-admin/list-paquetes/list-paquetes.component').then(m=>m.ListPaquetesComponent)},
 //PARTE DE NATALIA
  {path: 'list-medicos', loadComponent: ()=> import ('./components/medico/list-medicos/list-medicos.component').then( m=> m.ListMedicosComponent) },
  {path: 'form-medico', loadComponent: ()=>import ('./components/medico/form-medico/form-medico.component').then (m=>m.FormMedicoComponent)}
];
