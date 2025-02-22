import { Component, inject, OnInit } from '@angular/core';
import { UtilModule } from '../../../../utils/util/util.module';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ModalFormServicioComponent } from '../modal-form-servicio/modal-form-servicio.component';
import { GlobalModule } from '../../../../global/global/global.module';
import { CommonModule } from '@angular/common';
import { ServicioService } from '../../../../services/servicio.service';
import { ServicioModule } from '../../../../models/servicio/servicio.module';
import { ToastrService } from 'ngx-toastr';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';


@Component({
  selector: 'app-lista-servicios-para-admin',
  templateUrl: './lista-servicios-para-admin.component.html',
  styleUrl: './lista-servicios-para-admin.component.css',
  imports:[GlobalModule,CommonModule]
})
export class ListaServiciosParaAdminComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nombre', 'descripcion', 'precio','opciones'];
  dataSource = new MatTableDataSource<any>();

  util:UtilModule;
  servicios:Array<ServicioModule>;
  readonly dialog = inject(MatDialog);

  private _snackBar = inject(MatSnackBar);

  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private servicioService:ServicioService,
            
              ){
    this.util=new UtilModule();
    this.servicios= new Array<ServicioModule>();
  }

  ngOnInit(): void {
    //this.dataSource.data = this.util.getListServicios();
    this.cargarServicio()
  }

  cargarServicio(){
    const criteria ={
      next:(res:any)=>{
       this.dataSource.data=res.data;
      },
      err:(error:Error)=>{
        console.log(error);
      }
    }

    this.servicioService.getServicios().subscribe(criteria);
  }

  openDialog(row:any) {
    const dialogRef = this.dialog.open(ModalFormServicioComponent,{
      data:row
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.cargarServicio();
    });
  }
 
  eliminarServicio(id:string){
    event?.stopPropagation();
    const criteria={
      next:(res:any)=>{
          console.log(res);
          this.cargarServicio();
          this.openSnackBar("Servicio Eliminado");
      },
      error:(err:Error)=>{
          console.log(err.message);
          this.openSnackBar("error a eliminar servicio");
          this.cargarServicio();
        }
    }
    var c = confirm("Esta seguro de eliminar?")
    if(c){
      this.servicioService.deleteServicio(id).subscribe(criteria);
    }
  }

  openSnackBar(smg:string){
    this._snackBar.open('Eliminado', 'Undo', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 3000,
      panelClass: ['red-snackbar']
    });
  }

}
