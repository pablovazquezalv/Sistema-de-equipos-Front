import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Interfaces/user.interface';
import { UserService } from 'src/app/Services/user.service';
import { OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { RolesDialogComponentComponent } from '../roles-dialog-component/roles-dialog-component.component';
import { StatusDialogComponent } from '../status-dialog/status-dialog.component';

import { SharedServiceService } from 'src/app/Services/shared-service.service';
@Component({
  selector: 'app-ver-usuarios',
  templateUrl: './ver-usuarios.component.html',
  styleUrls: ['./ver-usuarios.component.css']
})
export class VerUsuariosComponent implements OnInit {

 
  id: number = 0;
  usuarios: User[] = [];

  constructor(private userService: UserService,private sharedService: SharedServiceService,private router:Router, private dialog: MatDialog)
  {
    
  }

  ngOnInit()
  { 
    this.id = this.sharedService.getId();
    console.log(this.id);
    this.userService.mostrarUnico(this.id).subscribe(user => {
    console.log(user)});
    this.getUsers();  
  }

  getUsers()
  {
    this.userService.getUsers().subscribe(data => this.usuarios = data);  
  }

  cambiaStatus(id: number)
  {
    this.router.navigate(['usuarios/cambiastatus',id])
  }

  cambiaRol(id: number)
  {
    this.router.navigate(['usuarios/cambiarol',id])
  }

  openDialogRole(id: number, role: number) 
  {
    if(role == 1)
    {
      alert("No puedes cambiar el rol de un administrador");
    }

    else
    {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.width = '250px';
      dialogConfig.data = { id: id };

      const dialogRef = this.dialog.open(RolesDialogComponentComponent, dialogConfig);

      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }
  }

  openDialogStatus(id: number, role: number) 
  {
    if(role == 1)
    {
      alert("No puedes cambiar el status de un administrador");
    }

    else
    {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.width = '250px';
      dialogConfig.data = { id: id };

      const dialogRef = this.dialog.open(StatusDialogComponent, dialogConfig);

      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }
  }

  onDelete(id: number, role: number)
  {
    if(role == 1)
    {
      alert("No puedes eliminar un administrador");
    }

    else
    {
      if(confirm("¿Estás seguro de que quieres eliminar este usuario?"))
      {
        this.userService.deleteUser(id).subscribe(data => {
          location.reload();
        });
      }
    }
  }
}
