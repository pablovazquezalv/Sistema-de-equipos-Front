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

  public apiFailed: boolean = false;
  
  constructor(private usuarioService: UserService,private fb: FormBuilder,private router:Router)
  {
    this.form = this.fb.group({
      name:  ['', [Validators.required, Validators.minLength(3)]],
      email:  ['', [Validators.required, Validators.email]],
      phone:  ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      password_confirmation: ['', [Validators.required, Validators.minLength(8)]],
    });
  }
 
  ngOnInit() { }

  onSubmit(values: User)
  {
    this.usuarioService.addUser(values).subscribe((response:any) => {
      localStorage.setItem('url', response.url);
      this.router.navigate(['mobile-code', response.id], { queryParams: {showMessage: true, message: 'Persona modificada con exito.'}});
    },
    error => {
      console.log(error); 
      this.showError = true; 
      this.apiFailed = true;
    });
  }

  backToLogin()
  {
    this.router.navigate(['login']);
  }

  onAnimationEnd(): void {
    this.apiFailed = false;
  }
}
