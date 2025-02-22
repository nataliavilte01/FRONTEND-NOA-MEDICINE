import { Routes } from '@angular/router';
import { ListaServiciosParaAdminComponent } from './components/Servicios/servicios-para-admin/lista-servicios-para-admin/lista-servicios-para-admin.component';
import { ListaServiciosParaClienteComponent } from './components/Servicios/lista-servicios-para-cliente/lista-servicios-para-cliente.component';
//import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  {path:'',loadChildren:()=>import('./components/Servicios/servicios-para-admin/lista-servicios-para-admin/servicios.module').then(m => m.ServiciosModule)},
  //PARTE DE NATALIA
  {path: 'list-medicos', loadComponent: ()=> import ('./components/medico/list-medicos/list-medicos.component').then( m=> m.ListMedicosComponent) },
  {path: 'form-medico', loadComponent: ()=>import ('./components/medico/form-medico/form-medico.component').then (m=>m.FormMedicoComponent)}
];
