import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Interfaces/user.interface';
import { UserService } from 'src/app/Services/user.service';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-ver-usuarios',
  templateUrl: './ver-usuarios.component.html',
  styleUrls: ['./ver-usuarios.component.css']
})
export class VerUsuariosComponent implements OnInit {

  usuarios: User[] = [];

  constructor(private userService: UserService,private router:Router){ }

  ngOnInit()
  {
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
}
