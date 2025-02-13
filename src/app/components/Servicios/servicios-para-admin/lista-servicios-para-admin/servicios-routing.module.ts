import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaServiciosParaAdminComponent } from './lista-servicios-para-admin.component';

const routes: Routes = [
   {path:'',component:ListaServiciosParaAdminComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiciosRoutingModule { }
