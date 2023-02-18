import { Component,Injectable, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators, ReactiveFormsModule } from '@angular/forms';
import { Jugador } from 'src/app/Interfaces/jugador.interface';
import { JugadorService } from 'src/app/Services/jugador.service';

import { Router } from '@angular/router';
import { User } from 'src/app/Interfaces/user.interface';
import { UserService } from 'src/app/Services/user.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  form: FormGroup;
  usuario?:User;
  
  constructor(private usuarioService: UserService,private fb: FormBuilder,private router:Router)
  {
    this.form = this.fb.group({
      name:  ['',Validators.required],
      email:  ['',Validators.required],
      phone:  ['',Validators.required],
      sexo:  ['',Validators.required],
    })
  }
 
  ngOnInit()
  {
  }

  onSubmit(values: User)
  {
    this.usuarioService.addUser(values).subscribe();
    console.log("se envio") 
  }
  backToLogin()
  {
    this.router.navigate(['login'])
  }

  register()
  {
    this.router.navigate(['mobile-code'])
  }

}
