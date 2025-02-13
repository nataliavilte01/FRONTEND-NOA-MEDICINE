import { Component, inject, OnInit } from '@angular/core';
import { UtilModule } from '../../../../utils/util/util.module';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ModalFormServicioComponent } from '../modal-form-servicio/modal-form-servicio.component';

@Component({
  standalone:false,
  selector: 'app-lista-servicios-para-admin',
  templateUrl: './lista-servicios-para-admin.component.html',
  styleUrl: './lista-servicios-para-admin.component.css'
})
export class ListaServiciosParaAdminComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nombre', 'descripcion', 'precio'];
  dataSource = new MatTableDataSource<any>();

  util:UtilModule;

  readonly dialog = inject(MatDialog);

  constructor(){
    this.util=new UtilModule();
  }

  ngOnInit(): void {
    this.dataSource.data = this.util.getListServicios();
  }

  openDialog() {
    const dialogRef = this.dialog.open(ModalFormServicioComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
 
}
