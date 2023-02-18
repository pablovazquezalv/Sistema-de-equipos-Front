import { Component,Injectable, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators, ReactiveFormsModule } from '@angular/forms';


import { Router } from '@angular/router';
import { User } from 'src/app/Interfaces/user.interface';
import { UserService } from 'src/app/Services/user.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  
  showError: boolean = false;
  form: FormGroup;
  usuario?:User;
  
  constructor(private usuarioService: UserService,private fb: FormBuilder,private router:Router)
  {
    this.form = this.fb.group({
      name:  ['',Validators.required],
      email:  ['',Validators.required],
      phone:  ['',Validators.required],
      password: ['',Validators.required],
      password_confirmation: ['',Validators.required],
    });
    
  }
 
  ngOnInit()
  {
  }

  onSubmit(values: User)
  {
    this.usuarioService.addUser(values).subscribe(response => {
      console.log(response); this.router.navigate(['mobile-code'], 
      { queryParams: { showMessage: true, message: 'Persona modificada con exito.' } });},
      error => {console.log(error); this.showError = true;});
    console.log("se envio") 
  }
  backToLogin()
  {
    this.router.navigate(['login'])
  }
  
/*
  register()
  {
    this.router.navigate(['mobile-code'])
  }*/

}
