import { Component, inject, OnInit } from '@angular/core';
import { GlobalModule } from '../../../../global/global/global.module';
import { CommonModule } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';
import { PaqueteService } from '../../../../services/paquete.service';
import { PaqueteModule } from '../../../../models/paquete/paquete.module';
import { MatDialog } from '@angular/material/dialog';
import { ModalFormPaqueteComponent } from '../modal-form-paquete/modal-form-paquete.component';
import { every } from 'rxjs';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-list-paquetes',
  imports: [GlobalModule,CommonModule],
  templateUrl: './list-paquetes.component.html',
  styleUrl: './list-paquetes.component.css'
})
export class ListPaquetesComponent implements OnInit {

  displayedColumns:string[]=["id","nombre","descripcion","precio","opciones"];
  dataSource= new MatTableDataSource<any>();

  paquetes:Array<PaqueteModule>;

  readonly dialog = inject(MatDialog);
  private _snackBar = inject(MatSnackBar);
  
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private paqueteService:PaqueteService){
  this.paquetes= new Array<PaqueteModule>();
  }

  ngOnInit(): void {
    this.loadTable();
  }

  loadTable(){
   const criteria={
    next:(res:any)=>{
        console.log(res);
        this.dataSource.data=res.data;
    },
    err:(error:Error)=>console.log(error)
   }

   this.paqueteService.getPaquetes().subscribe(criteria);
  }

  openDialog(row:any){
     const dialogRef = this.dialog.open(ModalFormPaqueteComponent,{
      data:row
     })
    dialogRef.afterClosed().subscribe(result=>{
      this.loadTable();
    })
  }

  eliminarPaquete(id:string){
    event?.stopPropagation();
    const criteria={
      next:(res:any)=>{
         this.loadTable();
          this.openSnackBar("Paquete eliminado");
      },
      err:(error:Error)=>{
        console.log(error)
        this.openSnackBar("Error al eliminar paquete")
      }
     }
   
     const c = confirm("¿Esta seguro de eliminar el paquete?");
     if(c){
      this.paqueteService.deletePaquete(id).subscribe(criteria);
     }
  }

  openSnackBar(smg:string){
    this._snackBar.open(smg, 'Undo', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 3000,
      panelClass: ['red-snackbar']
    });
  }

}
