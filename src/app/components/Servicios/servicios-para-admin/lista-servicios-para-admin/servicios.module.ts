import { NgModule } from '@angular/core';

import { ServiciosRoutingModule } from './servicios-routing.module';
import { ListaServiciosParaAdminComponent } from './lista-servicios-para-admin.component';
import { GlobalModule } from '../../../../global/global/global.module';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ListaServiciosParaAdminComponent,],
  imports: [
    CommonModule,
    GlobalModule,
    ServiciosRoutingModule
  ]
})
export class ServiciosModule { }
